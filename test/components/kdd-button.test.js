import { mount } from '@vue/test-utils'
import KddButton from "@/packages/kdd-button/src/kdd-button";

describe("kdd-button.test.js",()=>{

  it('type', () => {
    const wrapper = mount(KddButton, {
      propsData: {
        type: 'warning'
      }
    });
    expect(wrapper.classes('kd-button-warning')).toBe(true);
  })

  it('size', () => {
    const wrapper = mount(KddButton, {
      propsData: {
        type: 'small'
      }
    });
    expect(wrapper.classes('kd-button-small')).toBe(true);
  })

  it('plain', () => {
    const wrapper = mount(KddButton, {
      propsData: {
        plain: true
      }
    });
    expect(wrapper.classes('kd-button-plain')).toBe(true);
  })

  it('hairline', () => {
    const wrapper = mount(KddButton, {
      propsData: {
        hairline: true
      }
    });
    expect(wrapper.classes('kd-button-hairline')).toBe(true);
  })

  it('disabled', () => {
    const wrapper = mount(KddButton, {
      propsData: {
        disabled: true
      }
    });
    expect(wrapper.classes('kd-button-disabled')).toBe(true);
  })

  it('square', () => {
    const wrapper = mount(KddButton, {
      propsData: {
        square: true
      }
    });
    expect(wrapper.classes('kd-button-square')).toBe(true);
  })
  
  it('round', () => {
    const wrapper = mount(KddButton, {
      propsData: {
        round: true
      }
    });
    expect(wrapper.classes('kd-button-round')).toBe(true);
  })

  it('block', () => {
    const wrapper = mount(KddButton, {
      propsData: {
        block: true
      }
    });
    expect(wrapper.classes('kd-button-block')).toBe(true);
  })

  it("slots", () => {
    const wrapper = mount(KddButton, {
      slots: {
        default: '测试按钮',
      }
    });
    expect(wrapper.find('button').text()).toContain('测试按钮')
    
  })

  it('click', () => {
    const wrapper = mount(KddButton);
    /**
     * wrapper.emitted() 返回一个对象，包含组件发出的所有时间
     * 返回的格式大概是这样：{"click":[[{"isTrusted":false}]]}
     * 必须要有事件触发才能使用
     */
    
    wrapper.find('button').trigger("click");
    expect(wrapper.emitted('click')).toBeTruthy();
  })
})