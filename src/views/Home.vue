<template>
  <div class="home">
    <hr />
    <the-header/>
    <hr />
    <input type="text" v-model="valueParent" placeholder="Texto padre">
    <hr />
    <child-component />
    <hr />
    <parent-component :message="valueParent" />
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
    };
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
</style>
