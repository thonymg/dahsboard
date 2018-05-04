const compressing = require('compressing');


compressing.zip.
  uncompress('./prod/mnety-dashboard.zip', './prod/')
  .then(() => console.log('file correctly zipped'))
  .catch(err => console.error(err));

