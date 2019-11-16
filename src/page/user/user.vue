<template>
    <div>
        <h1>{{message}}</h1>
        <App></App>
    </div>
</template>
<script>
import App from "../index/app.vue"
export default {
    name:"User",
    data(){
        return {
            message:"hello"
        }
    },
    components:{
        App
    }

}
</script>
<style scoped>
.hi{
    color: red;
}
</style> 

