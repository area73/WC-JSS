# JSS
Based on InuitCSS this framework substitute SASS with plain JavaScript using modules.
It is design to use in conjunction with Web Components 

## TODO: Input in Pixels output in any 
To make it easier for developers, every measure will be in pixels and the output will be parametrize,
upon config rules (px, rem, em, %) 
****

## DEPRECATED: Demo
To launch the demo, from project root:

```bash
cd ./demo 
npm start
```
This demo uses webpack to pack es6 modules.

## TDD
We use TDD in our development. To run test:
 ````bash
  npm run test
````
This will run Jest with a watcher
 

## Demo: Storybook
We use story book to make our demos.
To start Storybook run:
 ````bash
cd storybook
# To run server on port 6006
npm run storybook
# To build the storybook 
npm run build-storybook
````


