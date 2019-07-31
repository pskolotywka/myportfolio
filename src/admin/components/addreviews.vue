<template lang="pug">
  section.addreviews
    .container
      h5.addreviews__title Блок «Отзывы»
      form(action="POST")#reviews__form
        h4.addreviews__block-newreview-title.addwork__block-edit-title Новый отзыв
        .form__load-block
          .form__load-photo
            .form__load-photo-style
              img.form__load-image(src="../../images/content/man-user.png")
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

<style lang="postcss">

@import "../../styles/main.pcss";

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
    background: url('../../images/content/ava2.jpg');
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