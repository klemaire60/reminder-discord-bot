const Discord = require("discord.js")

module.exports = {

    name: "kidrauhl",
    description: "Spécial Kidrauhl",
    permission: Discord.PermissionFlagsBits.ManageMessages,
    dm: true,
    category: "informations",
    options: [
        {
            type: "string",
            name: "rmd",
            description: "affiche le rappel perso",
            required: false,
            autocomplete: true,
        },{
            type: "string",
            name: "heure",
            description: "affiche le rappel perso",
            required: false,
            autocomplete: false,
        },{
            type: "string",
            name: "minute",
            description: "affiche le rappel perso",
            required: false,
            autocomplete: false,
        },
    ],
    
    async run(bot, message, args) {

        rmd = args.getString("rmd")
        heure = args.getString("heure")
        min = args.getString("minute")
        if(min) {time = min*0}
        if(heure) {time = heure*0}

        if(message.user.id !== "605392754020974612" && message.user.id !== "396285511158857732") return message.reply("Commande uniquement pour madame kidrauhl")
        
        if(rmd === "vote") {
            return message.reply(`Je ne crois pas avoir demander le service du réveil ${bot.username}. Tiens ta langue et lâche tes muscles grande guimauve ! Du nerf c'est mou ! Et sa se prends pour une voteuse ?!`)
        }

        if(rmd === "bump") {
            return message.reply(`hey! Good morning monstropolis ! Il est exactement 6h et 5 min dans la capitale des monstres, la température frise les 35 degrés, bonne nouvelle pour vous les rampants, on aurait tort de ne pas profiter de cette laaangueur pour faire une grasse mat' , pioncer, ou seulement SECOUER CETTE FEIGNASSE QUI VA DEFONCER SON __***BUMP***__ DEBOUT ${message.user}`)
        }

        if(!rmd) {
            message.reply("D'abord c'est Monsierur crétin ! si t'es pas polie soit au moins jolie ! je te mentionne à la fin du temps ^^")

            return message.channel.send(`Du calme il n'est pas toxique ! d'habitude faut pas me croire mais là il faut ${message.user} ! votre rappel est arrivé !`)
        }
    }   
}