<template>
    <a :href="href" v-bind="$attrs" :class="[
        'kdd-link',
        'kdd-link-' + type,
        {
            'kdd-link-underline': underline
        }]"
    >
        <slot></slot>
    </a>
</template>
<script>
export default {
    name:"KddLink",
    props:{
        href: {
            type: String,
            default: ''
        },
        // 基础类型 default、primary、info、warning、danger 
        type: {
            type: String,
            default: 'default'
        },
        underline: {
            type: Boolean,
            default: true
        },
        name:{
            type: String,
            default: ''
        }
    },
    mounted() {
        console.log(this.$attrs);
    }
}
</script>
<style>
    .kdd-link{
        color: #000;
        font-size: 14px;
        text-decoration: none;
    }
    .kdd-link:hover,.kdd-link:active,.kdd-link:focus{
        color: #409EFF;
        
    }
    .kdd-link-primary{
        color: #409EFF;
    }
    .kdd-link-info,.kdd-link-info:hover,.kdd-link-info:active,.kdd-link-info:focus{
        color: #07c160;
    }
    .kdd-link-warning, .kdd-link-warning:hover,.kdd-link-warning:active,.kdd-link-warning:focus{
        color: #feca2d;
    }
    .kdd-link-danger, .kdd-link-danger:hover,.kdd-link-danger:active,.kdd-link-danger:focus{
        color: #ee0a24;
    }
    .kdd-link-underline:hover,.kdd-link-underline:active,.kdd-link-underline:focus{
        text-decoration: underline;
    }
</style>