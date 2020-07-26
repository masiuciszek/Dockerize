# Dockerize

About how to get started with *Docker* and how you get a solid fundamental base with docker commands and scripts. 🐡

Using images from *Docker hub* and created containers.

Writing your own images , for example a basic Node express application.

### List docker containers and images

``` bash

  docker ps -a

```

### getting Redis image from Dockerhub

``` bash
  docker run redis
```

Too keep the server running we need to run the Redis image in a detach mode with the *--detach* flag or with a shortcut of *-d*

You should be able to inspect your dashboard with the **ps** command.

``` bash
  docker ps -a

```

<br/>

### Remove all images

``` bash
  docker images purge
```

<br/>

### executing other commands inside a already running container with *EXEC*

``` bash

docker exec <container id> <command>

```

For example

``` bash
  docker exec -it 5531133af6a1 redis-cli
```

<br/>

### Starting Shell Inside a Active Container

If you want to use the shell in a running container then you can use almost the same command as previous, end the script with sh

``` bash
docker run exec -it <container id> sh
docker run exec -it 7860bdfs21ds sh

```
