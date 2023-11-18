# [Laith Harb] The Next.js 13 Bootcamp - The Complete Developer Guide [ENG, 2023]

<br/>

```
$ lsb_release -a
No LSB modules are available.
Distributor ID:	Ubuntu
Description:	Ubuntu 22.04.3 LTS
Release:	22.04
Codename:	jammy
```

<br/>

```
$ sudo apt install -y curl jq
```

<br/>

```
$ volta --version
1.1.1
```

<br/>

```
$ volta install node yarn npm
```

<br/>

```
$ node -v
v18.18.0
```

<br/>

```
$ npm -v
10.2.0
```

<br/>

```
$  yarn -v
4.0.0-rc.52
```

<br/>

### PostgresDB inside docker container

<br/>

```
$ docker -v
Docker version 24.0.6, build ed223bc

$ docker-compose --version
Docker Compose version v2.22.0
```

<br/>

```
$ mkdir -p /home/marley/projects/dev/db/mysql
$ cd /home/marley/projects/dev/db/mysql
```

<br/>

```
$ vi docker-compose.yml
```

<br/>

```yaml
version: '3'
services:
  mysql-dev:
    restart: always
    image: mysql:8.1
    ports:
      - '3306:3306'
    volumes:
      - ./mysql:/etc/mysql/conf.d
    environment:
      MYSQL_DATABASE: nextapp
      MYSQL_ROOT_PASSWORD: pA55w0rd123
```

<br/>

```
$ docker-compose up
```

```
$ docker ps
```

<br/>

```
// 149ee88a4d50 mysql image
$ docker exec -it 149ee88a4d50 bash
```

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

---

<br/>

**Marley**

Any questions in english: <a href="https://jsdev.org/chat/">Telegram Chat</a>  
Любые вопросы на русском: <a href="https://jsdev.ru/chat/">Телеграм чат</a>
