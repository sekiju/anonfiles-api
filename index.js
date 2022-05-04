'use strict'

const fs = require("fs")
const fetch = (...args) => import('node-fetch').then(({default: fetch}) => fetch(...args));
const FormData = require("form-data")
const { ErrorResponse, SuccessfulResponse } = require("./types")

/**
 * @param { string | File | Blob } content
 * @returns { Promise<SuccessfulResponse | ErrorResponse> }
 */
async function uploadAnonFile(content) {
    let file = content

    if (typeof content === "string") {
        file = fs.createReadStream(content)
    }

    let form = new FormData()
    form.append("file", file)

    return fetch("https://api.anonfiles.com/upload", { body: form, method: 'POST' }).then(async (res) => {
        let data = await res.json()
        return data.status ? new SuccessfulResponse(data.status, data.data) : new ErrorResponse(data.status, data.error)
    })
}

/**
 * @param { string } id
 * @returns { Promise<SuccessfulResponse | ErrorResponse> }
 */
async function getAnonInfo(id) {
    return fetch(`https://api.anonfiles.com/v2/file/${id}/info`).then(async (res) => {
        let data = await res.json()
        return data.status ? new SuccessfulResponse(data.status, data.data) : new ErrorResponse(data.status, data.error)
    })
}

module.exports = { uploadAnonFile, getAnonInfo }