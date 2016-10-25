# WECCC-API-Server

Server-side API Implementation for WECCC Reporting Tool

## Installation

Intall the code from GitHub using the following command:

```sh
$ git clone git@github.com:djedi-knight/WECCC-API-Server.git
```
The following need to be installed:

- [MongoDB](https://docs.mongodb.com/manual/installation/#tutorials)
- [NodeJS](https://nodejs.org/en/download/package-manager/#debian-and-ubuntu-based-linux-distributions)

Once completed, install all required node modules:

```sh
$ cd WECCC-API-Server
$ npm install
```

## Deployment

1) Start a mongod service:

```sh
$ sudo service mongod start
```

Verify that the `mongod` process has started successfully by checking the contents of the log file at **/var/log/mongodb/mongod.log** for a line reading:

```sh
[initandlisten] waiting for connections on port <port>
```

where `port` is the port configured in **/etc/mongod.conf, 27017** by default.

You can stop the mongod process by issuing the following command:

```sh
$ sudo service mongod stop
```

or restart it:

```sh
$ sudo service mongod restart
```
