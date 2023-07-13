# collaboration-services-teams-integrator

# Project Title

Teams-Integrator

Microservice handling and managing Axm interactions with Teams (check https://graph.microsoft.com/).

## Jira Board

[Collab Jira Board](https://pinstripe.atlassian.net/jira/software/c/projects/COLL/boards/4)

## Slack Channel
Found issues, tag `@Collab` in [Collab-Engg channel](https://axiamatic.slack.com/archives/C02J3KB4XS5)

## Api Documentation( Swagger Links)

[Integration Link](https://api.integration.axiamatic.cloud/teams-integrator/swagger-ui/index.html)

[Stage Link](https://api.stage.axiamatic.com/teams-integrator/swagger-ui/index.html)

[Production Link](https://api.axiamatic.com/teams-integrator/swagger-ui/index.html)

## Setup

Set following env variables

|  variable          | Description                                         |  
|--------------------|-----------------------------------------------------|
|  AWS_REGION        | Region app and other services are setup (us-west-2) |
|  PG_DB             | Local Database name                                 |
|  PG_HOSTNAME       | Local Database host name                            | 
|  PG_PASSWD         | Local Database Password                             |
|  PG_PORT           | Local Database Port                                 |
|  PG_USER           | Local Database username                             |
|  S2S_CLIENT_ID     | needed if app interacts with other remote service   |
|  S2S_CLIENT_SECRET | needed if app interacts with other remote service.  |
|  S2S_TOKEN_URL     | needed if app interacts with other remote service.  |

### Spec generation

use mvn clean install

and run the app.

### Branching and Release
use Java maven plugin to cut or merge the branch just append ./sync_version.sh execution,
this will update node app version as well and push the code.

For example to cut a feature branch: 

`mvn gitflow:feature-start ` `&&` `./sync_version.sh`

the added command `./sync_version.sh` will sync the version in package.json

#### Auto Format the code
run `npm run format`

