/* ouvrez un nouveau terminal et tapez : "npm i discord.js" */
/* code à mettre dans un fichier .js comme main.js*/
const Discord = require('discord.js');
const { token } = require('./config');
const client = new Discord.Client({ intents: 3276799 });
/* il permet de mettre en place les différents paramètres de base du BOT, comme les instances qu'il va utiliser ou le module discord.js installer précédemment */

/* après avoir mis le code ci-dessus dans le fichier "main.js" vous devez créer un nouveau fichier du nom de "config.js" il a pour but de mettre sont token discord en toute sécurité */

/* dans le fichier "config.js" vous devez écrire ceci : module.exports = {token: "TOKEN_DU_BOT"}*/

/* ce code permet d'utiliser le token situé dans le fichier "config.js" crée juste avant*/
client.login(token);

/* Permet de dire "NOM_DU_BOT est en ligne !" lors de la mise en service du bot*/
client.on('ready', () => {
  console.log(`${client.user.tag} est en ligne !`);
});

/* une fois toutes les étapes respecter ouvrez le TERMINAL et tapez : "node main" après quelques secondes le message : "NOM_DU_BOT est en ligne !" Devrais aparaitre. Bravo, votre premier bot est en ligne !*/