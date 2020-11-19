const {Schema,model} = require('mongoose')

const DevSchema = new Schema({
    name :  String,
    login : {
        type : String,
        required : true
    },
    bio : String,
    avatar : {
        type : String,
        required : true
    },
    likes : [{
        type : Schema.Types.ObjectId,
        ref : 'Dev',
    }],
    dislikes : [{
        type : Schema.Types.ObjectId,
        ref : 'Dev',
    }]
}, {
    timestamps : true //Cria coluna createdAt e updatedAt
} )

module.exports = model('Dev', DevSchema) 