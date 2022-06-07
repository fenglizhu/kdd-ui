import { mount } from '@vue/test-utils';
import KddLink from "@/packages/kdd-link/src/kdd-link";

describe("kdd-link.test.js",()=>{

  it("href", () => {
    const wrapper = mount(KddLink, {
      propsData: {
        href: 'https://www.zhufengli.com'
      }
    });
    expect(wrapper.attributes('href')).toContain('https://www.zhufengli.com')
    expect(wrapper.attributes().href).toContain('https://www.zhufengli.com')
  })

  it('type', () => {
    const wrapper = mount(KddLink, {
      propsData: {
        type: 'primary'
      }
    });
    expect(wrapper.classes('kdd-link-primary')).toBe(true);
  })

  it('underline', () => {
    const wrapper = mount(KddLink, {
      propsData:{
        underline: false
      }
    })
    expect(wrapper.classes('kdd-link-underline')).toBe(false);
  })

  it('slots', () =>{
    const wrapper = mount(KddLink, {
      slots:{
        default: '正常连接文案'
      }
    })
    expect(wrapper.find('a').text()).toContain('正常连接文案')

  }) 
})