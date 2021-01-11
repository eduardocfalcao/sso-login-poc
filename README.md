# Universal login POC


This project was created to test the usage of some Authentication Providers like _Auth0_, _Firebase_, _Cognito_, and etc.

This repo has two SPA applications (Vue) in folders:
  - app-bar
  - app-foo

The default integrated Authorization Provider is (_Auth0_)[http://google.com.br].

When running and doing the sign up/sign in one of the applications, when going to the second application (in the same browser) the user should be authenticated as well.

## How to run locally

At this point, you should a created account in _Auth0_ and create and configure a SPA application in their Dashboard.

Keep your your `domain`, and your `clientId` to use later.

To run the _app-bar_, and/or _app-foo_ applications, follow the next steps:

 1. Navigate to the folder `app-bar/frontend`.
 2. Make a copy from file `auth_config.default.json` and rename it to `auth_config.json`. 
 3. Change the place holders `[YOUR_DOMAIN]` and `[YOUR_CLIENTID]` with your domain and clientId (respectivly) from _Auth0_ in the `auth_config.json`.
 4. In the current folder, run the following commands in the terminal:
```bash
npm i
npm run serve
```
5. Navigate to the folder `./app-foo/fronted` and repeat the steps 2, 3, and 4.






