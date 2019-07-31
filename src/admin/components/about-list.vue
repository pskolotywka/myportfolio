<template lang="pug">
    ul.admin__about-dev-skills-list
        li.admin__about-dev-skills-item(
            v-for="item in skillsData"
        )
          aboutItemComp(
            :item="item"
            @removeSkills="removeSkills"
            @addGrp="addGrp"
          )
            

</template>

<script>

import aboutItem from "./about-item.vue";

export default {
  components: {
    aboutItemComp: aboutItem,
  },
  props: {
      skillsData: Array,
  },
  methods: {
      removeSkills(itemId) {
        this.$emit('removeSkills', itemId)
      },
      addGrp(item) {
        this.$emit('addGrp', item)
      }
  }
}

</script>


<style lang="postcss">

@import "../../styles/main.pcss";
    .admin__about-dev-skills-list {
    height: 70%;
    padding-top: 30px;
    @include phones() {
      padding: 30px 30px;
    }
  }
  
</style>