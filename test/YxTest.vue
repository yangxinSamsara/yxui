<template>
    <div>
        <yx-button @click="clickPrimary" type="primary">主要按钮</yx-button>
        <yx-button type="info">信息按钮</yx-button>
        <yx-button type="danger">危险按钮</yx-button>
    </div>
</template>

<script>
    export default {
        name: "YxTest",
        methods: {
            clickPrimary(e){
                console.log(e)
            }
        }
    }
</script>

<style lang="scss" scoped>

</style>