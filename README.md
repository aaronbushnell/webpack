# Webpack code-splitting and async module loading

This repo is a brief demo of how to do code-splitting and asynchronous module loading using Webpack.

## Code-splitting

There are many cases where you don't want _all_ JavaScript bundled into a single `app.js` file that gets downloaded on a visit to the homepage.

Let's say your application has a feature-rich blog or store locator. These pages might be lower-profile and get less than half the visitors the homepage gets. So downloading the JavaScript in these apps on the homepage is extremely costly. This is where Webpack's code-splitting technique comes into play.

```js
entry: {
  // Shared, global-level functionality across all pages
  global: "./js/global",

  // The JS needed for the homepage
  home: "./js/home",

  // The JS needed for the About page
  about: "./js/about",

  // Commonly used libraries across the entire site (jQuery, Lodash, etc)
  common: ['jquery']
}
```

This block of code in `webpack.config.babel.js` will create 4 different JavaScript files:
```
/public/global.js
/public/home.js
/public/about.js
/public/common.js
```

Now you can use these files in various areas of the site so unnecessary JavaScript isn't downloaded when visiting the homepage.

## Loading modules on-demand for better performance

Let's say the homepage allows users to see a map of store locations when they click a "See Locations" button. It could be costly to run the JavaScript for this map when the page loads. What if the user never presses the "See Locations" button? It would run for them anyways. Webpack can help you asynchronously load modules through the `require.ensure` function.

**/js/home/index.js**
```js
// When a user clicks the "See Locations" button, load the /js/map/index.js module
$('[data-load-map]').on('click', function () {
  // Fetch the dependency
  require.ensure(["../map/index.js"], function (require) {
    // And then require it
    require("../map/index.js");
  });
});
```

**/js/map/index.js**
```js
// Import React dependencies
// Remember, these don't load until you've clicked the "See Locations" button.
// Yay, performance!
import React from 'react';
import ReactDOM from 'react-dom';

// Create a Map class
let Map = React.createClass({
  render: function() {
    // I'm too lazy to get a real map loaded. Just pretend, okay?
    return (
      <h2 className="map">
        Hi! I came from an async React module.
      </h2>
    );
  }
});

// Inject the Map into the #map element
ReactDOM.render(
  <Map />,
  document.getElementById('map')
);
```

### Why stop there? Inject styles, too!
If this module only exists if JavaScript is enabled, why not make the accompanying CSS a JavaScript require, too? No need to bloat the CSS with stuff we're not using. Just add the style loader to the Webpack config file:

```js
module: {
  loaders: [
    {
      test: /\.css/,
      loaders: ['style', 'css']
    }
  ]
}
```

**/js/map/styles.css**
```css
.map {
  color: #ff0;
  padding: 1rem;
}
```

And then require the CSS in the Map module!

```js
// Import styles
import styles from './styles.css';

// React imports and remaining code...
```

Now your CSS will be loaded asynchronously into the `<head>` when the "See Locations" button is clicked.

## Conclusion

Webpack can be really beneficial so your code is optimized for run-time and asynchronous loading. Using code-splitting, module loading and more can drastically improve your site's performance.
