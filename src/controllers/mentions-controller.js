const mongoose = require('mongoose');
const Mentions = mongoose.model('Mentions');

//list
exports.listMentions = async(req, res) => {
	try {
		const data = await Mentions.find({});
		res.status(200).send(data);
	} catch(e) {
		res.status(500).send({message: 'Failed to load mentions'});
	}
};

//create 
exports.createMention = async(req, res) => {
	try {
		const mention = new Mentions({
			friend: req.body.friend,
			mention: req.body.mention
		});

		console.log(mention);

		await mention.save();

		res.status(201).send({message: 'Mention registred with success'});
	} catch(e) {
		res.status(500).send({message: 'fail register'});
	}
};