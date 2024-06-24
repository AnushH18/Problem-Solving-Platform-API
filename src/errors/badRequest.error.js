const { StatusCodes } = require("http-status-codes");
const BaseError = require("./base.error");


class badRequest extends BaseError{
    constructor(propertyName, details){
        super("bad request", StatusCodes.BAD_REQUEST, `Invalid structure for ${propertyName} provided`, details);
    }
}

module.exports = badRequest;