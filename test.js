var b = require('@timelaps/batterie');
b.capture(function () {
    require('./index.test');
});
b.finish().then(b.logger());