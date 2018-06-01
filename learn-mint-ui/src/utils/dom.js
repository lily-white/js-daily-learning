import Vue from 'vue';

const isServer = Vue.prototype.$isServer;

export const on = (function () {
	if(!isServer && document.addEventListener) {
		return function(element, event, listener) {
			if(element && event && listener) {
				element.addEventListener(event, listener, false);
			}
		}
	}else {
		return function(element, event, listener) {
			if(element && event && listener) {
				element.attachEvent('on'+event, listener);
			}
		}
	}
})();

export const off = (function () {
	if(!isServer && document.removeEventListener) {
		return function(element, event, listener) {
			if(element && event && listener) {
				element.removeEventListener(event, listener, false);
			}
		}
	}else {
		return function(element, event, listener) {
			if(element && event && listener) {
				element.detachEvent('on'+event, listener);
			}
		}
	}
	console.log('off');
})();

export const once = function(element, event, fn) {
	let listener = function () {
		if(fn) {
			fn.apply(this, arguments);
		}
		off(element, event, listener);
	}
	on(element, event, listener);
}