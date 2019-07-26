<template lang="pug">
  .wrapper
    router-view
    header.admin__header
      .container
        .info__block
          .info__block-avatar
            img(src="../images/content/ava6.jpg")
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
    section.admin__about
      .container
        
    section.addwork
      .container
        .addwork__content
          h5.addwork__title.admin__about-title Блок «Работы»
          .addwork__block-edit
            h4.addwork__block-edit-title Редактирование работы
            .addwork__block-edit-container
              .addwork__onload-block
                .addwork__onload-info Перетащите или загрузите для загрузки изображения
                button.addwork__onload-button(type="button") Загрузить
              form(action="POST")#form
                label.form__field
                  .form__fied-name Название
                  input.form__field-input(type="input" value="Дизайн сайта для авто салона Porsche")
                label.form__field
                  .form__fied-name Ссылка
                  input.form__field-input(type="input" value="https://www.porsche-pulkovo.ru")
                label.form__description
                  .form__fied-name Описание
                  textarea.form__description-input(type="text" value="Порше Центр Пулково - является официальным дилером марки Порше в Санкт-Петербурге и предоставляет полный цикл услуг по продаже и сервисному обслуживанию автомобилей")
                label.form__field
                  .form__fied-name Добавления тега
                  input.form__field-input(type="input" )
                ul.form__tags-list
                  li.form__tags-item HTML
                    button.form__tags-item-close(type="button")
                  li.form__tags-item CSS
                    button.form__tags-item-close(type="button")
                  li.form__tags-item Javascript
                    button.form__tags-item-close(type="button")
                .form__controls
                  button.form__cancel-btn(type="button") Отмена
                  button.form__download-btn(type="button") Сохранить
          .addwork__preview
            .addwork__preview-add
              .addwork__preview-style +
              .addwork__preview-text Добавить работу
            ul.addwork__preview-list
              li.addwork__preview-item
                .addwork__preview-image-tags
                  img.addwork__preview-image(src="../images/content/1.jpg")
                  ul.addwork__preview-image-tags-list
                    li.addwork__preview-image-tags-item html
                    li.addwork__preview-image-tags-item css
                    li.addwork__preview-image-tags-item javascript
                .addwork__preview-edit-block
                  .addwork__preview-edit-block-name Сайт школы образования
                  .addwork__preview-edit-block-description Этот парень проходил обучение веб-разработке не где-то, а в LoftSchool! 4,5 месяца только самых тяжелых испытаний и бессонных ночей!
                  a.addwork__preview-edit-block-link(href="#") http://loftschool.ru
                  .addwork__preview-edit-block-controls
                    button.addwork__preview-edit(type="button") Править
                    button.addwork__preview-delete(type="button") Удалить
    section.addreviews
      .container
        h5.addreviews__title Блок «Отзывы»
        form(action="POST")#reviews__form
          h4.addreviews__block-newreview-title.addwork__block-edit-title Новый отзыв
          .form__load-block
            .form__load-photo
              .form__load-photo-style
                img.form__load-image(src="../images/content/man-user.png")
              button.form__load-photo-btn(type="button") Добавить фото
            .form__load-fields-block
              .form__load-row
                label.form__load-field
                  .form__load-field-name Имя автора
                  input.form__load-field-input(type="input" placeholder="Поддубный Евгений")
                label.form__load-field
                  .form__load-field-name Титул автора
                  input.form__load-field-input(type="input" placeholder="Ученик Loftschool")
              .form__load-comment
                .form__load-comment-name.form__load-field-name Отзыв
                textarea.form__load-comment-field(type="text" value="Этот парень проходил обучение веб-разработке не где-то, а в LoftSchool! 4,5 месяца только самых тяжелых испытаний и бессонных ночей!")
              .form__load-controls
                button.form__cancel-butn.form__cancel-btn(type="button") Отмена
                button.form__cancel-download.form__download-btn(type="button") Сохранить
        .addreviews__preview
          .addreviews__preview-add
            .addreviews__preview-style.addwork__preview-style +
            .addreviews__preview-text Добавить работу
          ul.addreviews__preview-list
            li.addreviews__preview-item
              .addreviews__preview-about
                .addreviews__preview-photo
                .addreviews__preview-description
                  .addreviews__preview-name Владимир Сабанцев
                  .addreviews__preview-position Преподаватель
              .addreviews__preview-description-text Этот код выдержит любые испытания. Только пожалуйста, не загружайте сайт на слишком старых браузерах
              .addreviews__preview-controls.addwork__preview-edit-block-controls
                button.addreviews__preview-btn-edit.addwork__preview-edit(type="button") Править
                button.addreviews__preview-btn-delete.addwork__preview-delete(type="button") Удалить
    



