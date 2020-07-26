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

To just see the logs in our terminal for a running container we run

``` bash
  docker logs <container id>
  docker logs bgh452221Fde21
```

<br />

### To stop a running container (Kill)

We can write a simple command like

``` bash
  docker stop <container id>
  docker stop fr423ds3132
```

Another command is to simple run

``` bash
  docker kill <container id>
  docker kill fr423ds3132
```

<br/>

### Mapping over different ports

We can simple and really easy to run a simple web server like [**Nginx**](https://www.nginx.com/).
We will pull the image from docker hub and create a container from it.

``` bash
  docker run nginx
```

to make nginx keep running we need to add the *--detach* flag , or *-d*.
Nginx run by default on port : 80 , to have access to the port on our local development environment we need to tell our machine to run the port in our environment and not just in the container.

So we need to map port in our container to run in our own local environment.
simple commands like *--port* ore *-p* should do the job.

``` bash
  docker run -p <host port:container port> nginx
  docker run -p 80:80 nginx
```

This will run nginx on our local machine on port 80 now 🙌⚛️
