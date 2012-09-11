'use strict';

describe('events', function () {
	var elm, scope, MyObject, myObject;

	beforeEach(function(){
		this.addMatchers({
			toEqualData: function(expected) {
				return angular.equals(this.actual, expected);
			},
			toBeFunction: function() {
				return typeof this.actual == 'function';
			}
		});
	});

	beforeEach(module('$bone.services'));

	beforeEach(inject(function ($injector, $rootScope, $events) {
		scope = $rootScope;

		MyObject = function() {}
		_.extend(MyObject.prototype, $events);
		myObject = new MyObject();

	}));

	it('should correctly inherit $events methods', function () {
		expect(myObject.$on).toBeFunction();
		expect(myObject.$off).toBeFunction();
		expect(myObject.$trigger).toBeFunction();
	});

	describe('event testing', function () {

		it('should bind and trigger events', function () {
			var onCustomEvent = jasmine.createSpy();
			myObject.$on('customEvent', onCustomEvent);
			myObject.$trigger('customEvent');
			expect(onCustomEvent).toHaveBeenCalled();
		});

		it('should unbind events', function () {
			var onCustomEvent = jasmine.createSpy();
			myObject.$on('customEvent', onCustomEvent);
			myObject.$off('customEvent');
			myObject.$trigger('customEvent');
			expect(onCustomEvent).wasNotCalled();
		});

	});

});
