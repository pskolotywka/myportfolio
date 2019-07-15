import Flickity from 'vue-flickity';
 
new Vue({
  components: {
    Flickity
  },
 
  data() {
    return {
      flickityOptions: {
      initialIndex: 3,
      prevNextButtons: false,
      pageDots: false,
      wrapAround: true
 
      }
    }
  },
 
  methods: {
    next() {
      this.$refs.flickity.next();
    },
 
    previous() {
      this.$refs.flickity.previous();
    }
  }
});