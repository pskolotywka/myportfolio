<template lang="pug">
  section.admin__about
    .container
      .admin__about-title-btn
        h4.admin__about-title Блок «Обо мне»
        button.admin__about-btn-add(type="button") Добавить группу
      ul.admin__about-dev
        li.admin__about-dev-item(v-for="item in groupsData")
          aboutGroupAddComp(
            @addGroups="addGroups"
            :skillsData="skillsData"
            :item="item"
          )
          aboutListComp(
            :skillsData="skillsData"
            @removeSkills="removeSkills"
            @addGrp="addGrp"
          )
          aboutInpComp(
            @addSkills="addSkills"
          )
</template>

<script>
  import aboutGroupAdd from "./about-input-groups.vue"
  import aboutInput from "./about-input.vue"
  import aboutList from "./about-list.vue"

   export default {
    name: 'app',
    components: {
      aboutGroupAddComp: aboutGroupAdd,
      aboutInpComp: aboutInput,
      aboutListComp: aboutList,
    },
    data() {
      return {
        skillsData: [],
        groupsData: [
          {

          },
        ]
      }
    },
    methods: {
      addSkills(skills) {
        this.skillsData.push(skills)
      },
      removeSkills(itemId) {
        this.skillsData = this.skillsData.filter(item => item.id != itemId)
      },
      addGrp(item) {
        this.groupsData.push(item)
      },
      addGroups(groups) {
        this.groupsData.push(groups)
      }
    }
  }

</script>



<style lang="postcss">

@import "../../styles/main.pcss";

    .admin__about {
      width: 100%;
      padding: 0 60px;
      padding-top: 129px;
    @include tablets() {
      padding: 0 0;
      padding-top: 125px;
    }
  }
  .admin__about-title-btn {
    @include desktop() {
      display: flex;
      margin-bottom: 61px;
    @include phones() {
      flex-direction: column;
      padding-left: 30px;
      align-items: left;
    }
    }
    
    
  }
  .admin__about-title {
    color: #414c63;
    font-family: "Open Sans";
    font-size: 21px;
    font-weight: 700;
  }
  .admin__about-btn-add {
    display: inline-block;
    background-color: transparent;
    font-family: "Open Sans";
    border: none;
    color: #383bcf;
    font-size: 16px;
    font-weight: 700;
    margin-left: 82px;
    position: relative;
    @include phones() {
      margin-left: 30px;
      margin-top: 30px;
      width: 57%;
    }
  }
  .admin__about-btn-add:before {
    content: '+';
    width: 21px;
    height: 21px;
    color: #ffffff;
    font-family: "Open Sans - Semibold";
    font-size: 15px;
    font-weight: 400;
    background-image: linear-gradient(to right, #006aed 0%, #3f35cb 100%);
    position: absolute;
    left: -27px;
    display: flex;
    border-radius: 50%;
    align-items: center;
    justify-content: center;
  }
  .admin__about-dev {
    display: flex;
    flex-flow: wrap;
    @include tablets() {
      justify-content: space-between;

    }
    
  }
  .admin__about-dev-item {
    padding: 5px 30px;
    width: 525px;
    height: 387px;
    box-shadow: 4px 3px 20px rgba(0, 0, 0, 0.07);
    background-color: #ffffff;
    margin-right: 32px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    padding-bottom: 33px;
    margin-bottom: 30px;
    @include tablets() {
      width: 49%;
      margin-right: 0px;
    @include phones() {
      width: 100%;
      margin-right: 0px;
      padding: 10px 0px;
    }
    }
  }
  .admin__about-dev-item:last-child {
    margin-right: 0px;
  }
  
  
  
</style>