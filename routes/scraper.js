const cheerio = require('cheerio');
var request = require('request');

const req = (link, res) => {

  // console.log(res, '<---------- res in function scraper')
  console.log(link, '<-------- link from scraper')

  request(link, function (error, response, html) {
    // console.log('request in scraper being hit')
    if (!error && response.statusCode == 200) {
      // console.log(html);
      const $ = cheerio.load(html)
      const arrayOfLinks = []
      const img = $('img').each(function(i, element){
        // console.log(typeof element)
        // console.log(element)
        if ( $(element).attr('src') !== undefined || null){
          if ($(element).attr('src').includes('.jpg'))
            arrayOfLinks.push($(element).attr('src'))
        }
        
      });

      res.json(arrayOfLinks)
      console.log(arrayOfLinks, '<------- this is array of links')
    }
  })

}

module.exports = req;