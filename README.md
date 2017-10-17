# Vvx

> Vvx UI 一套基于Vue2.0开发的一套简单常用的移动端UI组件。
> [Demo](https://thunderstreak.github.io/vvxdemo/#/)

## Install

```shell
npm install vvxui
```
## Quick Start
``` javascript
import Vue from 'vue'
import {install as Vvx} from 'vvxui';

Vue.use(Vvx)

// or
import {
  	Dialog,
  	Loding
  	// ...
} from 'Vvx'

Vue.component(Dialog.name, Dialog)
Vue.component(Loding.name, Loding)
```

## Browser Support
* android4.4+
* ios9+

## Commonly used Components
- Dialog
- Loding
- Totas
- PickerAddress
- PickerTime
- PickerSelect
- Swiper
- Switch
- Slider
- More in development...

## Components Details Used

> Dialog

``` HTML
<p class="demo-list" v-on:click="tips1">confirm<span>{{tipsMsg1}}</span></p>
```

``` javascript
let that = this;
this.$dialog.confirm({
    tit:'Test title',
    msg:'Test Message',
    callback:function(data){
        that.tipsMsg1 = data;
    }
})
```
All methods:`confirm,alert,toast`.

>Loding

``` HTML
<p class="demo-list" v-on:click="loding1">Show Loding</p>
```

``` javascript
// show
loding1(){
    this.$loding.loding({
    	msg:'loding'
    });
},
//hide
this.$loding.hide();
```
All methods:`loding,done`.

>Totas

``` HTML
<p class="demo-list" v-on:click="showToast1">showToast</p>
<p class="demo-list" v-on:click="showToast2">showToast position</p>
<p class="demo-list" v-on:click="hideToast1">hideToast</p>
```

``` javascript
// show
showToast1(){
    this.$toast.toast({
        msg:'这是一个toast'
    })
},

showToast2(){
    this.$toast.toast({
    	msg:'这是一个toast',
        position:'top',
    })
},


//hide
hideToast1(){
	this.$toast.toast({
		msg:'这是一个toast',
	    position:'middle',
	})
	setTimeout(()=>{
	    this.$toast.hide();
	},2000)
}
```
All methods:`totas,hide`.

>PickerAddress

``` HTML
<p class="demo-list" v-on:click="showPickerAddress1">Show default address：['北京', '北京', '东城区'] <span>{{resAddress1}}</span></p>

<!-- Show default address： -->
<pickerAddress
	v-bind:Metadata="Metadata"
    v-on:accept-result="acceptResultAddress1"
    ref="pickerAddress1"
></pickerAddress>

<p class="demo-list" v-on:click="showPickerAddress2">Show setup address：['湖南省', '长沙市', '岳麓区'] <span>{{resAddress2}}</span></p>

<!-- Show set address： -->
<pickerAddress
	v-bind:Metadata="Metadata"
    v-bind:setAddress="['湖南省', '长沙市', '岳麓区']"
    v-on:accept-result="acceptResultAddress2"
    ref="pickerAddress2"
></pickerAddress>

<p class="demo-list" v-on:click="showPickerAddress3">Show provinces and cities：['北京', '北京'] <span>{{resAddress3}}</span></p>

<!-- Show provinces and cities： -->
<pickerAddress
	v-bind:Metadata="Metadata"
    v-bind:setProcity="true"
    v-on:accept-result="acceptResultAddress3"
    ref="pickerAddress3"
></pickerAddress>
```

``` javascript
// Similar data
{
	"i":"11",
	"n":"北京",
	"c":[{
		"i":"1101",
		"n":"北京市",
		"c":
		[{"i":"110101","n":"东城区"},
		{"i":"110102","n":"西城区"},
		{"i":"110103","n":"崇文区"},
		{"i":"110104","n":"宣武区"},
		{"i":"110105","n":"朝阳区"},
		{"i":"110106","n":"丰台区"},
		{"i":"110107","n":"石景山区"},
		{"i":"110108","n":"海淀区"},
		{"i":"110109","n":"门头沟区"},
		{"i":"110111","n":"房山区"},
		{"i":"110112","n":"通州区"},
		{"i":"110113","n":"顺义区"},
		{"i":"110114","n":"昌平区"},
		{"i":"110115","n":"大兴区"},
		{"i":"110116","n":"怀柔区"},
		{"i":"110117","n":"平谷区"},
		{"i":"110228","n":"密云县"},
		{"i":"110229","n":"延庆县"}]
	}]
}
// Display and get results
showPickerAddress1(){
    this.$refs.pickerAddress1.open();
},
acceptResultAddress1(val){
    this.resAddress1 = val.toString();
},
```

>PickerTime

``` HTML
<p class="demo-list" v-on:click="showPickerTime1">Show default time：{{currTime}} <span>{{resTime1}}</span></p>

<!-- Show default time -->
<pickerTime
    v-on:accept-result="acceptResultTime1"
    ref="pickerTime1"
></pickerTime>

<p class="demo-list" v-on:click="showPickerTime2">Display setup time：2016-2-29 <span>{{resTime2}}</span></p>

<!-- Display setup time -->
<pickerTime
    v-bind:setCurrDate="[2016,2,29]"
    v-on:accept-result="acceptResultTime2"
    ref="pickerTime2"
></pickerTime>

<p class="demo-list" v-on:click="showPickerTime3">Set the time period：[Min:2015-5]-[Max2018-5] <span>{{resTime3}}</span></p>

<!-- Set the time period -->
<pickerTime
    v-bind:setMinDate="[2015,5,5]"
    v-bind:setMaxDate="[2018,5,5]"
    v-on:accept-result="acceptResultTime3"
    ref="pickerTime3"
></pickerTime>
```

``` javascript


// Display and get results
showPickerTime1(){
    this.$refs.pickerTime1.open();
},
acceptResultTime1(val){
    this.resTime1 = val.toString();
},
```


>PickerSelect

``` HTML
<p class="demo-list" v-on:click="showPickerSelect1">default select:<span>{{resSelect1}}</span></p>

<p class="demo-list" v-on:click="showPickerSelect1">Set the initial select:[seletc1]<span>{{resSelect1}}</span></p>
```

``` javascript
// Similar data
initData:['select1','select2','select3','select4',],
initSelected:['select2'],

// Display and get results
showPickerSelect1(){
    this.$refs.pickerSelect1.open();
},
acceptResultSeletc1(val){
    this.resSelect1 = val.toString();
},
```


>Swiper

``` HTML
<p class="demo-list">Autoplay:3000</p>

<Swiper v-bind:auto="3000" v-bind:imgArr="swiper">

	<!-- <a v-bind:href="item.url" v-for="(item,index) in swiper" v-bind:data-item="index">
	    <img v-bind:src="item.src" v-bind:alt="item.alt">
	</a> -->

</Swiper>

<p class="demo-list">Show dot location：left,right,Default:center</p>

<Swiper v-bind:imgArr="swiper" v-bind:show="'left'"></Swiper>

```

``` javascript
//Similar data
swiper:[
    {src:"https://static.vux.li/demo/1.jpg",alt:"top_banner1",url:"https://static.vux.li/demo/1.jpg"},
    {src:"https://static.vux.li/demo/2.jpg",alt:"top_banner2",url:"https://static.vux.li/demo/1.jpg"},
    {src:"https://static.vux.li/demo/3.jpg",alt:"top_banner3",url:"https://static.vux.li/demo/1.jpg"},
]
```


>Switch

``` HTML
<p class="demo-list">Set the title：这是一个标题<span></span></p>

<Switchs
    v-bind:title="'这是一个标题'"
></Switchs>

<p class="demo-list">Set the initial：true<span>{{onoff}}</span></p>

<Switchs
    v-bind:title="'这是另外一个标题'"
    v-bind:Active='true'
    v-on:accept-result="acceptResultSwitch"
></Switchs>
```

``` javascript
// Receive the result
acceptResultSwitch(val){
    this.onoff = val;
}
```

>Slider

``` HTML
<Slider
    v-bind:PropList="list"
    v-on:accept-result="acceptResultSlider"
></Slider>
```

``` javascript
//Similar data(title is required)
list:[
    {title:'slider1',data:1},
    {title:'slider2',data:2},
    {title:'slider3',data:3},
    {title:'slider4',data:4},
]
// Receive the result
acceptResultSlider(val){
    console.log(val);
}
```


## Build Setup

``` bash
# install dependencies
npm install

# serve with hot reload at localhost:8080
npm run dev

# build for production with minification
npm run build

# build for production and view the bundle analyzer report
npm run build --report
```

For detailed explanation on how things work, checkout the [guide](http://vuejs-templates.github.io/webpack/) and [docs for vue-loader](http://vuejs.github.io/vue-loader).
