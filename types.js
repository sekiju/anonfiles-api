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

module.exports = { SuccessfulResponse, ErrorResponse }