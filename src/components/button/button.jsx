import Wave from '../_util/wave.jsx';
import buttonTypes from './buttonTypes';
import { filterEmpty } from '../_util/props-util';

const props = buttonTypes();
export default {
    name: 'AButton',
    props,
    data() {
        return {
            myBtn: 'mybtnhhh',
            sizeMap: {
                large: 'lg',
                small: 'sm',
            },
            hasTwoCNChar: false,
            sLoading: !!this.loading,
        }
    },
    computed: {
        classes() {
            const {
                prefixCls,
                type,
                shape,
                size,
                hasTwoCNChar,
                sLoading,
                ghost,
                block,
                sizeMap,
                icon,
                $slots,
            } = this;
            console.log('----$slots', $slots)
            console.log('----$slots', filterEmpty($slots.default))
            const sizeCls = sizeMap[size] || '';
            const children = filterEmpty($slots.default);
            return {
                [`${prefixCls}`]: true,
                [`${prefixCls}-${type}`]: type,
                [`${prefixCls}-${shape}`]: shape,
                [`${prefixCls}-${sizeCls}`]: sizeCls,
                [`${prefixCls}-icon-only`]: !children && children !== 0 && icon,
                [`${prefixCls}-loading`]: sLoading,
                [`${prefixCls}-background-ghost`]: ghost || type === 'ghost',
                [`${prefixCls}-two-chinese-chars`]: hasTwoCNChar,
                [`${prefixCls}-block`]: block,
            };
        },
    },
    mounted() {
        window.test = this.$el;
    },
    methods: {
        click() {
            console.log('------aaa', this.$el, this.$data)
            console.log('------aaa', this.$el.textContent)
            console.log('------aaa', this.classes)
        },
    },
    render() {
        console.log('--$attrs', this.$attrs, this.$slots, this.$el);
        // return <Wave insertExtraNode>
        return <Wave>
            <div class={'hhhhh-0'} onClick={this.click} style="border:2px solid red;">
                <div>aaaaa</div>
                <span>bbbbb</span>
            </div>
            <div>hhhh</div>
        </Wave>
    }
}
