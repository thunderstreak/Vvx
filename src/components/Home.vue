<template>
    <div class="hello">
        <img class="log" src="../assets/logo.png">
        <h1 class="Vvx">VvxUI</h1>
        <ul class="hello-list">
            <li>
                <router-link tag="a" to="/swiper">swiper</router-link>
            </li>
            <li>
                <router-link tag="a" to="/picker">picker</router-link>
            </li>
            <li>
                <router-link tag="a" to="/pickerSelect">pickerSelect</router-link>
            </li>
            <li>
                <router-link tag="a" to="/pickerTime">pickerTime</router-link>
            </li>
            <li>
                <router-link tag="a" to="/pickerAddress">pickerAddress</router-link>
            </li>
            <li>
                <router-link tag="a" to="/switch">switch</router-link>
            </li>
            <li>
                <router-link tag="a" to="/dialog">dialog</router-link>
            </li>
            <li>
                <router-link tag="a" to="/loding">loding</router-link>
            </li>
            <li>
                <router-link tag="a" to="/toast">toast</router-link>
            </li>
        </ul>
    </div>
</template>

<script>
export default {
    name: 'hello',
    data () {
        return {
            msg: 'Welcome to Your Vue.js App'
        }
    }
}

// 发布订阅
let pub = {
    publish : function() {
        dep.notify();
    }
}
let sub1 = { update:function(){console.log(1);}}
let sub2 = { update:function(){console.log(2);}}
function Dep(){
    this.subs = [sub1,sub2];
}
Dep.prototype.notify = function() {
    console.log(this);
    this.subs.forEach( function(sub) {
        sub.update();
    })
}
let dep = new Dep();
pub.publish();

</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.Vvx{
    text-align: center;
}
.hello{
    font-size: .5rem;
}
.hello-list{
    height: auto;
}
.hello-list>li{
    padding: 0 .5rem;
    height: 1.25rem;
    line-height: 1.25rem;
    border-bottom: 1px #ccc solid;
}
.hello-list>li>a{
    display: block;
}
</style>
