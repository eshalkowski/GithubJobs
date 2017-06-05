## Notes

-- Searching will be on dropdown change, no button click. 
-- Did not get a chance to add on-click functioanlity to the rows to display details
-- styling is not 100% but I think is good start to match mockup 
-- Boilerplate was too heavy for this task, woul dreccomend lighterweight one and adding packages as needed

### Getting Started

**Step 1**. Make sure that you have [Node.js](https://nodejs.org/) v6 or newer installed on your
machine.

**Step 2**. Clone this repository or use [Yeoman
generator](https://github.com/kriasoft/react-static-boilerplate/tree/generator-react-static) to
bootstrap your project:

```shell
$ git clone -o react-static-boilerplate -b master --single-branch \
      https://github.com/kriasoft/react-static-boilerplate.git MyApp
$ cd MyApp
$ npm install                   # Install project dependencies listed in package.json
```

<p align="center">——— or ———</p>

```shell
$ npm install -g yo
$ npm install -g generator-react-static
$ mkdir MyApp
$ cd MyApp
$ yo react-static
```

**Step 3**. Compile and launch your app by running:

```shell
$ node run                      # Same as `npm start` or `node run start`
```

You can also test your app in release (production) mode by running `node run start --release` or
with HMR and React Hot Loader disabled by running `node run start --no-hmr`. The app should become
available at [http://localhost:3000/](http://localhost:3000/).


### How to Test

The unit tests are powered by [chai](http://chaijs.com/) and [mocha](http://mochajs.org/).

```shell
$ npm run lint                  # Check JavaScript and CSS code for potential issues
$ npm run test                  # Run unit tests. Or, `npm run test:watch`
```


### How to Deploy

Update `publish` script in the [`run.js`](run.js) file with your full Firebase project name as found
in your [Firebase console](https://console.firebase.google.com/). Note that this may have an
additional identifier suffix than the shorter name you've provided. Then run: 

```shell
$ node run publish              # Build and publish the website to Firebase, same as `npm run publish`
```

The first time you publish, you will be prompted to authenticate with Google and generate an
authentication token in order for the publish script to continue.

![publish](https://koistya.github.io/files/react-static-boilerplate-publish.gif)

If you need just to build the project without publishing it, run:

```shell
$ node run build                # Or, `node run build --release` for production build
```


### How to Update

You can always fetch and merge the recent changes from this repo back into your own project:

```shell
$ git checkout master
$ git fetch react-static-boilerplate
$ git merge react-static-boilerplate/master
$ npm install
```

### License

Copyright © 2015-present Kriasoft, LLC. This source code is licensed under the MIT license found in
the [LICENSE.txt](https://github.com/kriasoft/react-static-boilerplate/blob/master/LICENSE.txt) file.

---
Made with ♥ by Konstantin Tarkus ([@koistya](https://twitter.com/koistya)) and [contributors](https://github.com/kriasoft/react-static-boilerplate/graphs/contributors)
