import Vue from 'vue';
import dialogComponent from './dialog.vue';

// vue构造函数
const dialog = Vue.extend(dialogComponent);

// 创建组件容器
let component = new dialog({
    el : document.createElement('div')
});

let doc = document.body;

export default {
    alert:(params) => {

        component.isshow = false;
        component.type = 'alert';

        for(let k in params){
            component[k] = params[k];
        }
        doc.appendChild(component.$el);
    },
    toast:(params) => {

        component.isshow = false;
        component.type = 'toast';
        for(let k in params){
            component[k] = params[k];
        }

        doc.appendChild(component.$el);

        setTimeout(() => {
            component.isshow = true;
        },2000)
    },
    confirm:(params) => {

        component.isshow = false;
        component.type = 'confirm';
        component.ipt = null;

        for(let k in params){
            component[k] = params[k];
        }
        doc.appendChild(component.$el);
    }
};
