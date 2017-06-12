![Friends of Trowel](https://raw.githubusercontent.com/Trowel/Trowel/master/media/dist/banners/friendsoftrowel-black-on-transparent.png)

# Trowel Breadcrumbs
[![npm version](https://badge.fury.io/js/trowel-Breadcrumbs.svg)](https://badge.fury.io/js/trowel)
[![Bower version](https://badge.fury.io/bo/trowel-Breadcrumbs.svg)](https://badge.fury.io/bo/trowel-Breadcrumbs)

The official Trowel Component for breadcrumbs
Breadcrumbs is a *Trowel Component*, please refer to the [Trowel doc](https://github.com/Trowel/Trowel/blob/master/doc/1-the-concept.md) for more informations about how works *Trowel Components*

## Getting Started
### Download
You can easily install *Trowel Breadcrumbs* by using npm, Yarn or Bower

```bash
# With bower
$ bower install trowel-breadcrumbs

# With npm
$ npm install trowel-breadcrumbs

# With yarn
$ yarn add trowel-breadcrumbs
```

You can also download a zip archive [right here](https://github.com/FriendsOfTrowel/Breadcrumbs/archive/master.zip).

### Installation
#### *Scss*
The main scss file to include to your main `.scss` file is located at the `./src/scss/breadcrumbs.scss`. As a *Trowel Component*, it also requires two dependencies to compile the *scss* code. Here an *scss* installation snippet.

```
// Trowel Dependencies
@import './path/to/dependencies/trowel-core/src/trowel';

// Trowel Components Breadcrumbs
@import './path/to/dependencies/trowel-breadcrumbs/src/scss/breadcrumbs.scss';
```

#### *CSS*
If you don't want to customize the trowel component in `scss` you can use the css file available at `./dest/css/breadcrumbs.css`. A minified version is available at the same location.

#### *JavaScript*
You have several javascript files for different use cases :
* The browser ready file is available at `./dest/javascript/breadcrumbs.js` (a minified version exists at `dest/javascript/breadcrumbs.min.js`)
* The script written in es2015 and ready to `import` is available at `./src/javascript/breadcrumbs.js`


#### *Twig template*
The twig template is located at the `./src/twig/breadcrumb.html.twig`.

## Usage
to be written

## Contributing
If you want to contribute you can checkout the contribution guide [over here](CONTRIBUTING.md)

## License
MIT © [Trowel](trowel.github.io)
