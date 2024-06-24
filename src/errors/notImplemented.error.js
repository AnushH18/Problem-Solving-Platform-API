const { StatusCodes } = require('http-status-codes');
const BaseError = require('./base.error');

class notImplemented extends BaseError{
    constructor(methodName){
        super("not Implemented", StatusCodes.NOT_IMPLEMENTED, `${methodName} not implemented`, 'service not implemented');
    }
}

module.exports = notImplemented;