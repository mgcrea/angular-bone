'use strict';

var slice = Array.prototype.slice;
var splice = Array.prototype.splice;

angular.module('$bone.services')

.factory('$model', ['$injector', '$events', function($injector, $events) {

	var ModelFactory = function(attributes, options) {

		function Model(attributes, options) {
			var defaults;
			attributes || (attributes = {});

			var resource = attributes.resource;

			var query = resource.query;
			resource.query = function() {
				console.warn('in');
				return query.apply(this, arguments);
			}

			_.extend(resource.prototype, {
				getId: function() {
					return this._id.$oid;
				}
			});

			return resource;
		}

		return new Model(attributes, options);

	}

	return ModelFactory;

}])
