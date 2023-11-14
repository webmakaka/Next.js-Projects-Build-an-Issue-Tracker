# [Laith Harb] The Next.js 13 Bootcamp - The Complete Developer Guide [ENG, 2023]

<br/>

## [08. Assigning Issues to Users](https://github.com/webmakaka/Next.js-Projects-Build-an-Issue-Tracker/pull/9)

<br/>

### 01. Building the Assignee Select Component

<br/>

### 02. Populating the Assignee Select Component

http://localhost:3000/api/users

<br/>

### 03. Setting Up React Query

https://tanstack.com/query/latest

<br/>

```
$ npm install @tanstack/react-query
```

<br/>

### 04. Fetching Data with React Query

<br/>

### 05. Add Assigned Issues to Prisma Schema

```
$ npx prisma migrate dev
✔ Enter a name for the new migration: … add assigned issues
```

<br/>

### 06. Implementing the API

<br/>

```
// PATCH
// OK!
$ curl \
    --data '{
      "title":"First issue patched",
      "description":"Description of the first issue patched"}' \
    --header "Content-Type: application/json" \
    --request PATCH \
    --url http://localhost:3000/api/issues/1 \
    | jq
```

<br/>

**response (on comment session check):**

<br/>

```json
{
  "id": 1,
  "title": "First issue patched",
  "description": "Description of the first issue patched",
  "status": "OPEN",
  "createdAt": "2023-11-04T15:38:27.199Z",
  "updatedAt": "2023-11-14T19:49:58.513Z"
}
```

<br/>

```
// PATCH
// FAIL!
$ curl \
    --data '{
      "assignedToUserId": "abcd"}' \
    --header "Content-Type: application/json" \
    --request PATCH \
    --url http://localhost:3000/api/issues/1 \
    | jq
```

<br/>

### 07. Assigning an Issue to a User

<br/>

### 08. Showing Toast Notifications

```
$ npm install react-hot-toast
```

<br/>

---

<br/>

**Marley**

Any questions in english: <a href="https://jsdev.org/chat/">Telegram Chat</a>  
Любые вопросы на русском: <a href="https://jsdev.ru/chat/">Телеграм чат</a>
