<template lang="pug">
  .wrapper
    headerComp
    router-view
</template>


<script>
  import header from "./components/header.vue"
  import addwork from "./components/addwork.vue"
  import addreviews from "./components/addreviews.vue"
  import login from "./components/login.vue"
  import about from "./components/about.vue"


  export default {
    name: 'app',
    components: {
      headerComp: header,
      aboutComp: about,
      addworkComp: addwork,
      addreviewsComp: addreviews,
    },
    data() {
      return {
        
      }
    }
  }

  </script>
















<style lang="postcss" scoped>

@import "../styles/main.pcss";

  .wrapper {

  }
  .container {
    width: 1200px;
    margin: 0 auto;
    @include tablets() {
      width: 768px;
      padding: 0 30px;
    @include phones() {
      width: 320px;
      padding: 0px 0px;
    }
    }
  }
  .body {
    padding: 0;
    margin: 0px;
  }
  </style>

