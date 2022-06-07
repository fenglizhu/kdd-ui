import { mount } from '@vue/test-utils';
import KddPicture from "@/packages/kdd-picture/src/kdd-picture";

describe('kdd-picture.test.js', () =>{

  it('pictures', () => {
    const wrapper = mount(KddPicture, {
      propsData: {
        pictures: [
          'https://s2.loli.net/2022/06/07/TqLkAGByRFQc4nl.png',
          'https://s2.loli.net/2022/06/07/JGSjDoHshrAubC2.png',
          'https://s2.loli.net/2022/06/07/r815O2fZQpuY4TB.png',
        ]
      }
    })
    expect(wrapper.find('.kpi-img').exists()).toBe(true);
    // 测试多张图
  });

  it('picture empty', () => {
    const wrapper = mount(KddPicture, {
      propsData: {
        pictures: []
      }
    })
    expect(wrapper.html()).toContain('')
  }) 

  it('radius', () => {
    const wrapper = mount(KddPicture, {
      propsData: {
        radius: true,
        pictures: [
          'https://s2.loli.net/2022/06/07/TqLkAGByRFQc4nl.png',
        ]
      }
    })
    expect(wrapper.classes('kdd-picture-radius')).toBe(true)
  })
})