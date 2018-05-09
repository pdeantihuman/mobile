<template>
    <div id="list">
            <div class="container">
                <div class="table-responsive">
                    <table class="table table-striped table-hover table-bordered">
                        <tr v-for="item in items">
                            <td><router-link to="/Select"><span class="glyphicon glyphicon-book" aria-hidden="true"></span>&nbsp;{{item.message}}</router-link></td>
                        </tr>
                    </table>
                </div>
            </div>
    </div>
</template>


<script>
    export default {
        name: "page-list",
        data:function(){
            return {
                items:[]
            }
        },
        mounted:function () {
            $.ajax({
                url:"http://localhost/list.php?",
                type:"GET",
                dataType:"json",
                success:function (msg) {
                    for(let i in msg){
                        let a = { message : msg[i]};
                        this.items.push(a);
                    }
                }.bind(this)
            });
            this.$emit('sendText','请选择一个帮助文档');//在mounted阶段利用$emit()触发了自定义事件“sendText”
        }
    }
</script>

<style scoped>

</style>