const fs = require('fs')
const base = process.env.GH ? '/vuepress/' : '/'
const basePath = './docs/'
const arrGenerate = (num, label) => {
  const arr = []
  for (let index = 2; index <= num; index++) {
    arr.push(`${label}${index}`)
  }
  return arr
}

const nav = []
const sidebar = {}

fs.readdir(basePath, function (err, files) {
  if (err) {
    return console.error(err)
  }

  files.forEach(function (file) {
    if (file === '.vuepress' || file === 'README.md') {
      return
    }

    nav.push({
      text: file.charAt(0).toUpperCase() + file.slice(1),
      link: `/${file}/`
    })
    fs.readdir(`${basePath}${file}`, function (err, files) {
      if (err) {
        return console.error(err)
      }
      sidebar[`/${file}/`] = [
        {
          title: file,
          collapsable: false,
          children: arrGenerate(files.length, file)
        }
      ]
    })
  })
})

module.exports = {
  title: 'FE',
  description: 'FrontEnd Exercise Collection By VuePress',
  dest: 'vuepress',
  base,
  head: [['link', { rel: 'icon', href: `/logo.png` }]],
  serviceWorker: true,
  themeConfig: {
    repo: 'vuejs/vuepress',
    editLinks: true,
    docsDir: 'docs',
    nav,
    sidebar
  }
}
