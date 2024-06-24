const express = require('express');
const { problemController } = require('../../controllers');
const problemRoute = express.Router();



problemRoute.get('/ping', problemController.pingProblemController)
problemRoute.get('/:id', problemController.getProblem);
problemRoute.get('/', problemController.getProblems);
problemRoute.post('/create', problemController.createProblem);
problemRoute.put('/:id', problemController.updateProblem); 
problemRoute.delete('/:id', problemController.deleteProblem);

module.exports = problemRoute;