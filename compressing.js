const compressing = require('compressing');
const fs = require('fs');


const folder = './dist/mnety-dashboard/';



const zipStream = new compressing.zip.Stream();

fs.readdir(folder, (err, files) => {
  files.forEach(file => {
    console.log(file);
    zipStream.addEntry(`${folder}${file}`);
  });
})

const handleError = () => console.log('une erreur est survenue')

zipStream
  .on('error', handleError)
  .pipe(fs.createWriteStream('./prod/mnety-dashboard.zip'))
  .on('error', handleError);

// compressing.zip.
//   compressFile('./dist/mnety-dashboard/index.html', './prod/mnety-dashboard.zip')
//   .then(() => console.log('file correctly zipped'))
//   .catch(err => console.error(err));

