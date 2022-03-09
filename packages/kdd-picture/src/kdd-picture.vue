<template>
    <div v-if="pictures.length" ref="kddPicture" :class="[
        'kdd-picture', 
        {
            'kdd-picture-radius': radius,
            'warp-cover': pictures.length == 1,
            'warp-between': pictures.length >= 3 && pictures.length != 4,
            'kdd-picture-two': pictures.length == 2 || pictures.length == 4,
            'kdd-picture-special': pictures.length >= 5,
            'kdd-picture-special-four': pictures.length == 4,
        }
    ]">
        <div class="kdd-picture-item" v-for="(item,index) in pictures" :key="index" @click="pictureHandler(item, index)">
            <img class="kpi-img" :height="height" :src="item" alt="">
        </div>
    </div>
</template>
<script>
export default {
    name:"KddPicture",
    props:{
        pictures:{
            type: Array,
            default: () => []
        },
        radius: {
            type: Boolean,
            default: false
        }
    },
    data() {
        return {
            height: 100,
        }
    },
    mounted() {
        this.initPictureHeight();
    },
    methods: {
        initPictureHeight() {
            if (this.pictures.length === 1) {
                this.height = this.$refs.kddPicture.offsetWidth
            } else if (this.pictures.length === 2 || this.pictures.length === 4) {
                this.height = this.$refs.kddPicture.offsetWidth / 2
            } else if (this.pictures.length >= 3) {
                this.height = this.$refs.kddPicture.offsetWidth / 3
            }
        },
        pictureHandler(item, index) {
            this.$emit('click', item, index)
        }
    },
    watch:{
        // 监听数据的变化来改变图片的高度
        pictures() {
            this.initPictureHeight()
        }
    }
}
</script>
<style>
    .kdd-picture{
        width: 100%;
        display: flex;
        flex-wrap: wrap;
    }
    .kdd-picture-two{
        justify-content: space-between;
    }
    .kdd-picture-two .kdd-picture-item{
        width: 49.6%;
    }
    .warp-between .kdd-picture-item{
        width: 32.7%;
    }
    .warp-between .kdd-picture-item:nth-child(3n+2){
        margin:0 0.8%;
    }
    .kdd-picture-special .kdd-picture-item:nth-child(3n+2){
        margin-bottom: 0.8%;
    }
    .kdd-picture-special-four .kdd-picture-item:nth-child(2){
        margin-bottom: 0.8%;
    }
    .kdd-picture-item .kpi-img{
        display: block;
        width: 100%;
        object-fit: cover;
        cursor: pointer;
    }
    .kdd-picture-radius .kdd-picture-item .kpi-img{
        border-radius: 6px;
    }
    
</style>