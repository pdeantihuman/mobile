<template>
        <div id="app">
            <page-head v-bind:title="title"></page-head><!--v-bind将属性值动态绑定到父组件的data中-->
            <br>
            <router-view v-on:sendText="show"></router-view><!--“v-on”监听子组件的sendText方法-->
            <page-foot></page-foot>
        </div>
</template>

<script>
    import pageHead from './components/page-head'
    import pageFoot from './components/page-foot'

    export default {
        name: 'app',
        data:function () {
            return{
                title:''
            }
        },
        methods:{
            parentFunction:function (text){
                    this.title = text;
            },
            show:function (a) {//子组件的自定义事件sendText触发时，会调用此方法处理
                this.title = a;
            }
        },
        components:{
            pageHead,pageFoot
        }
    }
</script>

<style lang="scss">
    #app{
        display: flex;
        min-height: 100vh;/*vh窗口高度的百分比*/
        flex-direction: column;
    }
    #for_footer{
        flex: 1;
    }
</style>
