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
        required: [true,'req/brown only accepted'],
        enum: {
            values: ['red','brown'],
            message: '{VALUE} is not supported'
        }
    },
    "domain" : {
        type: String,
        required: [true,'tech/marketing/design only accepted'],
        enum: {
            values: ['tech','marketing','design'],
            message: '{VALUE} is not supported'
        }
    },
    "mob_no" : {
        type: Number,
        required: true,
        minlength: 10,
        maxlength: 10
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