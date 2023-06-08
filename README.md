# Bookstore Web Application

## Usage

This web application is part of a Docker stack. See the [Bookstore](https://github.com/alexandrelamberty/bookstore) project to launch the complete stack.

## Development

...

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The application will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via a platform of your choice. To use this command, you need to first add a package that implements end-to-end testing capabilities.

## Docker

Build the image

```shell
docker build . -t alexandrelamberty/bookstore-web-app:tag 
```

Run the image with the default network.

```shell
docker run -p 80:80 --network=bookstore_default --name bookstore-web-app -d alexandrelamberty/bookstore-web-app:tag
```

Push image to [alexandrelamberty/bookstore-api](https://hub.docker.com/repository/docker/alexandrelamberty/bookstore-api/general) on DockerHub

```shell
docker push alexandrelamberty/bookstore-web-app:tag
```

Image repository

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI Overview and Command Reference](https://angular.io/cli) page.
