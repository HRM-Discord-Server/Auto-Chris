/**
* @Author Chris Wang, refactored by Lian Duan
* @params string message
* @returns a generated garfielf meme
*/
module.exports = {
    keywords: ["garf"],
    response: function(message){
        var garfComments = ["Get up, Garcfred. I won't harm a man who is defenceless",
        "It cannot be! Newspper sword",
        "Not everyoen is evil, Naermo. Some are just misguide",
        "You think you can beat me, Marmalade? I'll cut you to rubble!",
        "Lasagna breath",
        "Well, Miracleduck, it seems you lost",
        "The Sunday funnies belong to no man",
        "I cannot allow you to clam another life, Gafrindle",
        "Then give me all you'vee got John Aldrin, cause I won't stop",
        "It's over, Garrfellini, I won't waste Antober Seventh",
        "Time to inhale lagnar",
        "Please help this isn't a joke I'm being held to make these stupid requests please they have my wife and kids call the pol-",
        "Marbledune, Dilbart, Chalrie Bowrn... Rest in peece",
        "Don't start with your fairly tales about stars, mallomar",
        "You cant kill me, Jom. What would our mother think?"
                            
    ];
        var garfLinks = ["https://www.youtube.com/watch?v=OGbhJjXl9Rk",
        "https://www.youtube.com/watch?v=2vWFEylvELI",
        "https://www.youtube.com/watch?v=_4e3wV2b3P0",
        "https://www.youtube.com/watch?v=dQPvhRlcmzs",
        "https://www.youtube.com/watch?v=yfN-Zhyw-Bg",
        "https://www.youtube.com/watch?v=cf3QUyEUI-s",
        "https://www.youtube.com/watch?v=gRVLGbqsKAw",
        "https://www.youtube.com/watch?v=s9rwn0oGIj8",
        "https://www.youtube.com/watch?v=ss6hwhyFwdM",
        "https://www.youtube.com/watch?v=qJTF0ogoHpQ",
        "https://www.youtube.com/watch?v=vO8Sj7xv9FE",
        "https://www.youtube.com/watch?v=jzuscWiRYww", 
        "https://www.youtube.com/watch?v=wzOPIiGNvVo",
        "https://www.youtube.com/watch?v=D_MubBVkTkU",
        "https://www.youtube.com/watch?v=YoUFyQYpv8M"
                         
    ];
    var randomIndex1 = (Math.floor(Math.random() * garfLinks.length));
    var randomIndex2 = (Math.floor(Math.random() * garfComments.length));

    var response = "**"+garfComments[randomIndex1]+"**" + "\n" + garfLinks[randomIndex2];

    message.channel.send(response);
    }
}
