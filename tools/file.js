const fs = require('fs')
const basePath = './docs/jsbit/js/'

fs.readdir(basePath, function (err, files) {
  if (err) {
    return console.error(err)
  }
  files.forEach(function (file) {
    fs.readFile(`${basePath}${file}`, 'UTF-8', function (err, data) {
      if (err) {
        return console.error(err)
      }
      const mData =
        `# ${file.replace('.js', '')}\n\n` + '```js\n' + data + '\n```'
      fs.writeFile(`./docs/jsbit/${file.replace('.js', '.md')}`, mData)
      console.log('修改成功!')
    })
  })
})
