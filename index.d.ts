type SuccessfulResponse = {
    status: boolean // true
    data: {
        file: {
            url: {
                full: string
                short: string
            },
            metadata: {
                id: string
                name: string
                size: {
                    bytes: number
                    readable: string
                }
            }
        }
    }
}

type ErrorTypes  =
    "ERROR_FILE_NOT_PROVIDED" | // 10
    "ERROR_FILE_EMPTY" | // 11
    "ERROR_FILE_INVALID" | // 12
    "ERROR_USER_MAX_FILES_PER_HOUR_REACHED" | // 20
    "ERROR_USER_MAX_FILES_PER_DAY_REACHED" | // 21
    "ERROR_USER_MAX_BYTES_PER_HOUR_REACHED" | // 22
    "ERROR_USER_MAX_BYTES_PER_DAY_REACHED" | // 23
    "ERROR_FILE_DISALLOWED_TYPE" | // 30
    "ERROR_FILE_SIZE_EXCEEDED" | // 31
    "ERROR_FILE_BANNED" | // 32
    "STATUS_ERROR_SYSTEM_FAILURE" | // 40
    "FILE_NOT_FOUND" // 404

type ErrorCodes  = 10 | 11 | 12 | 20 | 21 | 22 | 23 | 30 | 31 | 32 | 40 | 404

type ErrorResponse = {
    status: boolean // false
    error: {
        message: string
        type: ErrorTypes
        code: ErrorCodes
    }
}

declare module '@sekiju/anonfiles-api' {
    export function uploadAnonFile(content: string | File | Blob): Promise<SuccessfulResponse | ErrorResponse>
}