import KddButton from '../packages/kdd-button/index.js';
import KddLink from '../packages/kdd-link/index.js';
import KddInput from '../packages/kdd-input/index.js';
const components = [
    KddButton,
    KddLink,
    KddInput
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
    KddInput
}