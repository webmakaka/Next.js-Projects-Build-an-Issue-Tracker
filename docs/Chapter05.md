# [Laith Harb] The Next.js 13 Bootcamp - The Complete Developer Guide [ENG, 2023]

<br/>

## [05. Updating Issues](https://github.com/webmakaka/Next.js-Projects-Build-an-Issue-Tracker/pull/4)

<br/>

### 01. Adding the Edit Button

https://www.radix-ui.com/icons

<br/>

```
$ npm i @radix-ui/react-icons
```

<br/>

![Application](/img/pic-ch05-img01.png?raw=true)

<br/>

### 02. Applying the Single Responsibility Principle

<br/>

### 03. Building the Edit Issue Page

<br/>

![Application](/img/pic-ch05-img02.png?raw=true)

<br/>

### 04. Building an API

<br/>

```
// PATCH
// OK!
$ curl \
    --data '{
      "title":"Bug 1+",
      "description":"Description of Bug 1+"}' \
    --header "Content-Type: application/json" \
    --request PATCH \
    --url http://localhost:3000/api/issues/2 \
    | jq
```

<br/>

**response**

```json
{
  "id": 2,
  "title": "Bug 1+",
  "description": "Description of Bug 1+",
  "status": "OPEN",
  "createdAt": "2023-11-05T18:46:53.341Z",
  "updatedAt": "2023-11-08T01:53:04.072Z"
}
```

<br/>

### 05. Updating Issues

<br/>

### 06. Understanding Caching

<br/>

### 07. Improving the Loading Experience

<br/>

---

<br/>

**Marley**

Any questions in english: <a href="https://jsdev.org/chat/">Telegram Chat</a>  
Любые вопросы на русском: <a href="https://jsdev.ru/chat/">Телеграм чат</a>
