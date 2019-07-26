<template lang="pug">
  header.admin__header
    .container
      .info__block
        .info__block-avatar
          img(src="../../images/content/ava6.jpg")
        .info__block-name Поддубный Евгений
        .info__block-description Панель Администратора
        a.exit(href="#") Выход
      nav.admin__menu
        ul.admin__menu-list
          li.admin__menu-item.active-item
            a.admin__menu-name(href="#") Обо мне
          li.admin__menu-item
            a.admin__menu-name(href="#") Работы
          li.admin__menu-item
            a.admin__menu-name(href="#") Отзывы
</template>

<style lang="postcss">

@import "../../styles/main.pcss";

.admin__header {
    width: 100%;
    height: 80px;
    background-color: #3e3e59;
    background-image: linear-gradient(to right, #3e3e59 0%, #454573 100%);
    @include phones() {
      padding: 0px 30px;
    }
  }
  .info__block {
    display: flex;
    height: 80px;
    align-items: center;
    padding-left: 60px;
    @include tablets() {
      padding-left: 0px;
    }
  }
  .info__block-avatar {
    width: 44px;
    height: 45px;
    border-radius: 50%;
    overflow: hidden;
  }
  .info__block-name {
    font-family: 'Open Sans';
    color: #ffffff;
    font-size: 18px;
    font-weight: 400;
    margin-left: 22px;
    margin-right: 12px;
  }
  .info__block-description {
    opacity: 0.5;
    color: #ffffff;
    font-family: "Open Sans";
    font-size: 14px;
    font-weight: 400;
    margin-left: 28px;
    @include phones() {
      display: none;
    }
  }
  .exit {
    opacity: 0.7;
    color: #ffffff;
    font-family: "Open Sans";
    font-size: 16px;
    font-weight: 400;
    line-height: 24px;
    text-decoration: underline;
    margin-left: 551px;
    @include tablets() {
      margin-left: 20%;
    @include phones() {
      margin-left: 0%;
    }
    }
  }
  .admin__menu {
    width: 100%;
    height: 77px;
    background-color: #ffffff;
    @include phones() {
      width: 82%;
    }
  }
  .admin__menu-list {
    display: flex;
    height: 100%;
    margin-left: 59px;
    @include tablets() {
      margin-left: 0px;
    }
  }
  .admin__menu-item {
    width: 116px;
    height: 100%;
    border-bottom: 3px solid #383bcf00;
    box-sizing: border-box;
    display: flex;
    justify-content: center;
    align-items: center;
    
  }
  .active-item {
    border-bottom: 3px solid #383bcf;
  }
  .admin__menu-name {
    color: #414c63;
    font-family: "Open Sans";
    font-size: 16px;
    font-weight: 400;
    text-decoration: none;
  }
</style>