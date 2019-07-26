<template lang="pug">
    .login
        .login__content
            h4.login__title Авторизация
            button.login__btn-close
            form(action="post")#login__form
                label.login__form-field
                    .login__form-name-log Логин
                    input.login__form-input-log(type='text' value='terminator_2000')
                    span.login__form-input-style-log
                label.login__form-field
                    .login__form-name-pas Пароль
                    input.login__form-input-pas(type='text' value='***********')
                    span.login__form-input-style-pas
                input(type="submit").login__form-btn-send
</template>

<style lang="postcss">

@import "../../styles/main.pcss";

.login {
    position: fixed;
    align-items: center;
    display: flex;
    justify-content: center;
    z-index: 1000;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background-color: rgba(45,60,78, 0.97);
    
}

.login__content {
    width: 563px;
    height: 517px;
    background-color: #ffffff;
    display: flex;
    justify-content: center;
    align-items: center;
    position: relative;
    flex-direction: column;
    @include phones() {
        width: 100%;
        height: 100%;
    }
}
.login__title {
    color: #414c63;
    font-family: "Open Sans";
    font-size: 36px;
    font-weight: 600;
    line-height: 60px;
}
.login__btn-close {
    width: 30px;
    height: 30px;
    background-color: #414c63;
    position: absolute;
    top: 30px;
    right: 30px;
    background: svg-load('remove.svg', fill=$text-color, width=100%, height=100%);
}
.login__form-field {
    position: relative;
}
.login__form-name-log,
.login__form-name-pas {
    opacity: 0.3;
    color: #414c63;
    font-family: "Open Sans - Semibold";
    font-size: 16px;
    font-weight: 400;
    line-height: 30px;
}
.login__form-input-log,
.login__form-input-pas {
    border: none;
    outline: none;
    color: #414c63;
    background-color: transparent;
    font-family: "Open Sans";
    font-size: 18px;
    font-weight: 700;
    line-height: 48px;
    border-bottom: 1px solid #414c63;
    padding-left: 45px;
    margin-bottom: 40px;
    position: relative;
}
.login__form-input-style-log,
.login__form-input-style-pas {
    position: absolute;
    top: 33%;
    left: 2%;
    background-repeat: no-repeat;
    width: 30px;
    height: 30px;
    opacity: 0.3;
    background: svg-load('user.svg', fill=#414c63, width=100%, height=100%);
}
.login__form-btn-send {
    width: 347px;
    height: 80px;
    border-radius: 40px 5px;
    background-color: #ffffff;
    background-image: linear-gradient(to right, #ad00ed 0%, #5500f2 100%);
    color: #ffffff;
    font-family: "Open Sans";
    font-size: 18px;
    font-weight: 700;
    line-height: 48px;
    text-transform: uppercase;
}

</style>