# Anime Planet Character API
This is not an official api, I created it to streamline a discord bot I am working on.

Here is how I run it on my server, Steps might differ but this should work:
1. Download: `git clone https://github.com/Puffycheeses/AnimePlanetApi.git`
2. `cd AnimePlanetApi`
3. Install Dependencies: `npm i -S request request-promise cheerio`
4. Run on server: `pm2 start app.js --name animePlanetServer`

## Usage

You can access the API on port `3300`
 
**GET Request:** `http://yourserver.com:3300/?character=name`  
**POST Request:** key of `character` and a value of a name

A usual response will look something like this: 
```
{
    "name": "Yuuko AIOI",
    "gender": " Female ",
    "image": "http://www.anime-planet.com/images/characters/yuuko-aioi-23712.jpg?t=1513400467",
    "rank": "1,137",
    "anime": "Nichijou",
    "animeUrl": "http://www.anime-planet.com/anime/nichijou",
    "tags": [
        "Teenagers",
        "Rosy Cheeks",
        "High School Students",
        "Clumsy"
    ]
}
````
