const express=require('express');

const {httpAbortLaunch,httpGetAllLaunches,httpAddNewLaunch} =require('./launches.controller')
const launchesRouter=express.Router();
launchesRouter.get('/launches',httpGetAllLaunches);
launchesRouter.post('/launches',httpAddNewLaunch);
launchesRouter.delete('/launches/:id',httpAbortLaunch)
module.exports=launchesRouter
