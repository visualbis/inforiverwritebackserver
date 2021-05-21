# Writeback Client App

A simple node js server to receive the writeback data and parse it

Currently support MySql

---
## Requirements

For development, you will only need Node.js and a node global package, Yarn, installed in your environment.

### Node
- #### Node installation on Windows

  Just go on [official Node.js website](https://nodejs.org/) and download the installer.
Also, be sure to have `git` available in your PATH, `npm` might need it (You can find git [here](https://git-scm.com/)).

- #### Node installation on Ubuntu

  You can install nodejs and npm easily with apt install, just run the following commands.

      $ sudo apt install nodejs
      $ sudo apt install npm

- #### Other Operating Systems
  You can find more information about the installation on the [official Node.js website](https://nodejs.org/) and the [official NPM website](https://npmjs.org/).

If the installation was successful, you should be able to run the following command.

    $ node --version
    v8.11.3

    $ npm --version
    6.1.0

### MySQL
- #### Follow this documentation to install MySQL https://dev.mysql.com/doc/mysql-installation-excerpt/8.0/en/
---

## Install

    $ git clone https://github.com/nsdevaraj/inforiverwritebackserver
    $ cd inforiverwritebackserver
    $ npm install

---
## Configure app

### For Production
Open `src/configs/production.json` then add your MySql config.
### For Development
Open `src/configs/development.json` then add your MySql config.

### Example Config
```
"dbConfig": {
    "host": "localhost",
    "user": "root",
    "password": "root",
    "database": "databaseName"
}
```

### ENV
Add a new file in the root directory with name `.env` and the following content 

```
PORT=3000
```
You can change the port to other open ports also

---
## Running the Build for production

    $ npm run start
This command will start the application in production mode

# Simple build for Dev

    $ npm run dev
---
## Current Implementation

Use the api `http://localhost:3000/postData` as the writeback url. This will parse the CSV and Put the values into the MySQL DB

---
## Upcoming Features
    1. Adding JSON Parse support
    2. Handling Meta data from the Info river app

---