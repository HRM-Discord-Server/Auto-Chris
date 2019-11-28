module.exports = {
    keywords: ["stock"],
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
                    message.channel.send(snapshot.exchangeName
                      + "\n**Previous Open:** $" + snapshot.previousClose + "\n**open:** $" + snapshot.open + "\n**dayLow:** $" + snapshot.dayLow + "\n**open:** $" + snapshot.dayHigh + "\n**dayHigh:** $" + snapshot.open);
              }
          });
    }
}