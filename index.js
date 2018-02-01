const transformer = require('api-spec-transformer')
const fs = require('fs')

const postmanToSwagger = new transformer.Converter(transformer.Formats.AUTO, transformer.Formats.SWAGGER)

postmanToSwagger.loadFile('./postman.json', function (err) {
  if (err) {
    console.log(err.stack)
    return
  }

  postmanToSwagger.convert('json')
    .then(function (convertedData) {
      fs.writeFileSync(__dirname + '/swagger.json', JSON.stringify(convertedData), 'utf-8')
    }).catch(function (err) {
      console.log(err)
    })
})