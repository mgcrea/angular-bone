'use strict';

var slice = Array.prototype.slice;
var splice = Array.prototype.splice;

angular.module('$bone.services')

.service('$events', [function() {
	var eventSplitter = /\s+/;
	var Events = {
		$on: function(events, callback, context) {

			var calls, event, node, tail, list;
			if (!callback) return this;
			events = events.split(eventSplitter);
			calls = this._callbacks || (this._callbacks = {});

			while (event = events.shift()) {
				list = calls[event];
				node = list ? list.tail : {};
				node.next = tail = {};
				node.context = context;
				node.callback = callback;
				calls[event] = {tail: tail, next: list ? list.next : node};
			}

			return this;
		},
		$off: function(events, callback, context) {
			var event, calls, node, tail, cb, ctx;

			if (!(calls = this._callbacks)) return;
			if (!(events || callback || context)) {
				delete this._callbacks;
				return this;
			}

			events = events ? events.split(eventSplitter) : _.keys(calls);
			while (event = events.shift()) {
				node = calls[event];
				delete calls[event];
				if (!node || !(callback || context)) continue;

				tail = node.tail;
				while ((node = node.next) !== tail) {
					cb = node.callback;
					ctx = node.context;
					if ((callback && cb !== callback) || (context && ctx !== context)) {
						this.on(event, cb, ctx);
					}
				}
			}

		return this;
		},
		$trigger: function(events) {
			var event, node, calls, tail, args, all, rest;
			if (!(calls = this._callbacks)) return this;
			all = calls.all;
			events = events.split(eventSplitter);
			rest = slice.call(arguments, 1);

			while (event = events.shift()) {
				if (node = calls[event]) {
					tail = node.tail;
					while ((node = node.next) !== tail) {
					node.callback.apply(node.context || this, rest);
				}
			}
			if (node = all) {
				tail = node.tail;
				args = [event].concat(rest);
				while ((node = node.next) !== tail) {
					node.callback.apply(node.context || this, args);
				}
				}
			}

			return this;
		}
	};

	Events.$bind   = Events.$on;
	Events.$unbind = Events.$off;
	Events.$emit   = Events.$trigger;

	return Events;

}])
