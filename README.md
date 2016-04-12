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
