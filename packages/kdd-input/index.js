
// 导入组件，组件必须申明name
import KddInput from './src/kdd-input';

// 为组件提供install方法，供按需引入
KddInput.install = function (Vue) {
    Vue.component(KddInput.name,KddInput)
}

// 导出组件
export default KddInput