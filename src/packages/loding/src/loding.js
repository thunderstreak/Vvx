import Vue from 'vue';
import lodingComponent from './loding.vue';

const loding = Vue.extend(lodingComponent);

let component = new loding({
    el : document.createElement('div')
});

let doc = document.body;

export default {
    loding:(params) => {
        component.isshow = false;
        component.loding = false;
        component.done = true;
        defaults(params);
    },
    done:(params) => {
        component.isshow = false;
        component.done = false;
        component.loding = true;
        defaults(params);
    },
    hide:(params) => {
        component.isshow = true;
    }
}

function defaults(params){
    for(let k in params){
        component[k] = params[k];
    }

    doc.appendChild(component.$el);
}