<template>
    <div class="hello">
        <img class="log" src="../assets/logo.png">
        <ul class="hello-list">
            <li>
                <router-link to="/swiper">swiper</router-link>
            </li>
            <li>
                <router-link to="/picker">picker</router-link>
            </li>
            <li>
                <router-link to="/pickerTime">pickerTime</router-link>
            </li>
            <li>
                <router-link to="/pickerAddress">pickerAddress</router-link>
            </li>
            <li>
                <router-link to="/switch">switch</router-link>
            </li>
            <li>
                <router-link to="/dialog">dialog</router-link>
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
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.hello{

}
.hello-list{
    height: auto;
}
.hello-list>li{
    padding: 0 .25rem;
    height: 1rem;
    line-height: 1rem;
    border-bottom: 1px #ccc solid;
}
</style>
