<template lang="pug">
    .admin__about-dev-block-newskill
        input.admin__about-dev-name-skill(type='text' placeholder="Новый скилл" 
        v-model="skills.name"
        )
        .admin__about-dev-block-value-style
          input.admin__about-dev-value-skill(type='number' value="0" min="0" max="100" placeholder="100" 
          v-model="skills.percent"
          )
          .value-style %
        button.admin__about-dev-addskill(type="button"
        @click="addSkills"
        )
</template>


<script>
let uniqId = 0;
export default {
    data() {
        return {
            skills: {
                id: '0',
                name: "",
                percent: ""
            }
        }
    },
    methods: {
        addSkills() {
            uniqId++;
            this.skills.id = uniqId;
            this.$emit('addSkills', {...this.skills});
            this.skills.name = "";
            this.skills.percent = "";
        }
    }
}
</script>


<style lang="postcss">

@import "../../styles/main.pcss";

.admin__about-dev-block-newskill {
    display: flex;
    justify-content: flex-end;
    align-items: center;
    margin-bottom: 8px;
    @include phones() {
    padding: 0px 30px;
    }
}
.admin__about-dev-name-skill {
    border: 0;
    outline: none;
    background-color: transparent;
    width: 218px;
    border-bottom: 1px solid black;
    margin-right: 10px;
    color: #414c63;
    font-family: "Open Sans";
    font-size: 14px;
    font-weight: 300;
    line-height: 32px;
    padding-left: 10px;
    @include tablets() {
    width: 44%;
    }
}
.admin__about-dev-block-value-style {
    position: relative;
    widows: 88px;
}
.admin__about-dev-value-skill {
    border: 0;
    outline: none;
    background-color: transparent;
    width: 74px;
    border-bottom: 1px solid black;
    margin-right: 30px;
    color: #414c63;
    font-family: "Open Sans";
    font-size: 16px;
    font-weight: 300;
    line-height: 32px;
    position: relative;
    padding-left: 15px;
}
.value-style {
    position: absolute;
    right: 32px;
    top: 9px;
    opacity: 0.7;
    color: #414c63;
    font-family: "Open Sans";
    font-size: 16px;
    font-weight: 400;
    line-height: 32px;
}
.admin__about-dev-value-skill:after {
    content: "%";
    position: absolute;
    right: 0;
    top: 0;

}

.admin__about-dev-addskill {
    width: 40px;
    height: 40px;
    background-color: #ffffff;
    background-image: linear-gradient(to right, #006aed 0%, #3f35cb 100%);
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    position: relative;
}
.admin__about-dev-addskill:before {
    content: '+';
    position: absolute;
    color: #ffffff;
    font-family: "Open Sans";
    font-size: 30px;
    font-weight: 400;
}
.admin__about-dev-value-skill[placeholder]          {
    opacity: 0.5;
    }
.admin__about-dev-skills-block {

}
input.admin__about-dev-input[value] {
    color: black;
    font-family: "Open Sans - Semibold";
    font-size: 18px;
    font-weight: 700;
    line-height: 47px;
}
</style>