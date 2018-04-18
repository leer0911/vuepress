/**
 * @name get list of links
 *
 * @desc Scrapes Hacker News for links on the home page and returns the top 10
 */
const fs = require('fs')
const request = require('request')
const async = require('async')
const TurndownService = require('turndown')
const turndownService = new TurndownService({
  codeBlockStyle: 'fenced',
  headingStyle: 'atx'
})
const cheerio = require('cheerio')
const modules = 'function'
const start = 1
const end = 100
const maxRequest = end
const baseURL = `https://www.w3resource.com/javascript-exercises/javascript-${modules}-exercise-`
const basePath = './docs/'

const dir = `${basePath}/${modules}`

if (!fs.exists(dir)) {
  fs.mkdir(dir)
}

;(async () => {
  const urls = []
  for (var i = start; i <= end; i++) {
    const link = `${baseURL}${i}.php`
    urls.push(link)
  }

  async.mapLimit(
    urls,
    maxRequest,
    function (url, callback) {
      request(url, function (error, response, body) {
        if (!error && response.statusCode === 200) {
          console.log('url:', url, '请求成功')
          const strArr = url.split('-')
          const num = strArr[strArr.length - 1].replace('.php', '')
          const $ = cheerio.load(body, { decodeEntities: true })
          const $article = $('.mdl-card article')
          const showImage = () => {
            $article.find('img').each((index, item) => {
              const src = item.attribs['data-cfsrc']
              $(item).replaceWith(`<img src="${src}">`)
            })
          }
          const removeCont = () => {
            $article.find('time').remove()
            $article.find('noscript').remove()
            $article.find('script').remove()
            $article.find('.mdl-grid').remove()
            $article.find('.note_blue').remove()
            $article.find('h2').remove()
            $article.find('a').remove()
            $article
              .children('img')
              .first()
              .remove()
          }
          const addCodepend = () => {
            const expandWrap = $('<section class="expand-codepen"></section>')
            $article.find('.codepen').wrap(expandWrap)
            $('<codepen></codepen>').insertAfter('.codepen')
          }
          const addTip = () => {
            $article
              .find('h2')
              .next()
              .next()
              .wrap('<pre><code></code></pre>')
            $article.find('.output').wrap('<pre><code></code></pre>')
          }
          const title = $article
            .find('h1')
            .text()
            .replace('JavaScript: ', '')
          $article.find('h1').text(title)
          showImage()
          addTip()
          addCodepend()
          removeCont()

          const cont = $article.html()
          turndownService.keep(['del', 'section'])
          const markdown = turndownService.turndown(cont)

          let fileName = ''

          if (Number(num) === 1) {
            fileName = `${basePath}/${modules}/README.md`
          } else {
            fileName = `${basePath}/${modules}/${modules}${num}.md`
          }

          fs.writeFile(fileName, markdown, err => {
            if (err) throw err
          })
        }
      })
    },
    function (err, result) {
      if (err) {
        console.error(err)
      }
      console.log('final:', result)
    }
  )
})()
