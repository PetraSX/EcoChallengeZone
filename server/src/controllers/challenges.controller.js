const Challenge = require('../models/challenge.model');

const listChallenges = async (req, res) => {
    try {
        const challenges = await Challenge.find();
        res.status(200).send(challenges);
    } catch (err) {
        res.status(500).send({ message: err });
    }
};

const createChallenge = async (req, res) => {

    const challenge = new Challenge({
        description: req.body.description,
        tokens: req.body.tokens,
        userId: req.user._id
    });

    if (challenge.description.length > 2500) {
        res.status(403).send({ message: "Description length should be <= 2500 characters" });
        return
    }

    try {
        await challenge.save();
        res.status(200).send({ message: 'Challenge adaugat!' });
    } catch (err) {
        res.status(500).send({ message: err });
    }
}

const getChallenge = async (req, res) => {
    const { id } = req.params;

    try {
        const challenge = await Challenge.findOne({ _id: id });
        res.status(200).send(challenge);
    } catch (err) {
        res.status(404).send({ message: "Can't find the challenge with that ID." });
    }
}

const deleteChallenge = async (req, res) => {
    const { id } = req.params;

    try {
        await Challenge.deleteOne({ _id: id });
        res.status(200).send({ message: `Quote with id ${id} deleted from database` });
    } catch (err) {
        res.status(500).send({ message: err });
    }
}

const updateChallenge = async (req, res) => {
    const { id } = req.params;
    try {
        const { description } = req.body;
        const challenge = await Challenge.findOne({ _id: id });
        const userIdReq = req.user._id.toString();
        if (userIdReq !== challenge["userId"]) {
            res.status(403).send({ message: "You can only modify your own memes!" });
            return;
        }
        if (description) {
            await Challenge.updateOne({ _id: id }, { $set: { description: description } });
        }
        res.status(200).send({ message: `Challenge with id ${id} updated` });
    } catch (err) {
        res.status(500).send({ message: err });
    }

}

module.exports = {
    listChallenges: listChallenges,
    createChallenge: createChallenge,
    getChallenge: getChallenge,
    deleteChallenge: deleteChallenge,
    updateChallenge: updateChallenge
};