const rp = require('request-promise');
const cheerio = require('cheerio');
const apParse = require('./apParse');

exports.GetChar = async function ( name, response ) {
    const options = {
        uri: `https://www.anime-planet.com/characters/all?name=${name.replace(/ /g, "%20")}&sort=likes&order=desc`,
        followAllRedirects: true,
        transform: function (body) {
            return cheerio.load(body);
        }
    };

    rp(options)
        .then(($) => {
            if ($("p:contains('No results found')").length > 0) return apParse.error(name, response); // Make this less toxic
            // See if redirected or still on search pagege
            let url = $("h1:contains('Browse characters')").html();
            if (url === 'undefined' || url === null) { // Check for element that only exits on search page
                // Redirected
                apParse.parse($, response)
            } else {
                // Still on search page
                let url = `https://www.anime-planet.com${$( ".name" ).first().attr('href')}`; // Set url to the first character link we find
                const options = { // Change url
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
};