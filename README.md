# nodejs-auth-crud-api

based on: 
* https://github.com/FaztWeb/nodejs-passport-local
* https://github.com/FaztWeb/express-basic-restapi

## To execute in local mode using docker-compose
* Run:
    ```
    $ docker-compose up
    ```
* To stop it, just type in console `Ctrl` + `C`

## To deploy it to Heroku [![Deploy to Heroku](https://www.herokucdn.com/deploy/button.png)](https://heroku.com/deploy)
* Create an app in your Heroku dashboard (once you logged in).
* Create an add-on to use Mongo database, create your user and get the link.
* If you are not logged in yet in your `Heroku CLI`:
    ```
    $ heroku login
      heroku: Press any key to open up the browser to login or q to exit: 
      Opening browser to https://cli-auth.heroku.com/auth/browser/<SOME_HASH_CODE>
      Logging in... done
      Logged in as <YOUR_EMAIL>
    ```
* Login into your `Heroku CLI` to use docker in your app:
    ```
    $ heroku container:login
      WARNING! Your password will be stored unencrypted in /home/<YOUR_USERNAME>/.docker/config.json.
      Configure a credential helper to remove this warning. See
      https://docs.docker.com/engine/reference/commandline/login/#credentials-store

      Login Succeeded
    ```
* Now we need to push our docker app, for that, `Heroku` needs a *Dockerfile.* file, for more information about Docker deployment in Heroku, please check this [**site**](https://devcenter.heroku.com/articles/container-registry-and-runtime#unsupported-dockerfile-commands).

* Also, we need to change the `mongodb.URI` value in `src/keys.js` as follows using the add-on URL from `mLab MongoDB` or whatever you want, for more details in order to consume a Mongo Database using `mLab MongoDB` check [this](http://freija.net/2017/09/13/heroku_docker-mongodb.html):
    ```javascript
    module.exports = {
    mongodb: {
        // For docker
        //URI: 'mongodb://apimongo/crud-db'
        // For heroku deployment
        URI: 'mongodb://<your_user>:<your_user_passwordd>@dsxxxxxx.mlab.com:<PORT>/heroku_xxxxxxxx' 
        }
    };
    ```
* Once all mentioned before is settled up, we're ready to deploy our docker app to `Heroku`:

    * Pushing the container to `Heroku`:
        ```
        $ heroku container:push --recursive --app <YOUR_APP_NAME_CREATED_IN_HEROKU>
           nodejs-mongodb-crud-0
           === Building web (/home/<SOME_PATH>/nodejs-auth-crud-api/Dockerfile.nodejs)
           Sending build context to Docker daemon  642.6kB
           Step 1/7 : FROM owncloudci/nodejs
           ---> 8abc3f40d0b0
           Step 2/7 : RUN mkdir /app
           ...
           ...
           latest: digest: sha256:<SOME_SHA_HASH> size: 3247
           Your image has been successfully pushed. You can now release it with the 'container:release' command.
        ```

    * Now we need to `release` our container:
        ```
        $ heroku container:release web --app <YOUR_APP_NAME_CREATED_IN_HEROKU>
          Releasing images web to <YOUR_APP_NAME_CREATED_IN_HEROKU>... done
        ```

    * Finally, our Docker app is now deployed in `Heroku`, to start to use it, we need to go to this endpoint: `https://<YOUR_APP_NAME_CREATED_IN_HEROKU>.herokuapp.com/`

    * For debugging purposes, you can use `heroku logs --tail --app <YOUR_APP_NAME_CREATED_IN_HEROKU>` to check the logs in your local terminal.

    * If you want to re-deploy a new release of your container, you need to re-run these console commands:
        ```
        $ heroku container:push --recursive --app <YOUR_APP_NAME_CREATED_IN_HEROKU>
        === Building nodejs (/home/manuelperez/Downloads/nodejs-auth-crud-api/Dockerfile.nodejs)
        Sending build context to Docker daemon  1.204MB
        Step 1/7 : FROM owncloudci/nodejs
         ---> 8abc3f40d0b0
        Step 2/7 : RUN mkdir /app
        ...
        ...
        latest: digest: sha256:<SOME_SHA_HASH> size: 3242
        Your image has been successfully pushed. You can now release it with the 'container:release' command.
        
        $ heroku container:release web --app <YOUR_APP_NAME_CREATED_IN_HEROKU>
          Releasing images web to <YOUR_APP_NAME_CREATED_IN_HEROKU>... done
        ```
    
    * And we are on, have fun!!.

    * If you want to test this app, go to: https://nodejs-mongodb-crud-0.herokuapp.com