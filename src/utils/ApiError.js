class ApiError {
    constructor(statusCode, message = "Something went wrong", stack = "", Errors = []) {
        // super(this.message)
        this.statusCode = statusCode,
        this.message = message,
        this.data = null,
        this.Errors = Errors,
        this.success = false;
        
        if (stack) {
            this.stack = stack
        } else {
            Error.captureStackTrace(this, this.constructor)
        }
        
    }
}

export {ApiError}