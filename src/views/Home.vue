<template>
  <div class="home">
    <hr />
    <the-header @send-data="data" />
    Valor emitido the-header: <b v-text="dataHeader"></b>
    <hr />
    <child-component />
    <hr />
    <parent-component :message="valueParent" />
    <div class="drag"></div>
  </div>
</template>

<script>
import theHeader from '@/components/TheHeader.vue';
import ChildComponent from '@/components/Child.vue';
import ParentComponent from '@/components/Parent.vue';

export default {
  name: 'home',
  data() {
    return {
      valueParent: '',
      dataHeader: '',
    };
  },
  mounted() {
    document.querySelector('.drag').addEventListener('mousemove', (evt) => {
      if (evt.buttons === 1) {
        console.log(evt, evt.button, evt.buttons);
      }
    });
  },
  methods: {
    data(status) {
      this.dataHeader = status;
    },
  },
  components: {
    theHeader,
    ChildComponent,
    ParentComponent,
  },
};
</script>

<style lang="css" scoped>
  .home {
    margin: 10px;
  }
  .drag {
    border: 1px solid #cccccc;
    height: 400px;
  }

</style>
