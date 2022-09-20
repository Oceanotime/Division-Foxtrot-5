const { Client, GatewayIntentBits, EmbedBuilder, Collection, Embed} = require ("discord.js");

const client = new Client ({
    intents : [
        GatewayIntentBits.Guilds,
        GatewayIntentBits.GuildMessages,
        GatewayIntentBits.MessageContent
    ]
});

client.on("ready", () => {
    console.log("Status : Online")
});







client.on("messageCreate", message => {
    if(message.author.bot) return



    console.log(`[CONSOLE] (GENERAL) : ${message.author.username} a écrit "${message}" dans le salon ${message.channel.name}.`)

    const sessionRole = message.member.roles.cache.find(r => r.id === "938124389046698075");
    const insRole = message.member.roles.cache.find(r => r.id === "938124467174010950");
    


    if(message.content === "!!help"){
        if(message.channelId === '1018298859794997349'){
        

            console.log(`[CONSOLE] (HELP) : Le message "helpEmbed" a été envoyé.`)
    
            message.delete(1)
    
            const helpEmbed = new EmbedBuilder()
                .setColor("#ffd200")
                .setTitle(`Voilà de l'aide, ${message.author.username}.`)
                .setDescription(`Vous trouverez ci-dessous toutes les informations nécessaires. Si jamais vous n'avez pas de réponse, merci de vous adresser à l'un de nos opérateurs.`)
                .setFields(
                    {
                        name: `・__Règlement :__`,
                        value: `・**Canal :** ${"<#937635380725968916>"} \n *Dans ce salon figure le règlement de la division. Nous comptons sur vous pour le respecter sous peine de sanctions. Y figurent aussi quelques règles primordiales du RP.*`
    
                    },
                    {
                        name: `・__Informations sur la Division :__`,
                        value: `・**Canaux :** ${"<#1017881994731982950>"} \n *Ce salon vous permettra de voir quelques informations supplémentaires sur la Division, telle que la hiérarchie ou encore.*`
                    },
                    {
                        name: `・__Annonces :__`,
                        value: `・**Canaux :** ${"<#939925933102608434>"} & ${"<#938114274595856475>"} \n *Dans ces salons figureront toutes les annonces générales, ainsi que les annonces de session.*`
                    },
                    {
                        name: `・__Le Messe :__`,
                        value: `・**Canaux :** ${"<#937425444096073791>"}, ${"<#1018298733273817159>"} & ${"<#973646423721652355>"} \n *Ces salons constituent les principaux canaux de discussion généraux de la division. Pour toute idée, n'hésitez pas à nous la proposer dans le salon adéquat !*`
                    },
                    {
                        name: `・__Recrutements :__`,
                        value: `・**Canal :** ${"<#1018293364417900544>"} \n *Ce salon permet aux civils de faire leur candidature pour nous rejoindre !*`
                    },
                )
    
                .setTimestamp()
                .setFooter(
                    {
                        text: `D.G.A. | Division Phoenix II`,
                        iconURL: "https://i.imgur.com/Zdlboz5.png"
                    }
                )
    
                message.channel.send({ embeds : [helpEmbed]});
    
        }
    }











    if(sessionRole){
        if(message.channelId === '938114274595856475'){
            
            if(message.content === "!!session"){
                    

                console.log(`[CONSOLE] (SESSION) : Le message "sessionEmbed" a été envoyé. `)

                message.delete(1)

                message.channel.send(`・__Mention :__ ${"<@&1019578055078989834>"}`)

                const sessionEmbed = new EmbedBuilder()
                .setColor("#ffd200")
                .setTitle(`Une nouvelle session a été lancée !`)
                .setDescription(`Nous attendons tous les opérateurs pour la session !`)
                .setFields(
                    {
                        name: "・__Host :__",
                        value: `${ message.author }`
                    },
                    {
                        name : "・__Rendez-Vous :__",
                        value : `${"<#973646423721652355>"}`
                    }
                )
                .setFooter(
                    {
                        text: `D.G.A. | Division Phoenix II`,
                        iconURL: "https://i.imgur.com/Zdlboz5.png"
                    }
                )
                .setTimestamp()
                .setThumbnail("https://cdn3.emoji.gg/emojis/9098-blurple-announcements.png")
        
        
                message.channel.send({ embeds: [sessionEmbed]});

            } 

        } else {
            if(message.content === "!!session"){
                message.delete(1)
                message.reply("Navré, mais vous n'avez pas les autorisations requises pour lancer de sessions.")
            }
        }
    }

    







// Forma Spécialités

// Forma - TE :

const FormaTE = new EmbedBuilder ()
.setColor("#ffd200")
.setTitle("Une formation spécialisée a été lancée !")
.setDescription(`Une formation spécialisée pour les ${"<@&939215530328490024>"} a été lancée ! Si vous souhaitez vous spécialiser en Tireur d'Elite, n'hésitez pas à nous rejoindre à la base !`)
.setFields(
    {
        name: "・__Host :__",
        value: `${ message.author }`
    },
    {
        name : "・__Rendez-Vous :__",
        value : `${"<#1018300275460673617>"}`
    }
)
.setFooter(
    {
        text: `D.G.A. | Division Phoenix II`,
        iconURL: "https://i.imgur.com/Zdlboz5.png"
    }
)
.setTimestamp()
.setThumbnail("https://cdn3.emoji.gg/emojis/2823-adminshield.png")


// Forma - PL :

const FormaPL = new EmbedBuilder ()
.setColor("#ffd200")
.setTitle("Une formation spécialisée a été lancée !")
.setDescription(`Une formation spécialisée pour les ${"<@&938124127557005332> "} a été lancée ! Si vous souhaitez vous spécialiser dans le pilotage, n'hésitez pas à nous rejoindre à la base !`)
.setFields(
    {
        name: "・__Host :__",
        value: `${ message.author }`
    },
    {
        name : "・__Rendez-Vous :__",
        value : `${"<#1018300275460673617>"}`
    }
)
.setFooter(
    {
        text: `D.G.A. | Division Phoenix II`,
        iconURL: "https://i.imgur.com/Zdlboz5.png"
    }
)
.setTimestamp()
.setThumbnail("https://cdn3.emoji.gg/emojis/2823-adminshield.png")


// Forma - MED

const FormaMD = new EmbedBuilder ()
.setColor("#ffd200")
.setTitle("Une formation spécialisée a été lancée !")
.setDescription(`Une formation spécialisée pour les ${"<@&948635252564316201> "} a été lancée ! Si vous souhaitez vous spécialiser dans le médical, n'hésitez pas à nous rejoindre à la base !`)
.setFields(
    {
        name: "・__Host :__",
        value: `${ message.author }`
    },
    {
        name : "・__Rendez-Vous :__",
        value : `${"<#1018300275460673617>"}`
    }
)
.setFooter(
    {
        text: `D.G.A. | Division Phoenix II`,
        iconURL: "https://i.imgur.com/Zdlboz5.png"
    }
)
.setTimestamp()
.setThumbnail("https://cdn3.emoji.gg/emojis/2823-adminshield.png")



// Forma - AM

const FormaAM = new EmbedBuilder ()
.setColor("#ffd200")
.setTitle("Une formation spécialisée a été lancée !")
.setDescription(`Une formation spécialisée pour les ${"<@&953671018738757693>"} a été lancée ! Si vous souhaitez vous spécialiser dans le maniement des armes montées, n'hésitez pas à nous rejoindre à la base !`)
.setFields(
    {
        name: "・__Host :__",
        value: `${ message.author }`
    },
    {
        name : "・__Mention :__",
        value : `${"<@&937426199901274162>"}`
    }
)
.setFooter(
    {
        text: `D.G.A. | Division Phoenix II`,
        iconURL: "https://i.imgur.com/Zdlboz5.png"
    }
)
.setTimestamp()
.setThumbnail("https://cdn3.emoji.gg/emojis/2823-adminshield.png")








// Commande !!formaspé (Formations Spécialisées)


    if(message.channelId === '938114441772425266'){

        if(message.content === "!!formaspé"){

            message.delete(1)
            message.channel.send(`・__Mention :__ ${"<@&937426199901274162>"}`)

            if(message.author.id === ""){
                
                message.channel.send({ embeds : [FormaTE]})

                console.log(`[CONSOLE] (FORMA) : ${message.author.username} a lancé une formation spécialisée. L'embed "FormaTE" a été envoyé.`)
                
                

            }   
    
            if(message.author.id === "371356468148043779"){

                message.channel.send({ embeds : [FormaPL]})

                console.log(`[CONSOLE] (FORMA) : ${message.author.username} a lancé une formation spécialisée. L'embed "FormaPL" a été envoyé.`)

            }

            if(message.author.id === "840307599547432960"){

                message.channel.send({ embeds : [FormaMD]})

                console.log(`[CONSOLE] (FORMA) : ${message.author.username} a lancé une formation spécialisée. L'embed "FormaMD" a été envoyé.`)
                
            }

            if(message.author.id === "371356468148043778"){

                message.channel.send({ embeds : [FormaAM]})

                console.log(`[CONSOLE] (FORMA) : ${message.author.username} a lancé une formation spécialisée. L'embed "FormaAM" a été envoyé.`)
                
            }

        }  else {
            if(message.content === "!!formaspé"){
                message.channel.send(`Navré, mais vous n'avez pas les permissions requises pour lancer une formation spécialisée, ${message.author}.`)
            
                console.log(`[CONSOLE] (FORMA) : ${message.author.username} a tenté de lancer une formation spécialisée ; sans succès.`)
            
            }
        }
    }

    


    if(message.channelId === '938114441772425266'){

        if(insRole){
            if(message.content === "!!forma"){

                message.delete(1)
                message.channel.send(`・__Mention :__ ${"<@&939616311158378546>"}`)
                
    
                const formaInitEmbed = new EmbedBuilder ()
                .setColor("#ffd200")
                .setTitle("Une formation initiale a été lancée !")
                .setDescription(`Rejoignez-nous maintenant à la base pour poursuivre votre apprentissage.`)
                .setFields(
                    {
                        name: "・__Host :__",
                        value: `${ message.author }`
                    },
                    {
                        name : "・__Rendez-Vous :__",
                        value : `${"<#1018300275460673617>"}`
                    }
                )
                .setFooter(
                    {
                        text: `D.G.A. | Division Phoenix II`,
                        iconURL: "https://i.imgur.com/Zdlboz5.png"
                    }
                )
                .setTimestamp()
                .setThumbnail("https://cdn3.emoji.gg/emojis/6031-modshield.png")
    
                
    
                message.delete(1)
                message.channel.send({ embeds : [formaInitEmbed]}); 
            }
    
        } else {
            if(message.content === "!!forma"){
                message.delete(1)
                message.channel.send(`Navré, mais vous n'avez pas les permissions requises pour effectuer une formation initiale, ${message.author}.`)
            }
        }
    }


        if(message.content === "!!votesession"){

            message.delete(1)
            message.channel.send(`・__Mention :__ ${"<@&1019578055078989834>"}`)

            const votesessionEmbed = new EmbedBuilder ()
            .setColor("#ffd200")
                .setTitle("Une vote a été émis !")
                .setDescription(`Ce vote est pour la session qui se déroulera dans 1 heure après ce vote.`)
                .setFields(
                    {
                        name: "・__Host :__",
                        value: `${ message.author }`
                    }
                )
                .setFooter(
                    {
                        text: `D.G.A. | Division Phoenix II`,
                        iconURL: "https://i.imgur.com/Zdlboz5.png"
                    }
                )
                .setTimestamp()
                .setThumbnail("https://cdn3.emoji.gg/emojis/8263-blurple-members.png")


                message.channel.send({ embeds : [votesessionEmbed]});

        }

    







});


client.login(process.env.token);