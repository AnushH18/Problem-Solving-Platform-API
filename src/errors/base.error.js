class BaseError extends Error{
    constructor(name,staCd,description,details){
        super(description);
        this.name = name;
        this.staCd = staCd;
        this.details = details;
    }   
}

module.exports = BaseError;