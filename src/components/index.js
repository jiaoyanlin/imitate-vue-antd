// import Vue from 'vue';
import { default as Button } from './button';
const components = [
    Button,
];
const install = function (Vue) {
    components.map(component => {
        Vue.use(component);
    });

    // Vue.prototype.$message = message;
    // Vue.prototype.$notification = notification;
    // Vue.prototype.$info = Modal.info;
    // Vue.prototype.$success = Modal.success;
    // Vue.prototype.$error = Modal.error;
    // Vue.prototype.$warning = Modal.warning;
    // Vue.prototype.$confirm = Modal.confirm;
};

/* istanbul ignore if */
if (typeof window !== 'undefined' && window.Vue) {
    install(window.Vue);
}
console.log('------a', Button)

export {
    Button,
};
export default {
    // version,
    install,
};