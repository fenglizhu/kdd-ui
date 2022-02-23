<template>
    <div class="kdd-video-upload">
        <div class="kvu-upload-drag-box" @dragover="fileDragover" @drop="fileDrop" @click="chooseFile()">
            <slot name="drag"></slot>
            <p class="drag-tips">点击上传或将文件拖入此区域</p>
        </div>
        <input class="kdd-video-upload-dis-none" ref="videoFile" type="file" :multiple="multiple" @change="selectVideoSource($event)" accept="video/*" />
    </div>
</template>
<script>
export default {
    name:"KddVideoUpload",
    props:{
        CATE_ID: {
            type: String,
        },
        MAX_FILE_SIZE: {
            type: Number,
            default: 1024
        },
        TEMPLATE_GROUP_ID: {
            type: String,
        },
        USER_ID: {
            type: String,
        },
        REGION:{
            type: String,
        },
        callbackURL:{
            type: String,
        },
        multiple:{      // 是否多选，暂不支持
            type: Boolean,
            default: false
        },
        STS_TOKEN:{
            type: Object
        }
    },
    data() {
        return {
            videoFile: null,            // 视频文件
            videoUploader: null,        // 视频上传对象
        }
    },
    methods: {
        /**
         * 拖拽中
         */
        fileDragover(e) {
            e.preventDefault()
        },
        /**
         * 拖拽视频文件结束，获取第一个文件
         */
        fileDrop(e) {
            e.preventDefault()
            var file = e.dataTransfer.files[0];
            this.setVideoFile(file)
        },
        /**
         * 点击上传视频区域回调函数
         */
        chooseFile() {
            this.$refs.videoFile.click()
        },
        /**
         * 选择视频文件回调
         */
        selectVideoSource(e) {
            var file = e.target.files[0]
            this.setVideoFile(file)
            e.target.value = '';
        },
        /**
         * 拖拽结束之后和选择视频文件之后，需要做一个视频校验处理
         */
        setVideoFile(file) {
            if (!file) return
            // 文件格式
            if (file.type.indexOf('video') < 0 && file.type.indexOf('flash') < 0 && file.name.indexOf('flv') < 0) {
                this.$emit('file-error','文件格式不对')
                return
            }
            // 文件大小
            if (file.size / 1024 / 1024 > this.MAX_FILE_SIZE) {
                this.$emit('file-error','文件过大');
                return
            }
            // 文件名不得超过50个字符
            if (file.name.length > 50) {
                this.$emit('file-error', '文件名过长，请修改后上传');
                return
            }
            this.videoFile = file;

            this.$emit('success-change-file',file);

        },
        /**
         * 阿里云上传
         */
        setUploadInfo() {
            // 初始化上传
            this.initAliyunUpload()

            // paramsData 参数文档：https://help.aliyun.com/document_detail/55407.htm?spm=a2c4g.11186623.2.5.ef4eb227Xtdm2R#doc-api-vod-CreateUploadVideo
            var paramsData = {
                Vod: {
                    Title: this.videoFile.name, // 视频名字
                    CateId: this.CATE_ID, // 分类id
                    TemplateGroupId: this.TEMPLATE_GROUP_ID, // 指定转码模板组
                    UserData: {
                        MessageCallback: {
                            // 回调接口设置
                            CallbackURL: this.callbackURL
                        },
                    },
                },
            }

            // 添加文件和配置
            this.videoUploader.addFile(this.videoFile, '', '', '', JSON.stringify(paramsData));

            // 开始上传视频
            this.videoUploader.startUpload();
        },
        /**
         * 初始化上传
         */
        initAliyunUpload() {
            var self = this;
            this.videoUploader = new AliyunUpload.Vod({
                userId: this.USER_ID, // 必填
                region: this.REGION, // 传到哪个区
                //分片大小默认1 MB，不能小于100 KB
                partSize: 1048576,
                //并行上传分片个数，默认5
                parallel: 10,
                //网络原因失败时，重新上传次数，默认为3
                retryCount: 3,
                //网络原因失败时，重新上传间隔时间，默认为2秒
                retryDuration: 2,
                //是否上报上传日志到视频点播，默认为true
                enableUploadProgress: true,
                //开始上传
                onUploadstarted: function (uploadInfo) {
                    self.videoUploader.setSTSToken(uploadInfo, self.STS_TOKEN.accessKeyId, self.STS_TOKEN.accessKeySecret, self.STS_TOKEN.secretToken)
                },
                //文件上传成功
                onUploadSucceed: function (uploadInfo) {
                    self.$emit('on-upload-succeed', uploadInfo)

                },
                //文件上传失败
                onUploadFailed: function (uploadInfo, code, message) {
                    // 视频上传错误处理：删除视频恢复初始化数据
                    self.$emit('on-upload-failed', uploadInfo, code, message)
                    
                },
                //文件上传进度，单位：字节
                onUploadProgress: function (uploadInfo, totalSize, loadedPercent) {
                    self.$emit('on-upload-progress', uploadInfo, totalSize, loadedPercent)
                },
                //STS token超时
                onUploadTokenExpired: function (uploadInfo) {
                    self.$emit('on-upload-token-expired', uploadInfo);
                },
                //全部文件上传结束
                onUploadEnd: function (uploadInfo) {
                    self.$emit('on-upload-end', uploadInfo)
                },
            })
        },
        resumeUploadWithSTSToken(sts_token){
            this.videoUploader.resumeUploadWithSTSToken(sts_token.accessKeyId, sts_token.accessKeySecret, sts_token.secretToken)
        }
    }
}
</script>
<style>
.kdd-video-upload-dis-none {
    display: none;
}
.kvu-upload-drag-box {
    width: 600px;
    padding: 112px 0;
    border: 1px dashed #D9D9D9;
    background: #fdfdfd;
    text-align: center;
    cursor: pointer;
}
.kvu-upload-drag-box .drag-tips {
    font-size: 16px;
    color: #757575;
}
.kdd-video-upload-dis-none{
    display: none;
}
</style>