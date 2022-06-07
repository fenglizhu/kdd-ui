<template>
    <div :class="[
    type == 'textarea' ? 'kdd-textarea' : 'kdd-input',
    size ? 'kdd-input-' + size : '',
    {
        'kdd-input-prepend': $slots.prepend,
        'kdd-input-disabled': disabled,
        'kdd-input-readonly': readonly,
        'kdd-input-group': $slots.prepend || $slots.append,
        'kdd-input-group-prepend': $slots.prepend,
        'kdd-input-group-append': $slots.append,
        'kdd-input-prefix': $slots.prefix,
    }]">
        <template v-if="type!= 'textarea'">
            <div class="kdd-input-prepend-inner" v-if="$slots.prepend">
                <slot name="prepend"></slot>
            </div>
            <div class="kdd-input-content">
                <span v-if="$slots.prefix" class="kdd-input-prefix-inner">
                    <slot name="prefix"></slot>
                </span>
                <input class="kdd-input-inner" ref="input"
                v-bind="$attrs"
                :type="isPassword ? (passswordVisible ? 'text': 'password') : type"
                :value="value" 
                :disabled="disabled"
                :readonly="readonly"
                :autocomplete="autocomplete"
                :aria-label="ariaLabel"
                @input="inputHandle($event)"
                @focus="focusHandle"
                @blur="blurHandle"
                @change="changeHandle"
                @compositionstart="compositionstartHandle"
                @compositionend="compositionendHandle" />
                <span class="kdd-input-icon-inner">
                    <i class="kdd-input-icon iconfont icon-suo" v-if="showPwdVisible" @click="passswordVisibleHandle"></i>
                    <i class="kdd-input-icon iconfont icon-guanbi" v-if="showClear" @click="clearableHandle"></i>
                    <span v-if="showWordLimitVisible" class="kdd-input-length-inner">
                        {{textLength}}/{{maxLength}}
                    </span>
                    <template v-if="!showPwdVisible && !showClear && !showWordLimitVisible">
                        <slot name="suffix"></slot>
                    </template>
                </span>
            </div>
            
            <div class="kdd-input-append-inner" v-if="$slots.append">
                <slot name="append"></slot>
            </div>
        </template>
        <textarea v-else class="kdd-textarea-inner" ref="textarea"
        v-bind="$attrs"
        :value="value" 
        :disabled="disabled"
        :readonly="readonly"
        :autocomplete="autocomplete"
        :aria-label="ariaLabel"
        @input="inputHandle($event)"
        @focus="focusHandle"
        @blur="blurHandle"
        @change="changeHandle"
        @compositionstart="compositionstartHandle"
        @compositionend="compositionendHandle">
        </textarea>
        
    </div>
