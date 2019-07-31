<template lang="pug">
    .admin__about-dev-skills-item
        .admin__about-dev-skills-item-name {{item.name}}
        .admin__about-dev-skills-item-value {{item.percent}}
        .admin__about-dev-skills-item-controls
            button.admin__about-dev-skills-item-edit
            button.admin__about-dev-skills-item-delete(type="button" @click="removeSkills")
</template>


<script>
export default {
  props: {
      item: Object
  },
  methods: {
      removeSkills() {
          this.$emit('removeSkills', this.item.id)
      },
      addGrp() {
          this.$emit('addGrp', this.item)
      }
  }
}
</script>

<style lang="postcss">

@import "../../styles/main.pcss";

.admin__about-dev-skills-item {
    display: flex;
    align-items: center;
    margin-bottom: 25px;
    height: 31px;
}
.admin__about-dev-skills-item:last-child {
    margin-bottom: 0px;
}
.admin__about-dev-skills-item-name {
    color: #414c63;
    font-family: "Open Sans";
    font-size: 16px;
    font-weight: 400;
    line-height: 32px;
    margin-right: 255px;
    @include tablets() {
    margin-right: 81px;
    }
}
.admin__about-dev-skills-item-value {
    color: #414c63;
    font-family: "Open Sans";
    font-size: 16px;
    font-weight: 400;
    line-height: 32px;
    margin-right: 14px;
}
.admin__about-dev-skills-item-value:after {
    content: '%';
    margin-left: 14px;
    margin-right: 61px;
    @include tablets() {
    margin-right: 29px;
    }
}
.admin__about-dev-skills-item-controls {
    display: flex;
}
.admin__about-dev-skills-item-edit {
    width: 15px;
    height: 15px;
    background: svg-load('pencil.svg', fill=#414c63, width=100%, height=100%);
    background-repeat: no-repeat;
    background-size: 16px;
    margin-right: 20px;
}
.admin__about-dev-skills-item-delete {
    width: 18px;
    height: 16px;
    background: svg-load('trash.svg', fill=#414c63, width=100%, height=100%);
    background-repeat: no-repeat;
    background-size: 16px;
}
</style>