const { Problem } = require('../models/index');
const NotFound = require('../errors/notFound.error');
const logger = require('../config/logger.config');

class problemRepository{
    async createProblemm(problemData){
        try {
            // throw  {"err" : "some error"}
            const problem = await Problem.create({
                title : problemData.title,
                description : problemData.description,
                testCases : (problemData.testCases) ? problemData.testCases : []
            })
            return problem; 
        } catch (error) {
            console.log(error);
            throw error;
        }
    }

    async getProblems(){
        try {
            const problem = await Problem.find({});
            return problem;
        } catch (error) {
            throw error;
        }
    }

    async getProblem(id){
        try {
            const problem = await Problem.findById(id);
            if(!problem){
                throw new NotFound("Problem", id);
            }
            return problem;
        } catch (error) {
            throw error;
        }
    }

    async updateProblem(id, data){
        try {
            const prb = await Problem.findOneAndUpdate({_id:id},data,{new:true});
            if(!prb){
                throw new NotFound("Problem", id);
            }
            console.log(prb);
            return prb;
        } catch (error) {
            throw error;
        }
    }

    async deleteProblem(id){
        try {
            const prb = await Problem.findByIdAndDelete(id);
            if(!prb){
                console.lod(id)
                logger.error(`Problem with id: ${id} not found on DB`)
                throw new NotFound("Problem", id);
            }
            return prb;
        } catch (error) {
            throw error;
        }
    }
}

module.exports = problemRepository;