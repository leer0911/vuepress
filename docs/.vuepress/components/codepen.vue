<template>
  <p class="note_blue">
    <strong>Improve this sample solution and post your code through Disqus</strong>
  </p>
</template>
<style>
.sidebar-group-items li {
  height: 30px;
  overflow: hidden;
}
</style>

<script>
export default {
  name: 'codepen',
  mounted() {
    var script = document.createElement('script');
    script.type = 'text/javascript';
    script.src = 'https://production-assets.codepen.io/assets/embed/ei.js';
    document.getElementsByTagName('head')[0].appendChild(script);
  }
};
</script>