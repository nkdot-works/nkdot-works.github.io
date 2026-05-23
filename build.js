const fs = require('fs');
const ejs = require('ejs');

ejs.renderFile('./src/ejs/index.ejs', {}, (err, str) => {

  if (err) throw err;

  fs.writeFileSync('./index.html', str);

  console.log('EJS build complete');
});