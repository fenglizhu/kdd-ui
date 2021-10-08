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
        color: #709bb7;
        
    }
    .kdd-link-primary{
        color: #709bb7;
    }
    .kdd-link-info,.kdd-link-info:hover,.kdd-link-info:active,.kdd-link-info:focus{
        color: #8eb770;
    }
    .kdd-link-warning, .kdd-link-warning:hover,.kdd-link-warning:active,.kdd-link-warning:focus{
        color: #e3b93c;
    }
    .kdd-link-danger, .kdd-link-danger:hover,.kdd-link-danger:active,.kdd-link-danger:focus{
        color: #d37171;
    }
    .kdd-link-underline:hover,.kdd-link-underline:active,.kdd-link-underline:focus{
        text-decoration: underline;
    }
</style>