exports.parse = async function ( $, response ) {
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
        error: false,
        name: $("h1[itemprop=name]").text(),
        gender: $("div:contains('Gender:') .pure-1").html().split(":").pop(),
        image: "http://www.anime-planet.com" + $(".screenshots").attr('src'),
        rank: $("a[href$='/characters/top-loved']").text().split("#").pop(),
        anime: anime,
        tags: tags
    });
    response.end(json);
};

exports.error = async function ( name, response ) {
    let json = JSON.stringify({ // Grab elements from character page and set to json
        error: true,
        name: name,
        gender: "?",
        image: "http://www.bsmc.net.au/wp-content/uploads/No-image-available.jpg",
        rank: "?",
        anime: [["?", "https://www.anime-planet.com/anime/nichijou"]], // lmao
        tags: "?"
    });
    console.log("Error could not find");
    response.end(json);
};