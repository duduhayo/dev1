const dbService = require('../db/db.service');


async function getMembers() {
    const membersObj = await dbService.getMembers();
    return {
        ...membersObj,
        members: membersObj.members.map(member => {
            return {
                id: member.id,
                name: member.name
            }
        })
    };
}

async function getMemberById(id) {
    const memberObj = await dbService.getMemberById(id)
    return {
        member: memberObj
    }
}

async function checkMemberHierarchy(memberHierarchyId, memberId) {
    return await dbService.checkMemberHierarchy(memberHierarchyId, memberId);
}

module.exports = {
    getMembers,
    getMemberById
};