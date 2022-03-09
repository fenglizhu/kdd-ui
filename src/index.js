import KddButton from '../packages/kdd-button/index.js';
import KddLink from '../packages/kdd-link/index.js';
import KddInput from '../packages/kdd-input/index.js';
import kddVideoUpload from '../packages/kdd-video-upload/index.js';
import kddPicture from '../packages/kdd-picture/index.js';
const components = [
    KddButton,
    KddLink,
    KddInput,
    kddVideoUpload,
    kddPicture
]

const install = function (Vue) {
    if (install.installed) {
        return
    }
    install.installed = true;
    components.map(component=>{
        Vue.component(component.name,component)
    })
}

if(typeof window !== 'undefined' && window.Vue) {
    install(window.Vue)
}
export default {
    install,
    KddButton,
    KddLink,
    KddInput,
    kddVideoUpload
}