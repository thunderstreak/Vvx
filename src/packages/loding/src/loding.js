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

        for(let k in params){
            component[k] = params[k];
        }

        doc.appendChild(component.$el);

        setTimeout(()=>{
            component.isshow = true;
            component.loding = true;
        },2000);
    },
    done:(params) => {
        component.isshow = false;
        component.done = false;

        for(let k in params){
            component[k] = params[k];
        }

        doc.appendChild(component.$el);

        setTimeout(()=>{
            component.isshow = true;
            component.done = true;
        },2000);
    },
    hide:(params) => {
        component.isshow = true;
    }
}
