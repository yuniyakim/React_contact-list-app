# Тестовое задание [![Build Status](https://app.travis-ci.com/yuniyakim/React_contact-list-app.svg?branch=main)](https://app.travis-ci.com/yuniyakim/React_contact-list-app)

## Getting started

To start the application, in the project directory run:
```cmd
npm run dev
```

### Node version

This app was created using Node v16.14.2.

## Основное задание

Необходимо написать приложение личный кабинет.

В приложении должно быть две страницы:
1. Страница входа
2. Страница со списком контактов
Оформление и данные для заполнения страниц на усмотрение кандидата.

Обязательно наличие информации в readme о том, как запускать приложение. Так же необходимо указать версию node (узнать можно с помощью команды node -v)

Для выполнения тестового задания Вы можете использовать UI фреймворк.
Задание необходимо выполнить на TypeScript, без использования any и ts-ignore.
При выполнении работы обязательно использовать стейт менеджер (redux, mobx)

Время на выполнение тестового задания не ограничено.

## Страница входа

Для реализации авторизации можно использовать запросы с моковыми данными https://github.com/typicode/json-server.

## Страница со списком контактов

Страница со списком контактов пользователя должна быть доступна только после авторизации.
На странице со списком контактов должна быть возможность добавлять/удалять/редактировать контакты, а также желательно наличие функции поиска.
