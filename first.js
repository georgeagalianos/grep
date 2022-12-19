const { EmbedBuilder, WebhookClient } = require('discord.js');
// const { webhookId, webhookToken } = require('./config.json');


// const webhookClient = new webhookClient({ url: 'https://discord.com/api/webhooks/899290982204448809/KU4xRnqlsR4o9az1yuun6jmdiPfp5KNBthhhTWZCxpoDXioz9hk4Kut8thV8uUZEgEhy' });

const webhookClient = new WebhookClient({ url: 'https://discord.com/api/webhooks/899290982204448809/KU4xRnqlsR4o9az1yuun6jmdiPfp5KNBthhhTWZCxpoDXioz9hk4Kut8thV8uUZEgEhy/MTA1NDI4Mzc5ODM0NDM4NDU2Mg.GL59Uj.-JZkrg10JwBWbs26iaskub8yZqbZhBVbt2PyPE' });

// console.log(webhookClient)

const embed = new EmbedBuilder()
	.setTitle('Some Title')
	.setColor(0x00FFFF);

webhookClient.send({
	content: 'Webhook test',
	username: 'some-username',
	avatarURL: 'https://i.imgur.com/AfFp7pu.png',
	embeds: [embed],
});