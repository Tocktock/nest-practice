<p align="center">
  <a href="http://nestjs.com/" target="blank"><img src="https://nestjs.com/img/logo_text.svg" width="320" alt="Nest Logo" /></a>
</p>

## Description

This repository shows how to use nest fundamental functions.
We will complete blog backend system with nestjs, postgresql etc.

## What we will make

- [x] CRUD
- [ ] DataBase
- [ ] OAuth and Auth
- [ ] Messaging Queue

## Installation

```bash
$ git clone https://github.com/Tocktock/nest-practice
$ cd nest-practice
$ npm install
```

## Running the app

```bash
# development
$ npm run start

# watch mode
$ npm run start:dev

# production mode
$ npm run start:prod
```

## Test

```bash
# unit tests
$ npm run test

# e2e tests
$ npm run test:e2e

# test coverage
$ npm run test:cov
```

## Requirement (2021.01.13)

### User

- Create user process need email, username and password.
- Password should be hashed.
- User can create through Oauth (kakao, google etc...)
- User has avatar image.
- User has multiple favorite blog posts.
- User can leave comment on post.
- User can share post's link or something.
- User can change his password or username.
- User can delete an account.
- One to many relation is needed with Post, Comment.
- Many to many relation is needed with favorite

### Post

- Post need category, title, description, content, date.
- Many to one relation is needed with User.
- One to many relation is needed with Comment.
- full text search is needed for this.

### Comment

- Comment need author, date, content.
- Author can change content.
- Author can delete content.
- Reply can be added.
- Many to One relation is needed with User, Post.
