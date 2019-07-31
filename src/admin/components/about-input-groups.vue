<template lang="pug">
    .admin__about-dev-block
        input.admin__about-dev-input(type='input' placeholder="Название новой группы" v-model="groups.name")
        pre {{item}}
        .admin__about-dev-buttons
            button.admin__about-dev-ok(type="button" @click="addGroups")
            button.admin__about-dev-no(type="button")
</template>


<script>
let uniqId = 0;
export default {
    props: {
        item: Object
    },
    data() {
        return {
            groups: {
                id: "",
                name: "",
                skillsList: {}
            }
        }
    },
    methods: {
        addGroups() {
            uniqId++;
            this.groups.id = uniqId;
            this.$emit('addGroups', {...this.groups});
            this.groups.name = "";
        },
    }
}


</script>




<style lang="postcss">

@import "../../styles/main.pcss";

.admin__about-dev-block {
    display: flex;
    justify-content: space-between;
    align-items: center;
    position: relative;
    @include phones() {
    padding: 0px 30px;
    }
}
.admin__about-dev-block:after {
    content: '';
    position: absolute;
    bottom: -13px;
    left: -10px;
    width: 485px;
    height: 1px;
    background-color: #1f232d;
    opacity: 0.15;
    @include tablets() {
    width: 105%;
    }
}
.admin__about-dev-input {
    width: 273px;
    border: 0;
    outline: none;
    background-color: transparent;
    color: #414c63;
    font-family: "Open Sans";
    font-size: 18px;
    font-weight: 400;
    line-height: 34px;
    border-bottom: 1px solid black;
    @include tablets() {
    width: 75%;
    border-bottom: 0px;
    }
}
.admin__about-dev-input[placeholder] {
    opacity: 0.51;
}
.admin__about-dev-buttons {
    display: flex;
}
.admin__about-dev-ok {
    background: svg-load('tick.svg', fill=#00d70a, width=100%, height=100%);
    background-repeat: no-repeat;
    background-size: 16px;
    height: 16px;
    width: 20px;
    display: flex;
    justify-content: center;
    align-items: center;
    margin-right: 10px;
}
.admin__about-dev-no {
    height: 16px;
    width: 20px;
    display: flex;
    justify-content: center;
    align-items: center;
    background: svg-load('cross.svg', fill=#bf2929, width=100%, height=100%);
    background-repeat: no-repeat;
    background-size: 16px;
}
</style>