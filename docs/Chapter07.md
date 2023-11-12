# [Laith Harb] The Next.js 13 Bootcamp - The Complete Developer Guide [ENG, 2023]

<br/>

## [07. Authentication](https://github.com/webmakaka/Next.js-Projects-Build-an-Issue-Tracker/pull/7)

<br/>

### 01. Setting Up NextAuth

https://next-auth.js.org/configuration/initialization

<br/>

```
$ npm install next-auth
```

<br/>

```
// Generate a secret string
$ openssl rand -base64 32
```

<br/>

### 02. Configuring Google Provider

https://next-auth.js.org/providers/google

https://console.cloud.google.com/apis/credentials?project=apt-signifier-330519

```
New Project -> "My Next App"

CONFIGURE CONSENT SCREEN -> External -> Create

App Name: My Next App

CREATE
```

<br/>

```
ADD OR REMOVE SCOPES

+ userinfo.email
+ userinfo.profile

SAVE AND CONTINUE
```

<br/>

```
Test users

ADD USER

SAVE AND CONTINUE

BACK TO DASHBOARD
```

<br/>

```
Credentials -> Create Credentials -> OAuth client ID
```

<br/>

```
Application type: Web Application

Name: My Next App

Authorized JavaScript origins: http://localhost:3000

Authorized redirect URIs: http://localhost:3000/api/auth/callback/google

CREATE
```

<br/>

### 03. Adding the Prisma Adapter

<br/>

https://authjs.dev/reference/adapter/prisma

<br/>

```
$ npm install @next-auth/prisma-adapter
```

<br/>

```
$ npx prisma migrate dev
✔ Enter a name for the new migration: … [add user models]
```

<br/>

// [OK!]
http://localhost:3000/api/auth/signin

// [OK!]
http://localhost:3000/api/auth/signout

<br/>

### 04. Adding the Login and Logout Links

<br/>

![Application](/img/pic-ch07-img01.png?raw=true)

<br/>

### 05. Change the Layout of the NavBar

<br/>

![Application](/img/pic-ch07-img02.png?raw=true)

<br/>

---

<br/>

**Marley**

Any questions in english: <a href="https://jsdev.org/chat/">Telegram Chat</a>  
Любые вопросы на русском: <a href="https://jsdev.ru/chat/">Телеграм чат</a>
