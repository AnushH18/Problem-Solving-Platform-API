const sanitizeMarkdownContent = require("../utils/markdownSanitizer");

class problemService{
    constructor(problemRepository){
        this.problemRepository = problemRepository
    }

    async createProblem(problemData){
        problemData.description = sanitizeMarkdownContent(problemData.description);
        console.log(problemData.description);
        const problem = await this.problemRepository.createProblemm(problemData);
        return problem;
    }

    async getProblems(){
        const response = await this.problemRepository.getProblems();
        return response;
    }

    async getProblem(id){
        const prb = await this.problemRepository.getProblem(id);
        return prb;
    }

    async updateProblem(id, data){
        if(data.description){
            data.description = sanitizeMarkdownContent(data.description);
        }
        const prb = await this.problemRepository.updateProblem(id, data);
        return prb;
    }

    async deleteProblem(id){
        const prb = await this.problemRepository.deleteProblem(id);
        return prb;
    }
}

module.exports = problemService;