const { StatusCodes } = require("http-status-codes");
const BaseError = require("./base.error");

class internalServer extends BaseError{
    constructor(details){
        super("internal server error", StatusCodes.INTERNAL_SERVER_ERROR, "There is internal issue in server", details);
    }
}

module.exports = internalServer;