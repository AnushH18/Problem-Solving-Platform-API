const { StatusCodes } = require("http-status-codes");
const { problemService } = require("../services");
const { problemRepository } = require("../repository");

const prbSer = new problemService(new problemRepository())

function pingProblemController(req, res) {
    return res.json({message: 'Problem controller is up'});
}

async function getProblem(req, res, next){
    console.log(req.params.id);
    try {
        const problem = await prbSer.getProblem(req.params.id);
        return res.status(StatusCodes.OK).json({
            success : true, 
            message : 'successfully fetched a problem', 
            error : {},
            data : problem
        })
    } catch (error) {
        next(error);
    }
}

async function getProblems(req, res, next){
    try {
        const response = await prbSer.getProblems();
        return res.status(StatusCodes.OK).json({
            success : true, 
            message : 'successfully fetched the problems', 
            error : {},
            data : response
        })
    } catch (error) {
        console.log(error);
        next(error);
    }
}

async function createProblem(req, res, next){
    try {
        console.log("Incoming req body : ", req.body);
        const newProblem = await prbSer.createProblem(req.body);
        return res.status(StatusCodes.CREATED).json({
            success : true, 
            message : 'successfully created a new problem', 
            error : {},
            data : newProblem
        })
    } 
    catch (error) {   
        next(error);
    }
}



async function updateProblem(req, res, next){
    try {
        const update = await prbSer.updateProblem(req.params.id, req.body);
        return res.status(StatusCodes.OK).json({
            success : true,
            message : "Successfully updated the problem",
            error : {},
            data : update
        })
    } catch (error) {
        next(error);
    }
}

async function deleteProblem(req, res, next){
    try {
        const deletedPrb = await prbSer.deleteProblem(req.params.id);
        return res.status(StatusCodes.OK).json({
            success : true,
            message : "Successfully deleted the problem",
            error : {},
            data : req.params.id
        })
    } catch (error) {
        next(error);
    }
}

module.exports = {
    pingProblemController,
    getProblem,
    getProblems,
    createProblem,
    updateProblem,
    deleteProblem, 
}