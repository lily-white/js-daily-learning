/**
 * 点击外面元素触发的事件
 */
const clickoutsideContext = 'clickoutsideContext';
export default {
	bind(el, binding, vnode) {
		const documentHandler = function (e) {
			if(vnode.context && !el.contains(e.target)) {
				vnode.context[el[clickoutsideContext].methodName]();
			}
		}
		el[clickoutsideContext] = {
			documentHandler,
			methodName: binding.expression,
			arg: binding.args || 'click'
		};
		document.addEventListener(el[clickoutsideContext].arg, documentHandler);
	},
	unbind(el) {
		document.removeEventListener(el[clickoutsideContext].arg, el[clickoutsideContext].documentHandler);
	},
	update(el, binding) {
		el[clickoutsideContext].methodName = binding.expression;
	},
	install(Vue) {
		Vue.directive('clickoutside', {
			bind: this.bind,
			unbind: this.unbind
		})
	}
}