</template>
<script>
export default {
    name:"kddInput",
    props:{
        // 类型：text、textarea
        type:{
            type: String,
            default: 'text'
        },
        value:{
            type: [String,Number]
        },
        // 清楚按钮
        clearable: {
            type: Boolean
        },
        // 知否为密码
        isPassword: {
            type: Boolean
        },
        // 显示限制字符
        showWordLimit: {
            type: Boolean,
            default: false
        },
        // 禁用
        disabled:{
            type: Boolean,
            default: false
        },
        // 只读
        readonly:{
            type: Boolean,
            default: false
        },
        // 尺寸: large、normal、small、mini，默认 normal
        size:{
            type: String,
            default: 'normal'
        },
        autocomplete:{
            type: String,
            default: 'on'
        },
        // 用于屏幕阅读器(Screen Reader)，都是为了帮助残障人士更好的识别当前元素。
        ariaLabel:{
            type: String
        }
    },
    data() {
        return {
            passswordVisible: false,
            focused: false,
            composing: false,
        }
    },
    computed: {
        showPwdVisible() {
            return this.isPassword && (this.focused || this.value)
        },
        showClear() {
            return this.clearable && this.value && this.focused
        },
        showWordLimitVisible() {
            return this.showWordLimit && this.$attrs.maxlength && (this.type == 'text' || this.type == 'textaarea') && !this.readonly && !this.disabled && !this.isPassword
        },
        textLength() {
            if (typeof this.value == 'number') {
                return String(this.value).length
            }
            return this.value.length
        },
        maxLength() {
            return this.$attrs.maxlength
        }
    },
    methods: {
        getInput() {
            return this.$refs.input || this.$refs.textarea
        },
        inputHandle(e) {
            if(this.composing){
                return
            }
            this.$emit('input', e.target.value);
        },
        passswordVisibleHandle() {
            this.passswordVisible = !this.passswordVisible;
            this.focus()
        },
        clearableHandle() {
            this.$emit('input', '');
        },
        focusHandle(event) {
            this.focused = true;
            this.$emit('focus', event);
        },
        blurHandle(event) {
            this.focused = false;
            this.$emit('blur', event);
        },
        changeHandle(event) {
            this.$emit('change', event.target.value);
        },
        focus() {
            // TODO：聚焦会一闪
            let input = this.getInput()
            input.focus();
            setTimeout(() => {
                input.selectionStart = input.selectionEnd = input.value.length;
            });
        },
        // 
        compositionstartHandle() {
            this.composing = true
        },
        compositionendHandle(event){
            if(this.composing){
                this.composing = false;
                this.inputHandle(event)
            }
            
        }
    }
}
</script>
<style>
    .kdd-input{
        width: 180px;
        line-height: 40px;
        font-size: 14px;
    }
    .kdd-input .kdd-input-content{
        position: relative;
        width: 100%;
    }
    .kdd-input .kdd-input-inner{
        width: 100%;
        padding: 14px 10px;
        box-sizing: border-box;
        border: 1px solid #dcdfe6;
        border-radius: 4px;
        color: #666;
        outline: none;
        transition: border .2s;
    }
    .kdd-input .kdd-input-inner:focus{
        border: 1px solid #709bb7;
    }
    .kdd-input-icon-inner{
        display: flex;
        align-items: center;
        position: absolute;
        right: 10px;
        top: 1px;
        background: #FFF;
        line-height: inherit;
    }
    .kdd-input-icon-inner .iconfont{
        font-size: inherit;
    }
    .kdd-input .kdd-input-icon{
        margin-left: 5px;
        cursor: pointer;
    }
    .kdd-input .kdd-input-length-inner{
        padding: 1px 5px;
        color: #999;
    }
    /* 前面有占位图标 */
    .kdd-input-prefix .kdd-input-inner{
        padding-left: 30px;
    }
    .kdd-input-prefix-inner{
        position: absolute;
        left: 10px;
        top: 1px;
    }
    /* 禁用状态 */
    .kdd-input-disabled .kdd-input-inner,.kdd-input-readonly .kdd-input-inner ,.kdd-input-readonly .kdd-input-inner:focus{
        border-color: #e4e7ed;
        cursor: not-allowed;
    }
    /* 复合型输入框 */
    .kdd-input-group{
        display: flex;
        width: 100%;
    }
    .kdd-input-group .kdd-input-prepend-inner,.kdd-input-group .kdd-input-append-inner{
        padding: 0 20px;
        border: 1px solid #dcdfe6;
        box-sizing: border-box;
        line-height: inherit;
        background: #f4f4f5;
        color: #666;
    }
    .kdd-input-group .kdd-input-prepend-inner{
        border-radius: 4px 0 0 4px;
        border-right: 0;
    }
    .kdd-input-group .kdd-input-append-inner{
        border-radius: 0 4px 4px 0;
        border-left: 0;
    }
    .kdd-input-group-append .kdd-input-inner{
        border-top-right-radius: 0;
        border-bottom-right-radius: 0;
    }
    .kdd-input-group-prepend .kdd-input-inner{
        border-top-left-radius: 0;
        border-bottom-left-radius: 0;
    }
    /* 尺寸 */
    .kdd-input-large {
        line-height: 48px;
        font-size: 16px;
    }
    .kdd-input-large .kdd-input-inner{
        height: 50px;
        font-size: inherit;
    }
    .kdd-input-small {
        line-height: 30px;
        font-size: 12px;
    }
    .kdd-input-small .kdd-input-inner{
        height: 32px;
        padding: 0 10px;
        font-size: inherit;
    }
    .kdd-input-mini {
        line-height: 22px;
        font-size: 10px;
    }
    .kdd-input-mini .kdd-input-inner{
        height: 24px;
        padding: 0 10px;
        font-size: inherit;
    }
    /* textarea */
    .kdd-textarea{
        width: 400px;
    }
    .kdd-textarea .kdd-textarea-inner{
        width: 100%;
        padding: 5px 15px;
        box-sizing: border-box;
        border: 1px solid #dcdfe6;
        border-radius: 4px;
        color: #666;
        outline: none;
        line-height: 1.5;
        resize: vertical;   /** 只可以伸缩高度 */
        transition: border .2s;
    }
    .kdd-textarea .kdd-textarea-inner:focus{
        border: 1px solid #709bb7;
    }
    
</style>