</template>

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




  .addwork {
    height: 100%;
    padding: 130px 60px 0px 60px;
    @include tablets() {
      padding: 125px 0px 0px 0px;
    }
  }
  .addwork__title {
    margin-bottom: 60px;
    @include phones() {
      padding: 0px 30px;
    }
  }
  .addwork__block-edit {
    height: 775px;
    box-shadow: 4px 3px 20px rgba(0, 0, 0, 0.07);
    background-color: #ffffff;
    padding: 21px 30px;
    margin-bottom: 30px;
    @include tablets() {
      height: 100%;
    }
  }
  .addwork__block-edit-title {
    color: #414c63;
    font-family: "Open Sans";
    font-size: 18px;
    font-weight: 700;
    position: relative;
    margin-bottom: 74px;
  }
  .addwork__block-edit-title:after {
    content: '';
    position: absolute;
    bottom: -26px;
    left: -11px;
    width: 1041px;
    height: 1px;
    background-color: #1f232d;
    opacity: 0.4;
    @include tablets() {
      width: 103%;
    }
  }
  .addwork__block-edit-container {
    display: flex;
    @include tablets() {
      flex-direction: column;
    }
  }
  .addwork__onload-block {
    width: 50%;
    height: 276px;
    border: 1px dashed #a1a1a1;
    background-color: #dee4ed;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    margin-right: 28px;
    @include tablets() {
      width: 100%;
    }
  }
  .addwork__onload-info {
    width: 219px;
    opacity: 0.5;
    color: #414c63;
    font-family: "Open Sans";
    font-size: 16px;
    font-weight: 400;
    text-align: center;
    line-height: 33.89px;
    margin-bottom: 27px;
  }
  .addwork__onload-button {
    display: flex;
    align-items: center;
    justify-content: center;
    color: #ffffff;
    font-family: "Open Sans";
    font-size: 16px;
    font-weight: 700;
    text-transform: uppercase;
    width: 181px;
    height: 50px;
    border-radius: 25px;
    background-color: #ffffff;
    background-image: linear-gradient(to right, #006aed 0%, #3f35cb 100%);
  }

  #form {
    width: 50%;
    @include tablets() {
      width: 100%;
      margin-top: 54px;
    }
  }
  .form__fied-name {
    opacity: 0.5;
    color: #414c63;
    font-family: "Open Sans";
    font-size: 16px;
    font-weight: 700;
  }
  .form__field-input {
    width: 100%;
    height: 57px;
    border: 0;
    outline: none;
    background-color: transparent;
    color: #414c63;
    font-family: "Open Sans";
    font-size: 18px;
    font-weight: 400;
    line-height: 34px;
    border-bottom: 1px solid rgba(0, 0, 0, 0.486);
    margin-bottom: 17px;
  }
  .form__description-input {
    min-height: auto;
    resize: none;
    width: 495px;
    height: 146px;
    border: 1px solid #414c634d;
    outline: none;
    color: #414c63;
    font-family: "Open Sans";
    font-size: 16px;
    font-weight: 600;
    line-height: 30px;
    padding: 16px;
    margin-bottom: 27px;
    @include phones() {
      width: 100%;
      margin-top: 15px;
    }
  }
  .form__tags-list {
    display: flex;
    margin-bottom: 40px;
    @include phones() {
      flex-flow: wrap;
    }
  }
  .form__tags-item {
    border-radius: 15px;
    background-color: #f4f4f4;
    padding: 8px 13px;
    color: #283340b4;
    font-family: "Open Sans";
    font-size: 13px;
    font-weight: 600;
    text-transform: uppercase;
    margin-right: 12px;
    @include phones() {
      display: flex;
      align-items: center;
      margin-bottom: 10px;
    }
  }
  .form__tags-item:last-child {
    margin-right: 0px;
  }
  .form__tags-item-close {
    width: 12px;
    height: 12px;
    border: none;
    background-color: transparent;
    background-repeat: no-repeat;
    font-size: 16px;
    background: svg-load('remove.svg', fill=black, width=100%, height=100%);
    margin-left: 5px;
    opacity: 0.7;
  }
  .form__controls {
    display: flex;
    align-items: center;
    justify-content: flex-end;
  }
  .form__cancel-btn {
    color: #383bcf;
    font-family: "Open Sans";
    font-size: 16px;
    font-weight: 700;
    line-height: 33.89px;
    margin-right: 60px;
  }
  .form__download-btn {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 181px;
    height: 60px;
    border-radius: 30px;
    background-color: #ffffff;
    background-image: linear-gradient(to right, #006aed 0%, #3f35cb 100%);
    color: #ffffff;
    font-family: "Open Sans";
    font-size: 16px;
    font-weight: 700;
    line-height: 48px;
    text-transform: uppercase;
  }
  .addwork__preview {
    height: 100%;
    display: flex;
    @include phones() {
      flex-direction: column;
    }
  }
  .addwork__preview-add {
    cursor: pointer;
    width: 340px;
    height: 556px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    background-color: #ffffff;
    background-image: linear-gradient(to right, #006aed 0%, #3f35cb 100%);
    margin-bottom: 30px;
    margin-right: 30px;
    @include phones() {
      flex-direction: row;
      padding: 30px;
      height: 100%;
    }
  }
  .addwork__preview-style {
    width: 150px;
    height: 150px;
    border: 2px solid #ffffff;
    border-radius: 50%;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 68px;
    color: white;
    background-repeat: no-repeat;
    margin-bottom: 22px;
    @include phones() {
      width: 50px;
      height: 50px;
      font-size: 32px;
      margin-bottom: 0px;
    }
  }
  .addwork__preview-text {
    width: 93px;
    color: #ffffff;
    font-family: "Open Sans";
    text-align: center;
    font-size: 18px;
    font-weight: 700;
    line-height: 30px;
    @include phones() {
      width: 69%;
    }
  }
  .addwork__preview-list {
    display: flex;
    flex-flow: wrap;
    
  }
  .addwork__preview-item {
    width: 340px;
    background-color: #ffffff;
    box-shadow: 4px 3px 20px rgba(0, 0, 0, 0.07);
    margin-bottom: 30px;
  }
  .addwork__preview-image-tags {
    height: 190px;
    width: 100%;
    position: relative;
    overflow: hidden;
  }
  .addwork__preview-image {
  }
  .addwork__preview-image-tags-list {
    position: absolute;
    right: 10px;
    bottom: 10px;
    display: flex;
  }
  .addwork__preview-image-tags-item {
    color: #283340b0;
    font-family: "Open Sans - Semibold";
    font-size: 13px;
    font-weight: 400;
    background-color: white;
    border-radius: 15px;
    text-transform: uppercase;
    padding: 8px 12px;
    margin-right: 10px;
    font-family: "Open Sans";
    font-size: 13px;
    font-weight: 600;
  }
  .addwork__preview-image-tags-item:last-child {
    margin-right: 0px;
  }
  .addwork__preview-edit-block {
    width: 100%;
    padding: 30px 30px;
  }
  .addwork__preview-edit-block-name {
    color: #414c63;
    font-family: "Open Sans";
    font-size: 18px;
    font-weight: 700;
    margin-bottom: 18px;
  }
  .addwork__preview-edit-block-description {
    color: #414c63b0;
    font-family: "Open Sans";
    font-size: 16px;
    font-weight: 400;
    line-height: 30px;
    margin-bottom: 30px;
  }
  .addwork__preview-edit-block-link {
    color: #383bcf;
    font-family: "Open Sans";
    font-size: 16px;
    font-weight: 600;
    line-height: 30px;
    margin-bottom: 31px;
    display: block;
  }
  .addwork__preview-edit-block-controls {
    display: flex;
    justify-content: space-between;
  }
  .addwork__preview-edit,
  .addwork__preview-delete {
    color: #414c638c;
    font-family: "Open Sans";
    font-size: 16px;
    font-weight: 400;
    line-height: 30px;
    border: none;
    background-color: transparent;
    display: flex;
    align-items: center;
  }
  .addwork__preview-edit:after {
    content: svg-load('pencil.svg', fill=#383bcf, width=17px, height=17px);
    height: 25px;
    margin-left: 11px;
  }
  .addwork__preview-delete:after {
    content: svg-load('cross.svg', fill=#383bcf, width=15px, height=15px);
    height: 27px;
    margin-left: 11px;
  }




  .addreviews {
    padding: 130px 60px;
    margin-bottom: 30px;
    @include tablets() {
      padding: 130px 0px 0px 0px;
    }
  }
  .addreviews__title {
    color: #414c63;
    font-family: "Open Sans";
    font-size: 21px;
    font-weight: 700;
    margin-bottom: 61px;
    @include phones() {
      padding: 0px 30px;
    }
  }
  #reviews__form {
    width: 1080px;
    height: 512px;
    box-shadow: 4px 3px 20px rgba(0, 0, 0, 0.07);
    background-color: #ffffff;
    padding: 19px 30px;
    margin-bottom: 30px;
    @include tablets() {
      width: 100%;
      height: 100%;
    }
  }
  .form__load-block {
    display: flex;
    @include phones() {
      flex-direction: column;
    }

  }
  .form__load-photo {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    margin-right: 32px;
    padding-bottom: 99px;
    @include phones() {
      margin-right: 0px;
    }
  }
  .form__load-photo-style {
    width: 200px;
    height: 200px;
    background-color: #dee4ed;
    border-radius: 50%;
    display: flex;
    justify-content: center;
    align-items: center;
    margin-bottom: 27px;
  }
  .form__load-photo-btn {
    border: none;
    background-color: transparent;
    color: #383bcf;
    font-family: "Open Sans";
    font-size: 16px;
    font-weight: 700;
  }
  .form__load-fields-block {

  }
  .form__load-row {
    display: flex;
    @include tablets() {
      flex-direction: column;
    }
  }
  .form__load-field {
    margin-right: 30px;
  }
  .form__load-field:last-child {
    margin-right: 0px;
  }
  .form__load-field-name {
    opacity: 0.5;
    color: #414c63;
    font-family: "Open Sans";
    font-size: 16px;
    font-weight: 600;
  }
  .form__load-field-input {
    width: 290px;
    border: 0;
    outline: none;
    background-color: transparent;
    color: #414c63;
    font-family: "Open Sans";
    font-size: 18px;
    font-weight: 400;
    line-height: 34px;
    border-bottom: 1px solid black;
    margin-bottom: 33px;
    @include phones() {
      width: 100%;
    }
  }
  .form__load-comment-name {
    margin-bottom: 15px;
  }
  .form__load-comment-field {
    width: 611px;
    height: 116px;
    border: 1px solid #414c6346;
    outline: none;
    padding: 8px 20px;
    color: #414c63;
    font-family: "Open Sans";
    font-size: 16px;
    font-weight: 600;
    line-height: 30px;
    @include tablets() {
      width: 100%;
    @include phones() {
      width: 100%;
    }
    }
  }
  .form__load-controls {
    display: flex;
    justify-content: flex-end;
    margin-top: 23px;
  }
  .addreviews__preview {
    display: flex;
    @include phones() {
      flex-direction: column;
    }
  }
  .addreviews__preview-add {
    cursor: pointer;
    width: 340px;
    height: 380px;
    background-color: #ffffff;
    background-image: linear-gradient(to right, #006aed 0%, #3f35cb 100%);
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    margin-right: 30px;
    @include phones() {
      height: 100%;
      flex-direction: row;
      padding: 30px;
      margin-bottom: 30px;
      
    }
  }
  .addreviews__preview-text {
    width: 93px;
    color: #ffffff;
    font-family: "Open Sans";
    font-size: 18px;
    font-weight: 700;
    line-height: 30px;
    text-align: center;
    @include phones() {
      width: 69%;
    }
  }
  .addreviews__preview-list {
    display: flex;
    flex-flow: wrap;
  }
  .addreviews__preview-item {
    width: 340px;
    height: 380px;
    box-shadow: 4px 3px 20px rgba(0, 0, 0, 0.07);
    background-color: #ffffff;
    padding: 30px;
    @include phones() {
      margin-bottom: 30px;
    }
  }
  .addreviews__preview-about {
    display: flex;
    height: 81px;
    border-bottom: 1px solid rgba(0, 0, 0, 0.363);
    margin-bottom: 21px;
  }
  .addreviews__preview-photo {
    background: url('../images/content/ava2.jpg');
    object-fit: contain;
    background-position: 49% 0%;
    background-size: 60px;
    width: 50px;
    height: 50px;
    border-radius: 50%;
    overflow:hidden;
    margin-right: 20px;
  }
  .addreviews__preview-name {
    color: #414c63;
    font-family: "Open Sans";
    font-size: 18px;
    font-weight: 700;
  }
  .addreviews__preview-position {
    opacity: 0.5;
    color: #414c63;
    font-family: "Open Sans";
    font-size: 16px;
    font-weight: 400;
  }
  .addreviews__preview-description-text {
    opacity: 0.7;
    color: #414c63;
    font-family: "Open Sans";
    font-size: 16px;
    font-weight: 400;
    line-height: 30px;
    margin-bottom: 74px;
  }
  .addreviews__preview-btn-delete {
    content: svg-load('cross.svg', fill=red, width=15px, height=15px);
  }

  </style>

