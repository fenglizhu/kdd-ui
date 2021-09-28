<template>
    <div>
        KddInput
        <slot>
            
        </slot>
    </div>
</template>
<script>
export default {
    name:"kddInput",
    props:{
        name:{
            type: String
        },
        age:{
            type: String
        }
    },
}
</script>
<style>
    
</style>