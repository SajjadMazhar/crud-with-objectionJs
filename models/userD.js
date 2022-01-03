const {Model} = require("objection");
const db = require("../config/db")
Model.knex(db);

class UserDetail extends Model{
    static get tableName(){
        return "objcrud"
    }

    static get jsonSchema(){
        return {
            type:'object',
            required:['name', 'age', 'gender'],
            properties:{
                id:'integer',
                name:{
                    type:'string',
                },
                age:{
                    type:'integer'
                },
                gender:{
                    type:'string'
                }
            }
        }
    }
}
module.exports = UserDetail;