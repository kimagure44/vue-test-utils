<template>
  <div>
    <nav class="menu" ref="menu">
      <ul>
        <li class="selected"><a href="#">Home</a></li>
        <li class="selected"><a href="#">About</a></li>
        <li class="selected"><a href="#">Contact</a></li>
        <li v-text="title"></li>
      </ul>
    </nav>
    <hr />
    <input
      type="text"
      v-model="valueParent"
      placeholder="Texto padre"
      :class="{'error': showError}"
    >
    <button @click="sendData">Enviar</button>
    <div :class="['msnSendData', {'hide': !showModal}]">Datos enviados</div>
  </div>
</template>

<script>
export default {
  name: 'the-header',
  props: {
    title: {
      type: String,
      default: '',
    },
  },
  data() {
    return {
      valueParent: '',
      showModal: false,
      showError: false,
    };
  },
  methods: {
    sendData() {
      if (this.valueParent.length > 0) {
        this.$emit('send-data', { status: true, value: this.valueParent });
        this.showError = false;
        this.showModal = true;
        setTimeout(() => {
          this.showModal = false;
          this.valueParent = '';
          this.$emit('send-data', { status: false, value: this.valueParent });
        }, 2000);
      } else {
        this.showError = true;
      }
    },
  },

};
</script>

<style lang="scss" scoped>
.msnSendData {
  margin: 10px;
  box-shadow: 0 0 10px 1px rgba(0,0,0,.2);
  padding: 10px;
  transition: 180ms ease-in-out;
  opacity: 1;
  width: 200px;
}
.hide {
  opacity: 0;
  transition: 180ms ease-in-out;
}
.error {
  box-shadow: 0 0 10px 4px rgba(255,0,0,.2);
  border: 0;
  padding: 5px;
  margin-right: 10px;
}
input {
  margin-right: 10px;
}
.menu {
  box-shadow: 2px 2px 5px rgba(0,0,0,0.2);
  ul {
    list-style: none;
    background: #333;
    display: flex;
    align-items: center;
    color: white;
    li {
      padding: 10px;
      cursor: pointer;
      &.selected {
        transition: ease-in-out 220ms;
        a {
          color: white;
          display: block;
          text-decoration: none;
        }
        &:hover {
          background: cadetblue;
          color: white;
          transition: ease-in-out 220ms;
        }
      }
    }
  }
}


</style>
