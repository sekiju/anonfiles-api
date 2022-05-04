'use strict'

const fs = require("fs")
const fetch = (...args) => import('node-fetch').then(({default: fetch}) => fetch(...args));
const FormData = require("form-data")

class SuccessfulResponse {
    /**
     * @param { boolean } status
     * @param {{ file: { url: { full: string, short: string }, metadata: { id: string, name: string, size: { bytes: number, readable: string }}}}} data
     */
    constructor(status, data) {
        this.status = status
        this.data = data
    }
}

class ErrorResponse {
    /**
     * @param { boolean } status
     * @param {{ message: string, type: string, code: number }} error
     */
    constructor(status, error) {
        this.status = status
        this.error = error
    }
}

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

    console.log(form)

    return fetch("https://api.anonfiles.com/upload", { body: form, method: 'POST' }).then(async (res) => {
        let data = await res.json()
        return data.status ? new SuccessfulResponse(data.status, data.data) : new ErrorResponse(data.status, data.error)
    })
}

module.exports = { uploadAnonFile }