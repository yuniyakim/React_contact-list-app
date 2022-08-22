# Тестовое задание [![Build Status](https://app.travis-ci.com/yuniyakim/React_contact-list-app.svg?branch=master)](https://app.travis-ci.com/yuniyakim/React_contact-list-app)

## Installing

Don't forget to install all the necessary dependencies both in the root directory and *server* folder:
```cmd
cd server && npm install && cd .. && npm install
```


## Getting started

To start the application, in the root directory run:
```cmd
npm run dev
```
**_NOTE:_** Server runs on port 3000 and client runs on port 3001.

### Users

There are two built-in available users:
* User 1

**Email: user@example.com / Password: 12345678**

* User 2

**Email: harrypotter@hp.com / Password: qwerty123**

### Node version

This application was created using Node v16.14.2.

### Server

This application uses [JSON Server](https://github.com/typicode/json-server) for fake REST API and [JSON Server Auth](https://github.com/jeremyben/json-server-auth) for JWT authentication middleware created for JSON Server.


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
