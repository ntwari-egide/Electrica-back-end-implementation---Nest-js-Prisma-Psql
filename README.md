<!-- 
## Labusafax - backend apis implementation


##  [](#about)About The Project

Labusafax descriptions goes here

#### [](#build-with) Build with

-   Nest Js (A progressive [Node.js](http://nodejs.org/) framework for building efficient and scalable server-side applications.)
-   Postgresql db database
-  Prisma
- Open api swagger documentation

## [](#getting-started)Getting Started

This is an example of how you may give instructions on setting up your project locally. To get a local copy up and running follow these simple example steps.

### prerequisites

This is an example of how to use the software and how to install it.

1.  Clone project from gitlab

-   Github link: [Link](https://github.com/code-gurus/labusafax)

2.  Switching to your folder

-   After cloning,cd in folder called **Genv-backend-nestjs**

### Step 1: Set up the Development Environment

You need to set up your development environment before you can do anything.

Install  [Node.js and NPM](https://nodejs.org/en/download/)

-   on OSX use  [homebrew](http://brew.sh/)  `brew install node`
-   on Windows use  [chocolatey](https://chocolatey.org/)  `choco install nodejs`

Install yarn globally

`yarn global add yarn`

Install a POSTGRES database.

### Step 2: Virtual environment

Create a new database with the name you have in your  `.env`-file.

Then setup your application environment.

yarn run setup

> This installs all dependencies with yarn. After that it migrates the database and seeds some test data into it. So after that your development environment is ready to use.

### Step 3: Serve your App

Go to the project dir and start your app with this yarn script.

`yarn run start:dev` or 	`npm run start:dev`

> This starts a local server using  `nest start --watch`, which will watch for any file changes and will restart the server according to these changes. The server address will be displayed to you as  `http://0.0.0.0:3000`.

## ❯ Scripts and Tasks

All script are defined in the  `package-scripts.js`  file, but the most important ones are listed here.

### [](https://github.com/code-gurus/labusafax#install)Install

-   Install all dependencies with  `yarn install`

### [](https://github.com/code-gurus/labusafax#linting)Linting

-   Run code quality analysis using  `yarn run lint`. This runs tslint.
-   There is also a vscode task for this called  `lint`.

### [](https://github.com/code-gurus/labusafax#tests)Tests

-   Run the unit tests using  `yarn start test`  (There is also a vscode task for this called  `test`).
-   Run the integration tests using  `yarn run test`
-   Run the test coverage `yarn run test:cov`
- Run the tests with reloading every changes `yarn run test:watch`

### [](https://github.com/code-gurus/labusafax#running-in-dev-mode)Running in dev mode

-   Run  `yarn run serve`  to start nodemon with ts-node, to serve the app.
-   The server address will be displayed to you as  `http://0.0.0.0:3000`

### [](https://github.com/code-gurus/labusafax#building-the-project-and-run-it)Building the project and run it

-   Run  `yarn run build`  to generated all JavaScript files from the TypeScript sources (There is also a vscode task for this called  `build`).
-   To start the builded app located in  `dist`  use  `yarn run start`.

### [](https://github.com/code-gurus/labusafax#database-migration)Database Migration

-   Run  `npx prisma migrate dev --name init`  to create a new migration file.
-   Install prisma client `npm install @prisma/client`
-   Create second migration run  `prisma migrate dev --name added_job_title`.
-   In a development environment, use the `migrate dev` command to generate and apply migrations `npx prisma migrate dev`

## ❯ Debugger in VSCode

To debug your code run  `yarn start build`  or hit  cmd  +  b  to build your app. Then, just set a breakpoint and hit  F5  in your Visual Studio Code.

## ❯ Project Structure

|  Name  |Description  |
|--|--|
| **.vscode/** |VSCode tasks, launch configuration and some other settings  |
|**dist/**|Compiled source files will be placed here|
|**src/**|Source files|
|**prisma/**|For db migrations and `schema.prisma` for configuring all models and tables|
|**test/**| Tests |
|**src/main.js**| Entry point of the application |

## ❯ Logging

A good practice is to instantiate `Logger` class from `@nestjs/common` in each of our services. We can supply our service name as the `context` argument in the `Logger` constructor, like so:
```typescript
import { Logger, Injectable } from '@nestjs/common';

@Injectable()
class MyService {
  private readonly logger = new Logger(MyService.name);

  doSomething() {
    this.logger.log('Doing something...');
  }
}
```

## ❯ Docker

### [](https://github.com/code-gurus/labusafax#install-docker)Install Docker

Before you start, make sure you have a recent version of  [Docker](https://docs.docker.com/engine/installation/)  installed

### [](https://github.com/code-gurus/labusafax#build-docker-image)Build Docker image

`docker build -t <your-image-name> .`

### [](https://github.com/code-gurus/labusafax#run-docker-image-in-container-and-map-port)Run Docker image in container and map port

The port which runs your application inside Docker container is either configured as  `PORT`  property in your  `.env`  configuration file or passed to Docker container via environment variable  `PORT`. Default port is  `3000`.

#### [](https://github.com/code-gurus/labusafax#run-image-in-detached-mode)Run image in detached mode

`docker run -d -p <port-on-host>:<port-inside-docker-container> <your-image-name>`

#### [](https://github.com/code-gurus/labusafax#run-image-in-foreground-mode)Run image in foreground mode

`docker run -i -t -p <port-on-host>:<port-inside-docker-container> <your-image-name>`

### [](https://github.com/code-gurus/labusafax#stop-docker-container)Stop Docker container

#### [](https://github.com/code-gurus/labusafax#detached-mode)Detached mode

`docker stop <container-id>`

You can get a list of all running Docker container and its ids by following command

`docker images`

#### [](https://github.com/code-gurus/labusafax#foreground-mode)Foreground mode

Go to console and press `+ C` at any time.

### [](https://github.com/code-gurus/labusafax#docker-environment-variables)Docker environment variables

There are several options to configure your app inside a Docker container

#### [](https://github.com/code-gurus/labusafax#project-env-file)project .env file

You can use  `.env`  file in project root folder which will be copied inside Docker image. If you want to change a property inside  `.env`  you have to rebuild your Docker image.

#### [](https://github.com/code-gurus/labusafax#run-options)run options

You can also change app configuration by passing environment variables via  `docker run`  option  `-e`  or  `--env`.

`docker run --env DB_HOST=localhost -e DB_PORT=3306`

#### [](https://github.com/code-gurus/labusafax#environment-file)environment file

Last but not least you can pass a config file to  `docker run`.

`docker run --env-file ./env.list`

`env.list`  example:

```
# this is a comment
DB_TYPE=mysql
DB_HOST=localhost
DB_PORT=3306

```


## [](#contributing)Contributing

Contributions are what make the this GEV project such an amazing, fantastic, inspire, and create new ideas. Any contributions you make are **greatly appreciated**.

1.  Fork the Project from our github [Link](https://github.com/code-gurus/labusafax/)
2.  Create your Feature Branch (`git checkout -b ft-AmazingFeature-userstories_id`)
3.  Commit your Changes (`git commit -m 'Add some AmazingFeature'`)
4.  Push to the Branch (`git push origin ft-AmazingFeature-userstories_id`)
5.  Open a Pull Request
6.  Add yourself as assignee
7.  Add [https://github.com/cop1fab](cop1fab) as reviewer

## [](#license) License

Distributed under the MIT License. See `LICENSE` for more information. -->
