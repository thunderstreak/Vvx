import Dialog from './dialog/';
import Loding from './Loding/';
import Toast from './toast/';

import Picker from './picker/';
import PickerSelect from './pickerSelect/';
import PickerAddress from './pickerAddress/';
import PickerTime from './pickerTime/';
import Switchs from './switch/';
import Swiper from './swiper/';

let Vvx = {};

Vvx.install = (Vue, options) => {

	Vue.component(PickerSelect.name, PickerSelect);
	Vue.component(PickerAddress.name, PickerAddress);
	Vue.component(PickerTime.name, PickerTime);
	Vue.component(Switchs.name, Switchs);
	Vue.component(Swiper.name, Swiper);

	// 1. 添加全局方法或属性
	Vue.myGlobalMethod = () => {
		console.log('这算一个添加的全局方法或属性')
	}
	// 2. 添加全局资源
	Vue.directive('my-directive', {
		bind (el, binding, vnode, oldVnode) {
			// 逻辑...
		}
	})
	// 3. 注入到组件
	Vue.mixin({
		beforeCreate: () => {
			this.$tool = {
                dialog:Dialog
            };
		}
	})
	// 4. 添加实例方法
	Vue.prototype.$myMethod = (options) => {
		// 逻辑...
	}

	Vue.$Dialog = Vue.prototype.$dialog = Dialog;
	Vue.$Loding = Vue.prototype.$loding = Loding;
	Vue.$Toast = Vue.prototype.$toast = Toast;
}

export default Vvx;

/*const version = '0.0.1';
const install = function(Vue) {
	if (install.installed) return;

	Vue.component(pickerSelect.name, pickerSelect);

	Vue.$dialog = Vue.prototype.$dialog = dialog;
}

// auto install
if (typeof window !== 'undefined' && window.Vue) {
	install(window.Vue);
};

module.exports = {
	install,
  	version,
	pickerSelect
}*/
