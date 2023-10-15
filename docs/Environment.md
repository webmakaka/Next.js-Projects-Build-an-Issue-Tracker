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

<br/>

---

<br/>

**Marley**

Any questions in english: <a href="https://jsdev.org/chat/">Telegram Chat</a>  
Любые вопросы на русском: <a href="https://jsdev.ru/chat/">Телеграм чат</a>
