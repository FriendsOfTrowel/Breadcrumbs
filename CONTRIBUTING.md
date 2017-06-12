# Contributing

## Tools & Workflow

The workflow to test into a browser the component is setted with gulp (and webpack for the javascript part).

All the files versionned for live testing are written `./test/src` folder.
The gulp workflow will generate, from those files, a `./test/dest` used by a local server (running via gulp) to renderer into your browser the component.

You have several commands for making the `./test/dest` folder :

```sh
# run gulp tasks to build the `./test/dest` folder
npm run test

# run gulp tasks to build the `./test/dest` folder in watch mode, and setup a localserver with livereload
npm start
```

Thoses commands generates css for the `./test` folder and for the `./dest` folder (in normal and minified version).



### Javascript
Javascript is transpiled and packaged with webpack. The workflow setuped here allow us to generate a script file browser-friendly into the `./dest/javascript` folder from a es2015 friendly (ready to be included in packaged workflows) script located at `./src/javascript`.

Here are the two commands for working with the javascript :

```sh
# builds the browser-friendly javascript file
npm run build-javascript

# builds the browser-friendly javascript file in watch mode
npm run build-javascript-dev
```

Thoses commands generates javascript for the `./test` folder and for the `./dest` folder (in normal and minified version).



## Writing a Trowel Component
[Checkout the documentation](https://github.com/Trowel/Trowel/blob/master/doc/3-create-your-own-trowel-component.md) from the trowel-core project, to learn about how writting a Trowel Component

## Good practices
To be written
