[AngularBone](https://github.com/mgcrea/angular-bone) [![Build Status](https://secure.travis-ci.org/mgcrea/angular-bone.png?branch=master)](http://travis-ci.org/#!/mgcrea/angular-bone)
=================

AngularBone is a set of services that enables the use of [Backbone](https://github.com/documentcloud/backbone) into your [AngularJS](https://github.com/angular/angular.js) app.

Available services
--------------------

+ $events (replicates Backbone.Events)

+ $collection (replicates Backbone.Collection)

+ $model ($resource override to provide Backbone.Model like functionality)

Quick start
-----------

Clone the repo, `git clone git://github.com/mgcrea/angular-bone.git`, or [download the latest release](https://github.com/mgcrea/angular-bone/zipball/master).

Testing
-------

AngularStrap is tested with `testacular` (jasmine unit tests).

	npm install testacular -g
	testacular start
	testacular run

Contributing
------------

Please submit all pull requests the against master branch. If your unit test contains javascript patches or features, you should include relevant unit tests. Thanks!

Authors
-------

**Olivier Louvignes**

+ http://olouv.com
+ http://github.com/mgcrea

Copyright and license
---------------------

	The MIT License

	Copyright (c) 2012 Olivier Louvignes

	Permission is hereby granted, free of charge, to any person obtaining a copy
	of this software and associated documentation files (the "Software"), to deal
	in the Software without restriction, including without limitation the rights
	to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
	copies of the Software, and to permit persons to whom the Software is
	furnished to do so, subject to the following conditions:

	The above copyright notice and this permission notice shall be included in
	all copies or substantial portions of the Software.

	THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
	IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
	FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
	AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
	LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
	OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
	THE SOFTWARE.
