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
    } catch (err) {
        const errMessage = _.get(err, 'message', 'error occurred');
        const errCode = _.get(err, 'status', 500);
        res.status(errCode).json({
            message: 'error occurred',
            error: errMessage
        });
    }
}

async function getMemberById(req, res, next) {
    try {
        console.log(`[members] getMemberById, id: ${req.params.id}`);
        const member = await controller.getMemberById(req.params.id);
        res.status(200).send(member);
    } catch (err) {
        const errMessage = _.get(err, 'message', 'error occurred');
        const errCode = _.get(err, 'status', 500);
        res.status(errCode).json({
            message: 'error occurred',
            error: errMessage
        });
    }
}
async function checkMemberHierarchy(req, res, next) {
    try {
        console.log(`[members] getMemberById, id: ${req.params.id}`);
        const id = req.params.id;
        const currentUserId = res.locals.account.id

        if (id == currentUserId)
            next()
        else {
            const hierarchies = await hierarchyController.getHierarchyForId(id)

            if (hierarchies.hierarchies.length > 0) {
                const currentUserId = res.locals.account.id
                const parent = hierarchies.hierarchies.find(t => t.parentMemberId == currentUserId)
                if (parent)
                    next();
                else
                    throw {
                        message: 'Session expired, please re-login',
                        status: 403
                    };
            } else
                throw {
                    message: 'Session expired, please re-login',
                    status: 403
                };
        }
    } catch (err) {
        const errMessage = _.get(err, 'message', 'error occurred');
        const errCode = _.get(err, 'status', 500);
        res.status(errCode).json({
            message: 'error occurred',
            error: errMessage
        });
    }
}


module.exports = router;