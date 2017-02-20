var purify = require('purify-css');

var content = ['./dist/**/*.js']; //webpack-built content

var minify = true;

purify(content, ['./static/bootstrap/css/bootstrap.css'], {
  minify: minify,
  output: './static/bootstrap/css/bootstrap-booklist-build.css'
});

purify(content, ['./static/fontawesome/css/font-awesome.css'], {
  minify: minify,
  output: './static/fontawesome/css/font-awesome-booklist-build.css'
});


