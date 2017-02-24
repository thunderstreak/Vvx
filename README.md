# Vvx

> Vvx UI 基于Vue2.0开发的一套常用移动端UI组件。

## Install

```shell
npm install
```
## Quick Start
``` javascript
import Vue from 'vue'
import Element from 'Vvx'

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
*android4.4+
*ios9+

## Commonly used Components
*Dialog
*Loding
*PickerAddress
*PickerTime
*PickerSelect
*Swiper
*Switch
*More in development...


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
