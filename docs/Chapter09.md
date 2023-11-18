# [Laith Harb] The Next.js 13 Bootcamp - The Complete Developer Guide [ENG, 2023]

<br/>

## [09. Filtering, Sorting, and Pagination](https://github.com/webmakaka/Next.js-Projects-Build-an-Issue-Tracker/pull/10)

<br/>

### 01. Building the Filter Component

<br/>

### 02. Filtering Issues

<br/>

### 03. Making Columns Sortable

<br/>

### 04. Sorting Issues

<br/>

### 05. Fix Filtering Bugs

<br/>

### 06. Generating Dummy Data

<br/>

```
$ mysql --user=root --password=pA55w0rd123 -h 127.0.0.1 issue-tracker
```

<br/>

```sql
INSERT INTO Issue (title, description, status, createdAt, updatedAt)
VALUES
  ('Website Login Issue 1', 'Users are unable to log in to the website 1', 'OPEN', '2023-09-01 10:00:00', '2023-09-01 12:00:00'),
  ('Monitor shows youtube', 'Cant start working', 'CLOSED', '2023-09-01 10:00:00', '2023-09-01 12:00:00'),
  ('Website Login Issue 3', 'Users are unable to log in to the website 3', 'IN_PROGRESS', '2023-09-01 10:00:00', '2023-09-01 12:00:00'),
  ('Website Login Issue 4', 'Users are unable to log in to the website 4', 'OPEN', '2023-09-01 10:00:00', '2023-09-01 12:00:00'),
  ('Website Login Issue 5', 'Users are unable to log in to the website 5', 'CLOSED', '2023-09-01 10:00:00', '2023-09-01 12:00:00'),
  ('Website Login Issue 6', 'Users are unable to log in to the website 6', 'IN_PROGRESS', '2023-09-01 10:00:00', '2023-09-01 12:00:00'),
  ('Website Login Issue 7', 'Users are unable to log in to the website 7', 'OPEN', '2023-09-01 10:00:00', '2023-09-01 12:00:00'),
  ('Website Login Issue 8', 'Users are unable to log in to the website 8', 'CLOSED', '2023-09-01 10:00:00', '2023-09-01 12:00:00'),
  ('Website Login Issue 9', 'Users are unable to log in to the website 9', 'IN_PROGRESS', '2023-09-01 10:00:00', '2023-09-01 12:00:00'),
  ('Website Login Issue 10', 'Users are unable to log in to the website 10', 'OPEN', '2023-09-01 10:00:00', '2023-09-01 12:00:00'),
  ('Website Login Issue 11', 'Users are unable to log in to the website 11', 'CLOSED', '2023-09-01 10:00:00', '2023-09-01 12:00:00'),
  ('Website Login Issue 12', 'Users are unable to log in to the website 12', 'IN_PROGRESS', '2023-09-01 10:00:00', '2023-09-01 12:00:00'),
  ('Website Login Issue 13', 'Users are unable to log in to the website 13', 'OPEN', '2023-09-01 10:00:00', '2023-09-01 12:00:00'),
  ('Website Login Issue 14', 'Users are unable to log in to the website 14', 'CLOSED', '2023-09-01 10:00:00', '2023-09-01 12:00:00'),
  ('Website Login Issue 15', 'Users are unable to log in to the website 15', 'OPEN', '2023-09-01 10:00:00', '2023-09-01 12:00:00'),
  ('Website Login Issue 16', 'Users are unable to log in to the website 16', 'CLOSED', '2023-09-01 10:00:00', '2023-09-01 12:00:00'),
  ('Website Login Issue 17', 'Users are unable to log in to the website 17', 'OPEN', '2023-09-01 10:00:00', '2023-09-01 12:00:00'),
  ('Website Login Issue 18', 'Users are unable to log in to the website 18', 'IN_PROGRESS', '2023-09-01 10:00:00', '2023-09-01 12:00:00'),
  ('Website Login Issue 19', 'Users are unable to log in to the website 19', 'CLOSED', '2023-09-01 10:00:00', '2023-09-01 12:00:00'),
  ('Website Login Issue 20', 'Users are unable to log in to the website 20', 'OPEN', '2023-09-01 10:00:00', '2023-09-01 12:00:00'),
  ('Website Login Issue 21', 'Users are unable to log in to the website 21', 'CLOSED', '2023-09-01 10:00:00', '2023-09-01 12:00:00');
```

<br/>

### 07. Generating Dummy Data

<br/>

### 08. Building the Pagination Component

<br/>

### 09. Implementing Pagination

<br/>

### 10. PaginatingIssues

<br/>

### 11. Refactoring. Extracting IssueTable Component

<br/>

![Application](/img/pic-ch09-img01.png?raw=true)

<br/>

---

<br/>

**Marley**

Any questions in english: <a href="https://jsdev.org/chat/">Telegram Chat</a>  
Любые вопросы на русском: <a href="https://jsdev.ru/chat/">Телеграм чат</a>
