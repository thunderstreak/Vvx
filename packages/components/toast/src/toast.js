import Vue from 'vue';
import toastComponent from './toast.vue';

const toast = Vue.extend(toastComponent);

let component = new toast({
    el : document.createElement('div')
});

let doc = document.body;

export default {
    toast:(params) => {
        component.isshow = false;
        for(let k in params){
            component[k] = params[k];
        }
        doc.appendChild(component.$el);
    },
    hide:(params) => {
        component.isshow = true;
        
    }
}
