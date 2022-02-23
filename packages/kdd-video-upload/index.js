
// 导入组件，组件必须申明name
import kddVideoUpload from './src/kdd-video-upload';

// 为组件提供install方法，供按需引入
kddVideoUpload.install = function (Vue) {
    Vue.component(kddVideoUpload.name,kddVideoUpload)
}

// 导出组件
export default kddVideoUpload