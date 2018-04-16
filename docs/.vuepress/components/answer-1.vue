<template>
  <p>
    <slot v-if="show"></slot>
    <button @click="showAnswer">{{!show?'显示':'隐藏'}}答案</button>
  </p>
</template>

<script>
export default {
  data() {
    return {
      show: false
    };
  },
  methods: {
    showAnswer() {
      this.show = !this.show;
    }
  }
};
</script>
