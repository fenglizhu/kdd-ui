<template>
    <button :class="[
        'kd-button',
        'kd-button-' + type , 
        'kd-button-' + size,
        {
            'kd-button-plain': plain,
            'kd-button-hairline': hairline, 
            'kd-button-disabled': disabled,
            'kd-button-square': square,
            'kd-button-round': round,
            'kd-button-block': block
            
        }]" 
        :style="{ 
            'background': color.indexOf('gradient') >= 0 ? color : (plain ? '' : color), 
            'border-color': color.indexOf('gradient') >=0 ? 'none' : color, 
            'color': color.indexOf('gradient') >= 0 ? '#FFF' : (color && !plain ? '#FFF' :  color && plain ? color : '') 
        }"
        :disabled="disabled"
        @click="handleClick"
    >
        <slot></slot>
    </button>
</template>
<script>
export default {
    name:"kddButton",
    props:{
        // 按钮类型：支持 default、primary、info、warning、danger 五种类型，默认为 default
        type:{
            type: String,
            default: 'default'
        },
        // 按钮尺寸: large、normal、small、mini，默认 nomal
        size:{
            type: String,
            default: 'nomal'
        },
        // 自定义颜色
        color: {
            type: String,
            default: ''
        },
        // 朴素按钮、边框按钮
        plain:{
            type: Boolean,
            default: false
        },
        // 细边框
        hairline:{
            type: Boolean,
            default: false
        },
        // 禁用状态
        disabled: {
            type: Boolean,
            default: false
        },
        // 方形按钮
        square: {
            type: Boolean,
            default: false
        },
        // 圆形按钮
        round: {
            type: Boolean,
            default: false
        },
        // 块级元素
        block: {
            type: Boolean,
            default: false
        }
    },
    methods:{
        handleClick(evt){
            this.$emit('click', evt)
        }
    }
}
</script>
<style>
    .kd-button{
        position: relative;
        padding: 12px 20px;
        margin: 0;
        border-radius: 4px;
        box-sizing: border-box;
        border: 1px solid #ebedf0;
        outline: none;
        background: #FFF;
        font-size: 14px;
        color: #323233;
        text-align: center;
        line-height: 1.2;
        transition: opacity .2s;
        cursor: pointer;
    }
    .kd-button::before{
        content: "";
        position: absolute;
        left: 50%;
        top: 50%;
        width: 100%;
        height: 100%;
        border: inherit;
        border-radius:inherit;
        background: #000;
        border-color: #000;
        opacity: 0;
        transform: translate(-50%,-50%);
        -webkit-transform: translate(-50%,-50%);
        -webkit-appearance: none;
    }
    .kd-button:hover::before, .kd-button:focus::before{
        opacity: 0.05;
    }
    .kd-button:active::before{
        opacity: 0.1;
    }
    /* 按钮类型 */
    .kd-button-primary{
        border-color: #409EFF;
        background-color: #409EFF;
        color: #FFF;
    }
    .kd-button-info{
        border-color: #07c160;
        background-color: #07c160;
        color: #FFF;
    }
    .kd-button-warning{
        border-color: #feca2d;
        background-color: #feca2d;
        color: #FFF;
    }
    .kd-button-danger{
        border-color: #ee0a24;
        background-color: #ee0a24;
        color: #FFF;
    }
    /* 朴素按钮 */
    .kd-button-plain{
        background-color: #fff;
    }
    .kd-button-primary.kd-button-plain{
        color: #409EFF;
    }
    .kd-button-info.kd-button-plain{
        color: #07c160;
    }
    .kd-button-warning.kd-button-plain{
        color: #feca2d;
    }
    .kd-button-danger.kd-button-plain{
        color: #ee0a24;
    }
    /* 细边框 */
    .kd-button-hairline{
        position: relative;
        border-width: 0;
    }
    .kd-button-hairline::after{
        content: "";
        position: absolute;
        top: -50%;
        right: -50%;
        bottom: -50%;
        left: -50%;
        width: 200%;
        height: 200%;
        box-sizing: border-box;
        border: 1px solid;
        border-color:inherit;
        border-radius: 8px;
        transform: scale(.5);
        -webkit-appearance: none;
    }
    /* 禁用状态 */
    .kd-button-disabled{
        cursor: not-allowed;
        opacity: .5;
    }
    .kd-button-disabled::before{
        display: none;
    }
    /* 方形按钮 */
    .kd-button-square{
        border-radius: 0;
    }
    .kd-button-square.kd-button-hairline::after{
        content: "";
        border-radius: 0;
    }
    /* 圆形按钮 */
    .kd-button-round{
        border-radius: 999px;
    }
    .kd-button-round.kd-button-hairline::after{
        content: '';
        border-radius: 999px;
    }
    /* 按钮尺寸 */
    .kd-button-large{
        width: 100%;
        height: 50px;
    }
    .kd-button-small{
        height: 32px;
        padding: 0 8px;
        font-size: 12px;
    }
    .kd-button-mini{
        height: 24px;
        padding: 0 4px;
        font-size: 10px;
    }
    .kd-button-block{
        display: block;
    }
</style>