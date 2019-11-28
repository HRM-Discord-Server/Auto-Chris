module.exports = {
    keywords: ["getstock "],
    response: function(message, suffix){
        var yahooFinance = require('yahoo-finance');
        yahooFinance.quote({
            symbol: suffix,
            modules: [ 'price', 'summaryDetail' ],
          }, function (error, snapshot) {
              if(error){
                    message.channel.send("couldn't get stock: " + error);
              } else {
                    // message.channel.send(JSON.stringify(snapshot));
                    message.channel.send(snapshot.price.longName
                      + "\n**Post Market Price:** $"+snapshot.price.regularMarketPrice);
              }
          });
    }
}