const mongoose = require('mongoose');
const Schema = mongoose.Schema;

var validateEmail = function(email) {
    var re = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    return re.test(email)
};

const userSchema = new Schema({
    "name" : {
        type: String,
        required: true
    },
    "reg_no" : {
        type: String,
        required: true
    },
    "tag" : {
        type: String,
        required: [true,'choose tag!'],
        enum: {
            values: ['red','brown'],
            message: 'req/brown only accepted'
        }
    },
    "domain" : {
        type: String,
        required: [true,'Choose domain'],
        enum: {
            values: ['tech','marketing','design'],
            message: 'tech/marketing/design only accepted'
        }
    },
    "mob_no" : {
        type: Number,
        required: true
    },
    "email": {
        type: String,
        required: 'Email address is required',
        validate: [validateEmail, 'Please fill a valid email address'],    
    }
},{
    timestamps: true
});

const User = mongoose.model('User',userSchema);
module.exports = User;