const express = require('express');
const router = express.Router();
const _ = require('lodash');
const controller = require('./members.controller');
const hierarchyController = require("../hierarchy/hierarchy.controller")

router.get('/', getMembers);
router.get('/:id', checkMemberHierarchy, getMemberById);

async function getMembers(req, res, next) {
    try {
        console.log(`[members] getMembers page: ${req.query.page}, rpp: ${req.query.rpp}`);
        const members = await controller.getMembers();
        res.status(200).send(members);
    }
    catch (err) {
        const errMessage = _.get(err, 'message', 'error occurred');
        const errCode = _.get(err, 'status', 500);
        res.status(errCode).json({ message: 'error occurred', error: errMessage });
    }
}

async function getMemberById(req, res, next) {
    try {
        console.log(`[members] getMemberById, id: ${req.params.id}`);
        const member = await controller.getMemberById(req.params.id);
        res.status(200).send(member);
    }
    catch (err) {
        const errMessage = _.get(err, 'message', 'error occurred');
        const errCode = _.get(err, 'status', 500);
        res.status(errCode).json({ message: 'error occurred', error: errMessage });
    }
}
async function checkMemberHierarchy(req, res, next) {
    try {
        console.log(`[members] getMemberById, id: ${req.params.id}`);
        const id = req.params.id;
        const hierarchies = hierarchyController.getHierarchyForId(id)
        res.status(200).send(member);
        next();
    }
    catch (err) {
        const errMessage = _.get(err, 'message', 'error occurred');
        const errCode = _.get(err, 'status', 500);
        res.status(errCode).json({ message: 'error occurred', error: errMessage });
    }
}


module.exports = router;
