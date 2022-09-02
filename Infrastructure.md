# AWS Infrastructure

## RDS database

Database is created manually in the AWS console.

Database is Postgres.

Database name: udagramdb2
EndPoint: udagramdb2.cyrnqiawybev.us-east-1.rds.amazonaws.com
Port for DB: 5432

### connection the the database

The connection to the database is made through Sequelize library.
using the Environment Variables in the Elastic Beanstalk environment configration.

#### Environment Variables

POSTGRES_HOST=udagramdb2.cyrnqiawybev.us-east-1.rds.amazonaws.com
POSTGRES_DB=udagramdb2
POSTGRES_USER=dell
POSTGRES_PASSWORD=01155388590
PORT=3000
DB_PORT=5432
JWT_SECRET=my_secret_token
AWS_REGION=us-east-1
AWS_BUCKET=udagramprojectdevops


### Database Publicity.
The Database is setted up to be public.

## S3 Bucket

The S3 bucket is hosting my FrontEnd files.

The bucket is created manually through the AWS console.

The bucket is made to be public with a bucket policy.

Bucket name: udagramprojectdevops

### Deployment to the S3 Bucket

Deployment the FrontEnd code to the bucket is made through the script:

#### all scripts must run on Linux Bash or Mac OS environment neither try to match them with Windows environment

`"deploy": "npm install -f && npm run build && chmod +x \"bin/deploy.sh\" &&  \"bin/deploy.sh\""`
`npm run deploy`

this script install the dependancies. 
then build the project to a www directory using Angular ng scipt.
then accessing and running the separated deploying AWS CLI script in the bin/deploy.sh folder.
`aws s3 cp --recursive --acl public-read ./www s3://udagramprojectdevops/`
`aws s3 cp --acl public-read --cache-control="max-age=0, no-cache, no-store, must-revalidate" ./www/index.html s3://udagramprojectdevops/`

## Elastic Beanstalk Environment

My BackEnd server is hosted on the EB environment.

The Environment is runinning NodeJs v14

The Environtment variables is configured as cleared out above.

Environment name: Mygoodapp-env
Url: Mygoodapp-env.eba-rprppm3r.us-east-1.elasticbeanstalk.com

### Deployment to the Elastic Beanstalk

Deployment the server code to the bucket is made through the EB CLI scripts:

`"deploy": "npm run build && eb list && eb use Mygoodapp-env && eb codesource local && eb deploy"`

the script builds and transpiles the server in www folder then zip the contents of the www folder to Archive.zip file 
then upload the Archive.zip file to the cloud environemnt through Git bash.