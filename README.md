# MFE

This project is to dedicated to the Module Federation technology - Later to be Native Federation

This technology - the idea behind is to organized the source code using module - introduced in ESModule, host it in different place and serve it as assets (JS compiled files), and load it into the project at runtime, like microservice talking to each other by API (more like injecting Assembly at runtime)

But this is a bit further than that, joining the compiled code and serve them as a single unit. This has several benefit to the developers:
-   code base becomes smaller and easier to manage
-   the team can move independently, decision, deployment, anytime they way. they can choose a different testing framework, analytic tools, as long as the generated application is touched or alter, but if they do, we just need to update the 'shell' application

## Benefit and ability it gains:
-   Independent deployment
-   Availability with A/B testing support (by modules!!!!!), before you need to increase instances - one for old , one for new for A/B testing (you know - monolith)
-   Less policy inflicted, moving faster
-   have more choice on the infrastructure, scaling isn't an issue because it just serving the static files, but the browser can leverage multi-threading to download all the bundle files much faster which is always great!!!

## Challenges for this approach:
-   Like microservice, more flexible sometime means more complex, this is really depends on the skills of the team and how good they are at the technology.
-   Harder to trouble-shoot dependencies sometime.
-   More Administrative work! (debatable)

This project was generated using [Angular CLI](https://github.com/angular/angular-cli) version 19.0.7.

## Development server

To start a local development server, run:

```bash
ng serve
```

Once the server is running, open your browser and navigate to `http://localhost:4200/`. The application will automatically reload whenever you modify any of the source files.

## Code scaffolding

Angular CLI includes powerful code scaffolding tools. To generate a new component, run:

```bash
ng generate component component-name
```

For a complete list of available schematics (such as `components`, `directives`, or `pipes`), run:

```bash
ng generate --help
```

## Building

To build the project run:

```bash
ng build
```

This will compile your project and store the build artifacts in the `dist/` directory. By default, the production build optimizes your application for performance and speed.

## Running unit tests

To execute unit tests with the [Karma](https://karma-runner.github.io) test runner, use the following command:

```bash
ng test
```

## Running end-to-end tests

For end-to-end (e2e) testing, run:

```bash
ng e2e
```

Angular CLI does not come with an end-to-end testing framework by default. You can choose one that suits your needs.

## Additional Resources

For more information on using the Angular CLI, including detailed command references, visit the [Angular CLI Overview and Command Reference](https://angular.dev/tools/cli) page.
