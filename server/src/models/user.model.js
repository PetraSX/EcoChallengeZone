const mongoose = require('mongoose')

const userSchema = new mongoose.Schema({
    email: {
        type: String,
        required: true
    },
    username: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true
    },
    tokens: {
        type: Number,
        required: true
    }
});

userSchema.methods.removeFromDB = async function() {
    await this.model('Users',userSchema).deleteOne({_id: this._id});
};

module.exports = mongoose.model('Users', userSchema);