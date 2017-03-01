import Dialog from './components/dialog/';
import Loding from './components/loding/';
import Toast from './components/toast/';

import Picker from './components/picker/';
import PickerSelect from './components/pickerSelect/';
import PickerAddress from './components/pickerAddress/';
import PickerTime from './components/pickerTime/';
import Switchs from './components/switch/';
import Swiper from './components/swiper/';

const tool = require('./javascripts/tool.js');

const components = [
	Picker,
	PickerSelect,
	PickerAddress,
	PickerTime,
	Switchs,
	Swiper
];

const version = '1.0.1';

const install = function(Vue,opts = {}) {
	if (install.installed) return;

	components.map(component => {
   		Vue.component(component.name, component);
 	});

	// add global method or attribute
	Vue.myGlobalMethod = () => {
		console.log('method or attribute')
	}
	// add global assets directive
	Vue.directive('my-directive', {
		bind (el, binding, vnode, oldVnode) {
			// smoe...
		}
	})
	// injected component
	Vue.mixin({
		beforeCreate: () => {
			// console.log(this);
			// this.$tool = tool;
		}
	})
	// add prototype method
	Vue.prototype.$myMethod = (options) => {
		// logic...
	}

	Vue.$tool 	= Vue.prototype.$tool 	= tool;
	Vue.$dialog = Vue.prototype.$dialog = Dialog.default;
	Vue.$loding = Vue.prototype.$loding = Loding.default;
	Vue.$toast 	= Vue.prototype.$toast 	= Toast.default;
}

// auto install
if (typeof window !== 'undefined' && window.Vue) {
	install(window.Vue);
};

// module.exports = {
export {
	install,
  	version,

	Dialog,
	Loding,
	Toast,

	Picker,
	PickerSelect,
	PickerAddress,
	PickerTime,
	Switchs,
	Swiper,
}
