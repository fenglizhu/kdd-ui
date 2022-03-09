

// 导入组件，组件必须申明name
import KddPicture from './src/kdd-picture';

// 为组件提供install方法，供按需引入
KddPicture.install = function (Vue) {
    Vue.component(KddPicture.name, KddPicture);
}

// 导出组件
export default KddPicture