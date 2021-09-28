
// 导入组件，组件必须申明name
import KddLink from './src/kdd-link';

// 为组件提供install方法，供按需引入
KddLink.install = function (Vue) {
    Vue.component(KddLink.name, KddLink)
}

// 导出组件
export default KddLink