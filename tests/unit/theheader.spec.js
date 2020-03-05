import { mount, shallowMount } from '@vue/test-utils';
import TheHeader from '@/components/TheHeader.vue';
import ChildComponent from '@/components/Child.vue';
import ParentComponent from '@/components/Parent.vue';

describe('Componente TheHeader.vue', () => {
  const wrapper = mount(TheHeader);
  it('Comprobamos si el test funciona', () => {
    expect(true).toBeTruthy();
  });
  it('El componente se ha pintado', () => {
    expect(wrapper.vm.$refs.menu).not.toBeUndefined();
  });
  it('Comprobamos que el título se esta pintando', () => {
    wrapper.setProps({ title: 'Menú APP' });
    expect(wrapper.html().includes('Menú APP')).toBeTruthy();
  });
});

describe('Probamos las dos formas de montar componentes', () => {
  describe('Comprobamos el componente hijo', () => {
    // const wrapperMount = mount(ChildComponent);
    // const wrapperShallowMount = shallowMount(ChildComponent);
    it('Mount child', () => {
      // console.log('Mount child');
      // console.log(wrapperMount.html());
    });
    it('shallowMount child', () => {
      // console.log('shallowMount child');
      // console.log(wrapperShallowMount.html());
    });
  });
  describe('Comprobamos el componente padre', () => {
    // const wrapperMount = mount(ParentComponent);
    // const wrapperShallowMount = shallowMount(ParentComponent);
    it('Mount Parent', () => {
      // console.log('Mount Parent');
      // console.log(wrapperMount.html());
    });
    it('shallowMount Parent', () => {
      // console.log('shallowMount Parent');
      // console.log(wrapperShallowMount.html());
    });
  });
});

describe('Montamos los componentes modificando las propiedades', () => {
  it('Mount Parent con las nuevas propiedades usando propsData', () => {
    const wrapperMount = mount(ParentComponent, {
      propsData: {
        message: 'Mensaje prueba jest / vue-test-utils',
      },
    });
    expect(wrapperMount.find('ul li:nth-of-type(2)').text()).toBe('message: Mensaje prueba jest / vue-test-utils');
  });
  it('Mount Parent usando setProps', () => {
    const wrapperMount = mount(ParentComponent);
    wrapperMount.setProps({ message: 'Mensaje prueba jest / vue-test-utils' });
    expect(wrapperMount.find('ul li:nth-of-type(2)').text()).toBe('message: Mensaje prueba jest / vue-test-utils');
  });
});

describe('Probando las propiedades computadas', () => {
  it('Probamos las propiedades computadas', () => {
    const wrapperMount = mount(ParentComponent);
    expect(wrapperMount.find('ul li:nth-of-type(3)').text()).toBe('Propiedad computada:');
    wrapperMount.setProps({ message: 'vue-test-utils' });
    expect(wrapperMount.find('ul li:nth-of-type(2)').text()).toBe('message: vue-test-utils');
    expect(wrapperMount.find('ul li:nth-of-type(3)').text()).toBe('Propiedad computada: vue-test-utils');
    // Propiedad computada
    expect(wrapperMount.vm.propComputed).toBe('Propiedad computada: vue-test-utils');
  });
});
