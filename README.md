# Installed sripts

Lint code script: ```npm run lint```

Minify and concat scripts: ```npm run uglify``` 


# Tests making a resuable and bowerizable angular module

Using this guide for "bowerize" the module: [http://briantford.com/blog/angular-bower](http://briantford.com/blog/angular-bower)

Using this guide to configure manally the tests: [https://www.airpair.com/angularjs/posts/unit-testing-angularjs-applications](https://www.airpair.com/angularjs/posts/unit-testing-angularjs-applications)


## Install
1. download the files
	1. Bower
		1. add `"sirragnar.test-reusable-module": "latest"` to your `bower.json` file then run `bower install` OR run `bower install sirragnar.test-reusable-module`
2. include the files in your app
	1. `ar.test-reusable-module.min.js`
	2. `ar.test-reusable-module.less` OR `ar.test-reusable-module.min.css` OR `ar.test-reusable-module.css`
3. include the module in angular (i.e. in `app.js`) - `SirRagnar.sirragnar.test-reusable-module`

See the `gh-pages` branch, files `bower.json` and `index.html` for a full example.


## Documentation
See the `ar.test-reusable-module.js` file top comments for usage examples and documentation
https://github.com/SirRagnar/sirragnar.test-reusable-module/blob/master/ar.test-reusable-module.js


## Development

1. `git checkout gh-pages`
	1. run `npm install && bower install`
	2. write your code then run `grunt`
	3. git commit your changes
2. copy over core files (.js and .css/.less for directives) to master branch
	1. `git checkout master`
	2. `git checkout gh-pages ar.test-reusable-module.js ar.test-reusable-module.min.js ar.test-reusable-module.less ar.test-reusable-module.css ar.test-reusable-module.min.css`
3. update README, CHANGELOG, bower.json, and do any other final polishing to prepare for publishing
	1. git commit changes
	2. git tag with the version number, i.e. `git tag v1.0.0`
4. create github repo and push
	1. [if remote does not already exist or is incorrect] `git remote add origin [github url]`
	2. `git push origin master --tags` (want to push master branch first so it is the default on github)
	3. `git checkout gh-pages`
	4. `git push origin gh-pages`
5. (optional) register bower component
	1. `bower register sirragnar.test-reusable-module [git repo url]`
