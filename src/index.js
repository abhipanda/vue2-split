import Split from './components/split';

const Vue2Split = {
    Split,
    SplitArea: Split.SplitArea
};

const install = function (Vue) {
    Object.keys(Vue2Split).forEach((key) => {
        Vue.component(key, Vue2Split[key]);
    });
};

if (typeof window !== 'undefined' && window.Vue) {
    install(window.Vue);
}

export { Vue2Split };
export default install;