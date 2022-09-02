# Pipeline CI/CD 

The pipeline is made through CircleCI which is which is integerated with my Github Repo: https://github.com/omarelsabagh/udagram-udacity-fullstack-hosting-aws

## Pipeline Configration

The pipeline is configured through .circleci folder in the Root directory.

- first install the orbs  
1. Nodejs
2. AWS CLI
3. EB CLI

- Install Front-End Dependencies
- Install API Dependencies
- Front-End build 
- API Build
- Approval
- Deploy App

## Pipeline Scripts

All the scripts that runs on the pipeline are in the package.json file in the root directory of the project.

- `"frontend:install": "cd udagram/udagram-frontend && npm install -f"`
- `"api:install": "cd udagram/udagram-api && npm install ."`
- `"frontend:build": "cd udagram/udagram-frontend && npm run build"`
- `"api:build": "cd udagram/udagram-api && npm run build"`
- `"frontend:deploy": "cd udagram/udagram-frontend && npm run deploy"`
- `"api:deploy": "cd udagram/udagram-api && npm run deploy"`
- `"deploy": "npm run api:deploy && npm run frontend:deploy"`



