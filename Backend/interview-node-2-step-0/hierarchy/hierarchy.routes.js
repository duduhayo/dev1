const express = require('express');
const router = express.Router();
const _ = require('lodash');
const controller = require('./hierarchy.controller')

router.get('/:id', getHierarchyForId);


async function getHierarchyForId(req, res, next) {
    try {
        console.log(`[hierarchies] getHierarchyForId id: ${req.params.id}`);
        const hiearchies = await controller.getHierarchyForId(req.params.id);
        res.status(200).send(hiearchies);
    }
    catch (err) {
        const errMessage = _.get(err, 'message', 'error occurred');
        const errCode = _.get(err, 'status', 500);
        res.status(errCode).json({ message: 'error occurred', error: errMessage });
    }
}



module.exports = router;
