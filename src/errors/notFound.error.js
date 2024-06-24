const { StatusCodes } = require("http-status-codes");
const BaseError = require("./base.error");

class notFound extends BaseError{
    constructor(methdName){
        super("Not Found", StatusCodes.NOT_FOUND, `${methdName} not found`, "No such service found");
    }
}

module.exports = notFound;