const fsextra = require('fs-extra');
const path = require('path');

const logsLocation = path.resolve('./combined.log');

fsextra.removeSync(logsLocation);