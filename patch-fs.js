import gracefulFs from 'graceful-fs';

gracefulFs.gracefulify(require('fs'));
