# E2E Test using TestCafe

This project contains E2E Test of sample using TestCafe.

## TestCafe + ChatOps

Also this project challenged to use a remote url of TestCafe on ChatOps. note:send a report of test to `#random` room Of Slack.

### Until starting test and receiving a remote url

![Overview of containers](https://raw.githubusercontent.com/nsoushi/testcafe-chatops/master/docs/testcafe_chatops_generating_url.png)

### Until Accessing a remote url and receiving a report of test

![Overview of containers](https://raw.githubusercontent.com/nsoushi/testcafe-chatops/master/docs/testcafe_chatops_do_test.png)

## How to try

**1:setup**
```
sh ./setup.sh <SLACK_API_TOKEN>
```
then setup a token into `./docker-compose.yml`

**2:build up containers**
```
docker-compose up -d
```

## Additional Reports
[This post](http://naruto-io.hatenablog.com/entry/2017/02/24/165107) reported how to build this project, sorry that supported only japanese.
