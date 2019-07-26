<template lang="pug">
  section.admin__about
        .container
          .admin__about-title-btn
            h4.admin__about-title Блок «Обо мне»
            button.admin__about-btn-add(type="button") Добавить группу
          ul.admin__about-dev
            li.admin__about-dev-item
              .admin__about-dev-block
                input.admin__about-dev-input(type='input' placeholder="Название новой группы")
                .admin__about-dev-buttons
                  button.admin__about-dev-ok(type="button")
                  button.admin__about-dev-no(type="button")
              .admin__about-dev-block-newskill
                input.admin__about-dev-name-skill(type='input' placeholder="Новый скилл")
                .admin__about-dev-block-value-style
                  input.admin__about-dev-value-skill(type='input' placeholder="100" )
                  .value-style %
                button.admin__about-dev-addskill(type="button" )
            li.admin__about-dev-item
              .admin__about-dev-block
                input.admin__about-dev-input(type='input' value="Workflow" placeholder="Название группы")
                .admin__about-dev-buttons
                  button.admin__about-dev-ok(type="button")
                  button.admin__about-dev-no(type="button")
              ul.admin__about-dev-skills-list
                li.admin__about-dev-skills-item
                  .admin__about-dev-skills-item-name CSS
                  .admin__about-dev-skills-item-value 30
                  .admin__about-dev-skills-item-controls
                    button.admin__about-dev-skills-item-edit
                    button.admin__about-dev-skills-item-delete
                li.admin__about-dev-skills-item
                  .admin__about-dev-skills-item-name CSS
                  .admin__about-dev-skills-item-value 30
                  button.admin__about-dev-skills-item-edit
                  button.admin__about-dev-skills-item-delete
                li.admin__about-dev-skills-item
                  .admin__about-dev-skills-item-name CSS
                  .admin__about-dev-skills-item-value 30
                  button.admin__about-dev-skills-item-edit
                  button.admin__about-dev-skills-item-delete
              .admin__about-dev-block-newskill
                input.admin__about-dev-name-skill(type='input' placeholder="Новый скилл")
                .admin__about-dev-block-value-style
                  input.admin__about-dev-value-skill(type='input' placeholder="100" )
                  .value-style %
                button.admin__about-dev-addskill(type="button" )
            li.admin__about-dev-item
              .admin__about-dev-block
                input.admin__about-dev-input(type='input' value="Workflow" placeholder="Название группы")
                .admin__about-dev-buttons
                  button.admin__about-dev-ok(type="button")
                  button.admin__about-dev-no(type="button")
              ul.admin__about-dev-skills-list
                li.admin__about-dev-skills-item
                  .admin__about-dev-skills-item-name CSS
                  .admin__about-dev-skills-item-value 30
                  .admin__about-dev-skills-item-controls
                    button.admin__about-dev-skills-item-edit
                    button.admin__about-dev-skills-item-delete
                li.admin__about-dev-skills-item
                  .admin__about-dev-skills-item-name CSS
                  .admin__about-dev-skills-item-value 30
                  button.admin__about-dev-skills-item-edit
                  button.admin__about-dev-skills-item-delete
                li.admin__about-dev-skills-item
                  .admin__about-dev-skills-item-name CSS
                  .admin__about-dev-skills-item-value 30
                  button.admin__about-dev-skills-item-edit
                  button.admin__about-dev-skills-item-delete
              .admin__about-dev-block-newskill
                input.admin__about-dev-name-skill(type='input' placeholder="Новый скилл")
                .admin__about-dev-block-value-style
                  input.admin__about-dev-value-skill(type='input' placeholder="100" )
                  .value-style %
                button.admin__about-dev-addskill(type="button" )
</template>

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
  .admin__about-dev-skills-list {
    height: 70%;
    padding-top: 30px;
    @include phones() {
      padding: 30px 30px;
    }
  }
  .admin__about-dev-skills-item {
    display: flex;
    align-items: center;
    margin-bottom: 25px;
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