# WC-  JSS
Based on InuitCSS this framework substitute SASS with plain JavaScript using modules and string 
literals.
It is design to use in conjunction with Web Components 

## Installation & usage
Install npm package in your project
`npm i wc-jss`

Once installed on your project you can star using styles inside your Web Components like above :
````javascript
// app.js (web component)

import reset from 'wc-jss/generic/reset';
import {LitElement, html} from '@polymer/lit-element';

class WcApp extends LitElement {
  render() {
      return html`
        <style>
          ${reset}
        </style>
        <div class="app-bar">Example App</div>
     }
}
````
**Note:** Be aware that you will need a bundler in order to import NPM packages

## Custom configuration object
You can customize initial settings params (or plugin settings params) by parsing an object the 
first time you call the singleton config object `JSSConfig.`

In order to add custom config , create a file , import JSSConfig, and instanciate JSSConfig 
with the new config object like:
````javascript
// wcJssSettings.js
import JSSConfig from 'wc-jss/settings/JSSConfig';

const WCJSS = {
  fontSizeHeading: {
    h1: 180,
    h2: 80,
    h3: 40,
    h4: 20,
    h5: 10,
    h6: 8,
  },
};

JSSConfig.getInstance(WCJSS);
````

The new JSSConfig object will keep original parameters and will add or override parameters with the 
new one passed in 

Because JSSConfig object is a singleton you need to assure that the first time you get the instance
you are parsing the new config object. In order to do this your custom file will be the first file 
imported on your project, this way any 
further use of the library will contain the custom JSSConfig.

Now in your main index.js the first import will be this file:
```javascript
import './wcJssSettings';
import './components/app';
// ...
```


## TODO: Input in Pixels output in any 
To make it easier for developers, every measure will be in pixels and the output (TODO) will be 
parametrize, upon config rules (px, rem, em, %) 
****

## TDD
We use TDD in our development. To run test:
 ````bash
  npm run test
````
This will run Jest with a watcher
 
## Demo: Storybook
We use story book to make our demos.

We are keeping two packages.json , one for main app and another one only for storybook
this way we are  not polluting our main library with unwanted packages only needed for storybook

So the first time you start story book you will nedd to to an extra installation:
 ```bash
cd storybook
npm i
```
And then each time you want to run the server from storybook directory just do:

```bash
# To run server on port 6006
npm run storybook
# To build the storybook 
npm run build-storybook
```




