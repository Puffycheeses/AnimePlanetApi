exports.parse = function ( $, response ) {
    console.log("Parsing");
    let tags = [];
    let anime = [];
    $('a[data-class="tooltip-full"]').each(function () {
        let container = [];
        container.push($(this).text());
        container.push(`http://www.anime-planet.com${$(this).attr('href')}`);
        anime.push(container)
    });
    $('.tags ul li').each(function () { // Grab Tags first and make a nice array
        tags.push($(this).text())

    });

    let json = JSON.stringify({ // Grab elements from character page and set to json
        name: $("h1[itemprop=name]").text(),
        gender: $("div:contains('Gender:') .pure-1").html().split(":").pop(),
        image: "http://www.anime-planet.com" + $(".screenshots").attr('src'),
        rank: $("a[href$='/characters/top-loved']").text().split("#").pop(),
        anime: anime,
        tags: tags
    });
    console.log("Responding");
    response.end(json);
};