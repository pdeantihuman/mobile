<template>
    <div id="for_footer">
        <div class="container">
            <div class="row">
                <div class="alert alert-success" v-html="this.node.body"></div>
            </div>
            <div class="row" id="button">
                <button class="btn btn-default" v-on:click="selectLeft">是</button>
                <button class="btn btn-default" v-on:click="selectRight">否</button>
            </div>
        </div>
    </div>
</template>

<script>
    import api from "../api/api";

    export default {
        name: "page-content",
        data(){
            return{
                tree:[],//整个树的数据
                node:'',//当前显示的节点
                docId:this.$route.query.id
            }
        },
        mounted:function () {
                this.$emit('sendText','请查看该方法是否解决您的问题？');
                // let url = `http://helper.test/api/articles/${this.docId}`;
                let url = `${api.for_node}${this.docId}`;
                this.axios.get(url)
                    .then(response => {
                        const data = response.data;
                        this.tree = data.data;
                        this.node = data.data;
                    })
            },
        methods:{
            selectLeft:function () {//点击解决按钮触发的事件
                if (this.node.leftChild===0){
                    this.$emit('sendText','抱歉，下列已是最终答案');
                } else {
                    let next_node_id = this.node.leftChild;//请求左子树节点
                    let url = `${api.for_node}${next_node_id}`;
                    this.axios.get(url)
                        .then(response => {
                            const data = response.data;
                            this.tree = data.data;
                            this.node = data.data;
                        })
                }
            },
            selectRight:function () {//点击为解决按钮触发的事件
                if (this.node.rightChild===0){
                    this.$emit('sendText','抱歉，下列已是最终答案');
                } else {
                    let next_node_id = this.node.rightChild;//请求右子树节点
                    let url = `${api.for_node}${next_node_id}`;
                    this.axios.get(url)
                        .then(response => {
                            const data = response.data;
                            this.tree = data.data;
                            this.node = data.data;
                        })
                }
            },
        }
    }
</script>

<style scoped>
    #button{
        text-align: center;
    }
</style>