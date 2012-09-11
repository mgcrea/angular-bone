'use strict';

var slice = Array.prototype.slice;
var splice = Array.prototype.splice;

angular.module('$bone.services')

.factory('$collection', ['$resource', '$events', function($resource, $events) {

	var CollectionFactory = function CollectionFactory(models, options) {

		function Collection(models, options) {
			options || (options = {});
			if (options.model) this.model = options.model;
			if (options.comparator) this.comparator = options.comparator;
			this._reset();

			this.$on("hello", function() {
				console.warn('hello!');
			})
			console.warn(this, arguments);

			return this;
		}



		_.extend(Collection.prototype, $events, {
			models: null,

			add: function(models, options) {
				var i, index, length, model;
				options || (options = {});
				models = _.isArray(models) ? models.slice() : [models];

				this.length += length;
				index = options.at != null ? options.at : this.models.length;
				splice.apply(this.models, [index, 0].concat(models));

				return this;
			},
			remove: function(models, options) {
				var i, l, index, model;
				options || (options = {});
				models = _.isArray(models) ? models.slice() : [models];

				for (i = 0, l = models.length; i < l; i++) {
					model = models[i];
					index = this.indexOf(model);
					console.warn('index', index, this.models, model);
					this.models.splice(index, 1);
					this.length--;
				}

				return this;
			},
			replace: function(model, options) {
				var index;
				options || (options = {});

				//index = this.indexOf(model); // not working :(
				index = this.getIndexById(model.getId());
				this.models[index] = model;

				return model;
			},
			push: function(model, options) {
				this.add(model, options);
				return model;
			},
			pop: function(options) {
				var model = this.at(this.length - 1);
				this.remove(model, options);
				return model;
			},
			unshift: function(model, options) {
				this.add(model, _.extend({at: 0}, options));
				return model;
			},
			shift: function(options) {
				var model = this.at(0);
				this.remove(model, options);
				return model;
			},
			at: function(index) {
				return this.models[index];
			},

			getById: function(_id) {
				return this.find(function(v, k) {
					return v._id.$oid == _id.$oid; }
				);
			},
			getIndexById: function(id) {
				var index = -1;
				this.every(function(v, k) {
					if(v.getId() == id) {
						index = k;
						return false;
					}
					return true;
				});
				return index;
			},

			query: function() {
				this.$emit('hello');
				console.warn('model', this.model);
				this.models = this.model.query.apply(null, arguments);
				return this.models;
			},
			save: function() {
				return this.model.save.apply(null, arguments);
			},
			create: function(model, options) {
				return new this.model(model);
			},

			_reset: function(options) {
				this.length = 0;
				this.models = [];
				//this._byId  = {};
				//this._byCid = {};
			}

		});

		// Underscore methods that we want to implement on the Collection.
		var methods = ['forEach', 'each', 'map', 'reduce', 'reduceRight', 'find',
		'detect', 'filter', 'select', 'reject', 'every', 'all', 'some', 'any',
		'include', 'contains', 'invoke', 'max', 'min', 'sortBy', 'sortedIndex',
		'toArray', 'size', 'first', 'initial', 'rest', 'last', 'without', 'indexOf',
		'shuffle', 'lastIndexOf', 'isEmpty', 'groupBy'];

		// Mix in each Underscore method as a proxy to Collection#data.
		_.each(methods, function(method) {
			Collection.prototype[method] = function() {
				return _[method].apply(_, [this.models].concat(_.toArray(arguments)));
			};
		});

		return new Collection(models, options);

	};

	return CollectionFactory;

}])
