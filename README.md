<hr>

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

<hr>

# KNOWN ISSUS

Live reload doesn't work well with MFE - I guess because it imports the code at runtime dynamically so it messes up with the zone detection of NG Live reload.

<hr>

# How to run the project:
1. Start the Backend Server - to get the manifest file

- cd backend/mock-backend

- run
> npm run start

2. Run the shell application
- npm run shell

4. run the main application
- npm run main

