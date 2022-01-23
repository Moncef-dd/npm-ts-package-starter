NPM Package Starter
==

> to develop your npm pacakge easily
> A ready starter setup with all best practices developing your npm packages
>

## Feautures

* Written with TypeScript
* **Test** : jest with ts-coverage-report
* Lint : Preconfigured with eslint airbnb config, prettier, and preconfigured that that commit can't be done if the code is not good formatted
## Commands

* `git add . && git commit -m "commit message"` : to commit the changes
* `npm run patch` : to run all the stages to deploy the package on npm and git
  * lint
  * format (prettier)
* `npm run publish`

## Coming

* update the deployment with travis CI (adding script of travis.yml)

