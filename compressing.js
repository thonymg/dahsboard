const compressing = require('compressing');

compressing.zip.
  compressDir('./dist/mnety-dashboard/', './prod/mnety-dashboard.zip')
  .then(() => console.log('file correctly zipped'))
  .catch(err => console.error(err));
