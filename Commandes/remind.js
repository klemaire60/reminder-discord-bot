const Discord = require("discord.js")

module.exports = {

    name: "remind",
    description: "Rappel pour le vote ou le bump de D-invites",
    permission: "Aucune",
    dm: true,
    category: "informations",
    options: [
        {
            type: "string",
            name: "rmd",
            description: "Vote ou Bump",
            required: false,
            autocomplete: true,
        }, {
            type: "string",
            name: "heure",
            description: "heure(s) avant le rappel",
            required: false,
            autocomplete: false,
        },{
            type: "string",
            name: "minute",
            description: "minutes(s) avant le rappel",
            required: false,
            autocomplete: false,
        },
    ],
    
    async run(bot, message, args) {

        rmd = args.getString("rmd")
        min = args.getString("minute")
        heure = args.getString("heure")

        function sleep(ms) {
            return new Promise(resolve => setTimeout(resolve, ms))
        }

        if(!rmd && !min && !heure) return message.reply("Spécifiez vote, bump ou un temps !")
        if(isNaN(min)) { return message.reply("Mettez uniquement des chiffres pour les minutes")}
        if(isNaN(heure)) { return message.reply("Mettez uniquement des chiffres pour les heures")}

        if(min) {time = min*60000}
        if(heure) {time = heure*3600000}

        if(time && message.user.id !== "605392754020974612") {
            message.reply("Je vous mentionnerai dans ce salon une fois le temps écoulé")

            await sleep(time)
            return message.channel.send(`${message.user} votre rappel est arrivé !`)
        }

        if(time && message.user.id === "605392754020974612") {
            message.reply("D'abord c'est Monsierur crétin ! si t'es pas polie soit au moins jolie ! je te mentionne à la fin du temps ^^")

            await sleep(time)
            return message.channel.send(`Du calme il n'est pas toxique ! d'habitude faut pas me croire mais là il faut ${message.user} ! votre rappel est arrivé !`)
        }

        if(rmd === "vote" && message.user.id !== "605392754020974612") {
            message.reply("Je vous rappellerai de voter dans 6h")

            await sleep(21600000)
            return message.channel.send(`${message.user} votre vote est disponible`)
        }

        if(rmd === "bump" && message.user.id !== "605392754020974612") {
            message.reply("Je vous rappelerai de bumper dans 4h")

            await sleep(14400000)
            return message.channel.send(`${message.user} votre bump est disponible`)
        }

        if(rmd === "vote" && message.user.id === "605392754020974612") {
            message.reply("Je vous rappellerai de voter dans 6h")

            await sleep(21600000)
            return message.channel.send(`Je ne crois pas avoir demander le service du réveil ${bot.username}. Tiens ta langue et lâche tes muscles grande guimauve ! Du nerf c'est mou ! Et sa se prends pour une voteuse ?!`)
        }

        if(rmd === "bump" && message.user.id === "605392754020974612") {
            message.reply("Je vous rappellerai de voter dans 4h")

            await sleep(14400000)
            return message.channel.send(`hey! Good morning monstropolis ! Il est exactement 6h et 5 min dans la capitale des monstres, la température frise les 35 degré, bonne nouvelle pour vous les rampant, on aurait tort de ne pas profiter de cette laaangueur pour faire une grasse mat' , pioncer, ou seulement secouer cette feignasse qui va défoncer son __***BUMP***__ debout ${message.user}`)
        }
    }   
}