
// 导入组件，组件必须申明name
import KddButton from './src/kdd-button';

// 为组件提供install方法，供按需引入
KddButton.install = function (Vue) {
    Vue.component(KddButton.name,KddButton)
}

// 导出组件
export default KddButton