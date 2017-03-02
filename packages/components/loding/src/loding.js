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

        for(let k in params){
            component[k] = params[k];
        }
        doc.appendChild(component.$el);
    },
    done:(params) => {
        component.isshow = false;
        component.done = false;
        component.loding = true;

        for(let k in params){
            component[k] = params[k];
        }
        doc.appendChild(component.$el);
    },
    hide:(params) => {
        component.isshow = true;
    }
}
