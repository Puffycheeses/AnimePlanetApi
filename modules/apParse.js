const rp = require('request-promise');
const cheerio = require('cheerio');

exports.parse = function ( $, response ) {
    console.log("Parsing");
    let tags = [];
    $('.tags ul li').each(function () {
        tags.push($(this).text())
    });
    let json = JSON.stringify({
        name: $("h1[itemprop=name]").text(),
        gender: $("div:contains('Gender:') .pure-1").html().split(":").pop(),
        image: "http://www.anime-planet.com" + $(".screenshots").attr('src'),
        rank: $("a[href$='/characters/top-loved']").text().split("#").pop(),
        anime: $("a[data-class='tooltip-full'] ").first().text(),
        animeUrl: "http://www.anime-planet.com" + $("a[data-class='tooltip-full'] ").first().attr('href'),
        tags: tags
    });
    console.log("Responding");
    response.end(json);
}