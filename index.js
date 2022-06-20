const screenshot = require('screenshot-desktop');
fs = require('fs');

screenshot({format: 'png'}).then((img) => {
  console.log('Image -->', img);

  fs.writeFile('s2.png', img, function (err) {
    if (err) return console.log(err);
    console.log('Hello World > helloworld.txt');
  });
  
}).catch((err) => {
  console.error('Error -->',err);
})