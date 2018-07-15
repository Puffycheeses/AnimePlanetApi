const rp = require('request-promise');
const cheerio = require('cheerio');
const apParse = require('./apParse');

exports.GetChar = function ( name, response ) {
    const options = {
        uri: `https://www.anime-planet.com/characters/all?name=` + name.replace(/ /g, "%20") + `&sort=likes&order=desc`,
        followAllRedirects: true,
        transform: function (body) {
            return cheerio.load(body);
        }
    };
    rp(options)
        .then(($) => {
            // See if redirected or still on search page by checking for element on search page
            let url = $("h1:contains('Browse characters')").html();
            if (url === 'undefined' || url === null) {
                // Redirected
                apParse.parse($, response)
            } else {
                // Still on search page so go to first result
                let url = "https://www.anime-planet.com" + $( ".name" ).first().attr('href');
                const options = {
                    uri: url,
                    transform: function (body) {
                        return cheerio.load(body);
                    }
                };
                rp(options)
                    .then(($) => {
                        apParse.parse($, response)
                    })
            }
        })
}