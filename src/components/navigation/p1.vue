<template>
  <div>
    <h1>Página 1</h1>
    <ul>
      <li><input v-model="data1" placeholder="Data1" /></li>
      <li><input v-model="data2" placeholder="Data2" /></li>
      <li><input v-model="data3" placeholder="Data3" /></li>
      <li><input v-model="data4" placeholder="Data4" /></li>
      <li><input v-model="data5" placeholder="Data5" /></li>
    </ul>
  </div>
</template>
<script>
export default {
  name: 'Page1',
  data() {
    return {
      form: {
        data1: '',
        data2: '',
        data3: '',
        data4: '',
        data5: '',
      },
    };
  },
};
</script>
