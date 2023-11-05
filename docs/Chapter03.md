# [Laith Harb] The Next.js 13 Bootcamp - The Complete Developer Guide [ENG, 2023]

<br/>

## [03. Creating Issues](https://github.com/webmakaka/Next.js-Projects-Build-an-Issue-Tracker/pull/1)

<br/>

### 01. Setting Up MySQL

<br/>

### 02. Setting Up Prisma

```
$ npm install prisma
$ npx prisma init
```

<br/>

### 03. Creating the Issue Model

```
$ npx prisma migrate dev
```

```
✔ Enter a name for the new migration: … initial migration
```

<br/>

### 04. Building an API

```
$ npm install zod
```

<br/>

**Best practice for instantiating PrismaClient with Next.js**

https://www.prisma.io/docs/guides/other/troubleshooting-orm/help-articles/nextjs-prisma-client-dev-practices

<br/>

```
// POST
// OK!
$ curl \
    --data '{
      "title":"First issue",
      "description":"Description of the first issue"}' \
    --header "Content-Type: application/json" \
    --request POST \
    --url http://localhost:3000/api/issues \
    | jq
```

<br/>

**response:**

```json
{
  "id": 1,
  "title": "First issue",
  "description": "Description of the first issue",
  "status": "OPEN",
  "createdAt": "2023-11-04T15:38:27.199Z",
  "updatedAt": "2023-11-04T15:38:27.199Z"
}
```

<br/>

### 05. Setting Up Radix UI

https://www.radix-ui.com/

```
$ npm install @radix-ui/themes
```

<br/>

### 06. Building the New Issue Page

<br/>

https://www.radix-ui.com/themes/docs/components/text-field

<br/>

![Application](/img/pic-ch03-img01.png?raw=true)

<br/>

### 07. Customizing Radix UI Theme

https://www.radix-ui.com/themes/docs/theme/typography

<br/>

![Application](/img/pic-ch03-img02.png?raw=true)

<br/>

### 08. Adding a Markdown Editor

https://www.npmjs.com/package/react-simplemde-editor

<br/>

```
$ npm install --save react-simplemde-editor easymde
```

<br/>

![Application](/img/pic-ch03-img03.png?raw=true)

<br/>

### 09. Handling Form Submission

https://react-hook-form.com/

```
$ npm install react-hook-form
$ npm install axios
```

<br/>

### 10. Handling Errors

<br/>

![Application](/img/pic-ch03-img04.png?raw=true)

<br/>

### 11. Implementing Client-side Validation

```
$ npm install @hookform/resolvers
```

<br/>

![Application](/img/pic-ch03-img05.png?raw=true)

<br/>

---

<br/>

**Marley**

Any questions in english: <a href="https://jsdev.org/chat/">Telegram Chat</a>  
Любые вопросы на русском: <a href="https://jsdev.ru/chat/">Телеграм чат</a>
