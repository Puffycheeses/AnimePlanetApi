# Anime Planet Character API
This is not an official api, I created it to streamline a discord bot I am working on.

Here is how I run it on my server, Steps might differ but this should work:
1. Download: `git clone https://github.com/Puffycheeses/AnimePlanetApi.git`
2. `cd AnimePlanetApi`
3. Install Dependencies: `npm i -S request request-promise cheerio`
4. Open Firewall: `sudo ufw allow 3300`, `sudo ufw enable`
5. Run on server: `pm2 start app.js --name animePlanetServer`

## Usage

You can access the API on port `3300`
 
**GET Request:** `http://yourserver.com:3300/?character=name`  
**POST Request:** key of `character` and a value of a name

A usual response will look something like this: 
```json
{
    "name": "Yuuko AIOI",
    "gender": " Female ",
    "image": "http://www.anime-planet.com/images/characters/yuuko-aioi-23712.jpg?t=1513400467",
    "rank": "1,137",
    "anime": [
        [
            "Nichijou",
            "http://www.anime-planet.com/anime/nichijou"
        ],
        [
            "Nichijou Episode 0",
            "http://www.anime-planet.com/anime/nichijou-episode-0"
        ],
        [
            "Nichijou Specials",
            "http://www.anime-planet.com/anime/nichijou-specials"
        ],
        [
            "Helvetica Standard",
            "http://www.anime-planet.com/manga/helvetica-standard"
        ],
        [
            "Nichijou: My Ordinary Life",
            "http://www.anime-planet.com/manga/nichijou-my-ordinary-life"
        ]
    ],
    "tags": [
        "Teenagers",
        "Rosy Cheeks",
        "High School Students",
        "Clumsy"
    ]
}
````
