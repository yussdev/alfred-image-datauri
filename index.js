const { input } = require('alfy')
const imageDataURI = require('image-data-uri')
const clipboardy = require('clipboardy')

imageDataURI.encodeFromFile(input).then(res => {
  clipboardy.writeSync(res)
})
