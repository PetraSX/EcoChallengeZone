const mongoose = require('mongoose');
const ObjectId = mongoose.Schema.Types.ObjectId;

const challengeSchema = mongoose.Schema({
    description: {
        type: String,
        required: true
    },
    tokens: {
        type: Number,
        required: true
    },
    userId: {
        type: ObjectId,
        required: true
    }
});

module.exports = mongoose.model(Challenges, challengeSchema);