const dbService = require('../db/db.service');



const getHierarchyForId = async (id) => {
   return await dbService.getHierarchyItemById(id);
}


module.exports = {
   getHierarchyForId
};