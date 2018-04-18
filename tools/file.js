const fs = require('fs')
const basePath = './docs/algorithm/'

fs.readdir(basePath, function (err, files) {
  if (err) {
    return console.error(err)
  }
  files.forEach(function (file) {
    fs.readFile(`${basePath}${file}`, 'UTF-8', function (err, data) {
      if (err) {
        return console.error(err)
      }
      const mData = data.replace(
        /# JavaScript Searching and Sorting Algorithm: /gi,
        '# '
      )
      fs.writeFile(`${basePath}${file}`, mData)
      console.log('修改成功!')
    })
  })
})
