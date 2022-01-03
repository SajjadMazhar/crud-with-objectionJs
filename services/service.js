const User = require("../models/userD");

module.exports = class UserService {
    async createUser(inputs){
        try{
            const orgData = await User.query().where({name:inputs.name})
            if(orgData.length==0){
                await User.query().insert(inputs);
                console.log(orgData)
                return {status:"inserted"}
            }

        }catch(err){
            console.log(err.message)
            return {"error":"error while creating user"}
        }
    }

    async readUser(){
        return await User.query();
    }

    async updateUserById(id, newData){
        const updateCount = await User.query()
        .update(newData)
        .where({id})
        console.log("after update")
        if(updateCount == 0){
            return {"error":"error while updating user"}
        }
        return {status:"updated"}
    }

    async deleteUserById(id){
        const deleteCount = await User.query().deleteById(id)
        if(deleteCount==0){
            return {"error":"error while deleting user"}
        }
        return {status:"deleted"}
    }
}
