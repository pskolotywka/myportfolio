<template lang="pug">
  .wrapper
    header.admin__header
      .info__block
        .info__block-avatar
        .info__block-name Поддубный Евгений
        .info__block-description Панель Администратора
        a.exit(href="#") Выход
      nav.admin__menu
        ul.admin__menu-list
          li.admin__menu-item
            a.admin__menu-name(href="#") Обо мне
          li.admin__menu-item
            a.admin__menu-name(href="#") Работы
          li.admin__menu-item
            a.admin__menu-name(href="#") Отзывы
    section.admin__about
      h4.admin__about-title
      ul.admin__about-dev
        li.admin__about-dev-item
          .admin__about-dev-block
            input.admin__about-dev-input(type='input')
            .admin__about-dev-buttons
              button.admin__about-dev-ok(type="button")
              button.admin__about-dev-no(type="button")
          .admin__about-dev-block-newskill
            input.admin__about-dev-name-skill(type='input')
            input.admin__about-dev-value-skill(type='input')
            button.admin__about-dev-addskill(type="button")
        li.admin__about-dev-item
          .admin__about-dev-skills-block
            h6.admin__about-dev-title Frontend
            button.admin__about-dev-skill-butn
          ul.admin__about-dev-skills-list
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
            li.admin__about-dev-skills-item
              .admin__about-dev-skills-item-name CSS
              .admin__about-dev-skills-item-value 30
              button.admin__about-dev-skills-item-edit
              button.admin__about-dev-skills-item-delete
          .admin__about-dev-skills-newskill-block
            input.admin__about-dev-newskill-name(type='input')
            input.admin__about-dev-newskill-value(type='input')
            button.admin__about-dev-newskill-add(type="button")
    section.addwork
      h5.addwork__title Добавление Работы
      .addwork__content
        .addwork__onload-block
          .addwork__onload-info
          button.addwork__onload-button Загрузить
        form(action="POST")#form
          label.form__field
            .form__fied-name Название
            input.form__field-input(type="input")
          label.form__field
            .form__fied-name Ссылка
            input.form__field-input(type="input")
          label.form__description
            .form__fied-name Описание
            textarea.form__description-input
          label.form__field
            .form__fied-name Добавления тега
            input.form__field-input(type="input")
          .form__controls
            button.form__cancel-butn(type="button") Отмена
            button.form__cancel-download(type="button") Загрузить
        .addwork__preview
          .addwork__preview-add
            .addwork__preview-style
            .addwork__preview-text Добавить работу
          ul.addwork__preview-list
            li.addwork__preview-item
              .addwork__preview-image-tags
                img.image
                ul.addwork__preview-image-tags-list
                  li.addwork__preview-image-tags-item
                    .addwork__preview-image-tags-name html
                  li.addwork__preview-image-tags-item
                    .addwork__preview-image-tags-name css
                  li.addwork__preview-image-tags-item
                    .addwork__preview-image-tags-name javascript
              .addwork__preview-edit-block
                .addwork__preview-edit-block-name
                .addwork__preview-edit-block-description
                a.addwork__preview-edit-block-link
                .addwork__preview-edit-block-controls
                  button.addwork__preview-edit(type="button")
                  button.addwork__preview-delete(type="button")
    section.addreviews
      h5.addreviews__title
      form(action="POST")#reviews__form
        .form__load-photo
          button.form__load-photo-btn(type="button")
        .form__load-fields-block
          .form__load-row
            label.form__load-field
              .form__load-field-name
              input.form__load-field-name(type="input")
            label.form__load-field
              .form__load-field-name
              input.form__load-field-title(type="input")
          .form__load-comment
            .form__load-comment-name
            textarea.form__load-comment-field
          .form__load-controls
            button.form__cancel-butn.load(type="button") Отмена
            button.form__cancel-download.load(type="button") Загрузить
      .addreviews__preview
        .addreviews__preview-add
          .addreviews__preview-style
          .addreviews__preview-text Добавить работу
        ul.addreviews__preview-list
          li.addreviews__preview-item
            .addreviews__preview-about
              .addreviews__preview-photo
              .addreviews__preview-description
                .addreviews__preview-name
                .addreviews__preview-


            
          

            
      
          








</template>