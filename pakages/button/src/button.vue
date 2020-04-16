<template>
    <button @click="clickButton" class="yx-button" :class="['yx-button-'+type]">
        <slot></slot>
    </button>
</template>

<script>
    export default {
        name: "YxButton",
        props:{
            type:{
                type:String,
                default:'info'
            }
        },
        methods:{
            clickButton(e){
                this.$emit("click",e)
            }
        }
    }
</script>

<style lang="scss" scoped>
    .yx-button {
        display: inline-block;
        line-height: 1;
        white-space: nowrap;
        cursor: pointer;
        background: #fff;
        border: 1px solid #dcdfe6;
        color: #606266;
        -webkit-appearance: none;
        text-align: center;
        box-sizing: border-box;
        outline: none;
        margin: 0;
        transition: .1s;
        font-weight: 500;
        -moz-user-select: none;
        -webkit-user-select: none;
        -ms-user-select: none;
        padding: 12px 20px;
        font-size: 14px;
        border-radius: 4px;
    }
    .yx-button-info{
        color: #fff;
        background-color: #909399;
        border-color: #909399;
    }
    .yx-button-primary{
        color: #fff;
        background-color: #409eff;
        border-color: #409eff;
    }
    .yx-button-danger{
        color: #fff;
        background-color: #f56c6c;
        border-color: #f56c6c;
    }
    .yx-button+.yx-button{
        margin-left: 10px;
    }
</style>