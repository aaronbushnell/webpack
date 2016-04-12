import $ from 'jquery';

console.log('Hello from the Home page!');

$('[data-load-map]').on('click', function () {
  require.ensure(["../map/index.js"], function (require) {
    require("../map/index.js");
  });
});

$('[data-load-accordion]').on('click', function () {
  require.ensure(["../accordion/index.js"], function (require) {
    require("../accordion/index.js");
  });
});
