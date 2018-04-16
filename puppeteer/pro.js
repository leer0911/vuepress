/**
 * @name get list of links
 *
 * @desc Scrapes Hacker News for links on the home page and returns the top 10
 */
const fs = require('fs')
const puppeteer = require('puppeteer')
const TurndownService = require('turndown')
const turndownService = new TurndownService({
  codeBlockStyle: 'fenced'
})
const cheerio = require('cheerio')
;(async () => {
  const browser = await puppeteer.launch()
  const baseURL =
    'https://www.w3resource.com/javascript-exercises/javascript-array-exercise-'

  for (var i = 0; i < 2; i++) {
    const page = await browser.newPage()
    const link = `${baseURL}${i}.php`
    await page.goto(link)
    const content = await page.content()
    const $ = cheerio.load(content, { decodeEntities: false })

    $('.mdl-card article').each((index, el) => {
      for (let index = 0; index < 4; index++) {
        $(el)
          .children()
          .first()
          .remove()
      }
      for (let index = 0; index < 5; index++) {
        $(el)
          .children()
          .last()
          .remove()
      }
      $(el)
        .find('.language-html')
        .prev()
        .remove()
      $(el)
        .find('.language-html')
        .remove()
      $(el)
        .find('h2')
        .next()
        .next()
        .prepend('<p>::: tip</p>')
        .append('<p>:::</p>')
      const h2 = $(el)
        .find('h2')
        .text()
      $(el)
        .find('h2')
        .before(`<h1>${h2.replace('JavaScript Array:', '').trim()}</h1>`)
      $(el)
        .find('h2')
        .remove()
      $(el)
        .find('.output')
        .prepend('<p>::: tip</p>')
        .append('<p>:::</p>')
      const cont = $(el).html()
      console.log(cont)

      const markdown = turndownService
        .addRule('strikethrough', {
          filter: ['del', 's', 'strike'],
          replacement: function (content) {
            return '~' + content + '~'
          }
        })
        .turndown(cont)
      fs.writeFile(`./md/array${i}.md`, markdown, err => {
        if (err) throw err
        console.log('The file has been saved!')
      })

      page.close()
    })
  }

  await browser.close()
})()
