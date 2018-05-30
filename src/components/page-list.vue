<template>
    <div id="for_footer">
            <div class="container">
                <div class="table-responsive">
                    <table class="table table-striped table-hover table-bordered">
                        <tr v-for="item in items">
                            <td><router-link :to="{ path:'/Content',query:{id:item.id}}"><span class="glyphicon glyphicon-book" aria-hidden="true"></span>&nbsp;{{item.title}}</router-link></td>
                        </tr>
                    </table>
                </div>
            </div>
    </div>
</template>


<script>
    import api from "../api/api";

    export default {
        name: "page-list",
        data:function(){
            return {
                items:[]
            }
        },
        mounted(){
            // this.axios.get("http://helper.test/api/articles?onlyRoot=1")
            const get_url = api.list
            this.axios.get(get_url)
                .then(response => {
                    let data = response.data.data;
                    for (let i=0;i<data.length;i++){
                        this.items.push(data[i]);
                    }//得到的数据是对象数组
                    this.$emit('sendText','请选择一个帮助文档');//在mounted阶段利用$emit()触发了自定义事件“sendText”
                });
        },
    }
</script>

<style scoped>

</style>