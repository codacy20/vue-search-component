import { expect } from 'chai'
import { shallowMount } from '@vue/test-utils'
import NotFound from '../../src/views/NotFound.vue'

describe('NotFound.vue', () => {
    it('renders props.msg when passed', () => {
        const msg = 'new message'
        const wrapper = shallowMount(NotFound, {
            propsData: { msg }
        })
        expect(wrapper.text()).to.include(msg)
    })
});
