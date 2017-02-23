<template>
	<section class="picker">
		<ul class="picker-ul" ref="picker"
		v-on:touchstart.stop.prevent="touchstart($event)"
        v-on:touchmove.stop.prevent="touchmove($event)"
        v-on:touchend.stop.prevent="touchend($event)"
		>
			<li></li>
			<li></li>
			<li v-for="item in PropData">{{item}}</li>
			<li></li>
			<li></li>
		</ul>
	</section>
</template>
<script>
export default{
	name:'picker',
	data(){
		return{
			msg			:'picker',
			currindex	:0,
			currOffset	:0,
		}
	},
	props:{
		setIndex:{
			type:Number,
			default:()=>{
				return 0;
			}
		},
		PropData:{
			type:Array,
			default:()=>{
				return ['picker','picker','picker','picker','picker'];
			}
		}
	},
	created(){
		// this.arr = this.AreaData;
		// console.log(this.AreaData)
	},
	mounted(){
		this.pickerEle = this.$refs.picker;
		this.liHeight = Number((window.getComputedStyle(this.pickerEle.querySelector('li')).height).replace('px',''));

		// 设置初始选中的偏移值
		this.currindex = this.setIndex;
		let currY = this.currOffset = -(this.currindex)*this.liHeight;
		this.pickerEle.style.transform='translateY('+ currY +'px)';
	},
	methods:{
		touchstart(e){
			this.startY = e.touches[0].clientY;
			this.time = new Date().getTime();
            this.currentTarget = e.target.parentNode;
            this.lisize = this.currentTarget.querySelectorAll('li').length;
            // this.currentTarget.style.transition='none';
		},
		touchmove(e){

			this.endY = e.touches[0].clientY;
            let offsetY = this.currOffset + this.endY - this.startY;
            this.currentTarget.style.transform='translateY('+ offsetY +'px)';
		},
		touchend(e){
			this.endY = e.changedTouches[0].clientY;

            let t = new Date().getTime() - this.time;
            let d = this.endY - this.startY;

            // 取整计算需要移动的值
            let offset = Math.round((this.currOffset + d) / this.liHeight) * this.liHeight;

            // 偏移量大于2个li高度时候
            if(offset >= this.liHeight ){
                offset = 0 ;
            }
            if(offset < -this.liHeight * (this.lisize - 5)){
                offset = - this.liHeight * (this.lisize - 5);
            }
            // this.currentTarget.style.transition='.5s';
            this.currentTarget.style.transform='translateY('+ offset +'px)';
            this.currOffset = offset;
            // 将下标推入index对象
            this.currindex = Math.abs(Math.round(offset / this.liHeight));
            // console.log(idx)
            // console.log(offset)
            this.$emit('accept-result',this.currindex);
		}
	},
	watch:{
		PropData(n,o){
			let str = this.pickerEle.style.transform;
			if(str){
				let left 	= str.indexOf('(');
				let right 	= str.indexOf(')');
				let number 	= Number(str.substring(left+1,right).replace('px',''));
				if(Math.abs(number) / this.liHeight >= n.length){
					this.currOffset = 0;
					this.currindex = 0;
					this.$emit('accept-result',this.currindex);
					this.pickerEle.style.transform='translateY('+ 0 +'px)';
				}
			}
		}
	}
}
</script>
<style lang="less">
.picker{
	height: 5rem;
    width: 100%;
    overflow: hidden;
    position: relative;

    box-flex: 1;
	-webkit-box-flex: 1;
	flex: 1;
	-webkit-flex: 1;

    &:before{
        content: '';
        display: block;
        position: absolute;
        top: 0;
        left: 0;
        height: 2rem;
        width: 100%;
        border-bottom: 1px #ccc solid;
        background-image: linear-gradient(to bottom, #FFF, rgba(255, 255, 255, 0));
        pointer-events:none;
        z-index: 1;
    }
    &:after{
        content: '';
        display: block;
        position: absolute;
        left: 0;
        bottom: 0;
        height: 2rem;
        width: 100%;
        background-image: linear-gradient(to top, #FFF, rgba(255, 255, 255, 0));
        border-top: 1px #ccc solid;
        pointer-events:none;
        z-index: 1;
    }
    .picker-ul{
    	text-align: center;
    	transition: all .3s ease-out;
    	>li{
    	    height: 1rem;
    	    line-height: 1rem;
    	    font-size: .4rem;
    	}
    }
}
</style>
