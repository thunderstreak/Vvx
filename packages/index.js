import Dialog 			from './components/dialog/';
import Loding 			from './components/loding/';
import Toast 			from './components/toast/';

import Picker 			from './components/picker/';
import PickerSelect 	from './components/pickerSelect/';
import PickerAddress 	from './components/pickerAddress/';
import PickerTime 		from './components/pickerTime/';
import Switchs 			from './components/switch/';
import Swiper 			from './components/swiper/';
import Slider 			from './components/silder/';

import tool 			from './javascripts/tool.js';
import './styles/index.css';

const components = [
	Picker,
	PickerSelect,
	PickerAddress,
	PickerTime,
	Switchs,
	Swiper,
	Slider
];

const version = '1.0.13';

const install = function(Vue, opts = {}) {
	if (install.installed) return;

	components.map(component => {
   		Vue.component(component.name, component);
 	});

	// add global method or attribute
	Vue.VvxGlobalMethod = () => {
		console.log('method or attribute')
	};

	// add global assets directive
	Vue.directive('Vvx-directive', {
		bind (el, binding, vnode, oldVnode) {
			// smoe...
		}
	});

	// injected component
	Vue.mixin({
		beforeCreate: () => {
			// this.$tool = tool;
		}
	});

	// add prototype method
	Vue.prototype.$VvxMethod = (options) => {
		// logic...
	};

	Vue.$tool 	= Vue.prototype.$tool 	= tool;
	Vue.$dialog = Vue.prototype.$dialog = Dialog;
	Vue.$loding = Vue.prototype.$loding = Loding;
	Vue.$toast 	= Vue.prototype.$toast 	= Toast;
};

// auto install
if (typeof window !== 'undefined' && window.Vue) {
	install(window.Vue);
}

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
	Slider
}
