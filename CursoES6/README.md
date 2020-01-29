# Comands for use ES6


#### Conceitos

``` yarn add @babel/cli ```
``` yarn add @babel/presets_env ```
``` yarn add @babel/core ```

###### After install this, you need to create a .babelrc file and type inside:

``` {"presets": ["@babel/preset-env" ]} ```

###### Another configuration is alter the package.json adding this:

``` "scripts": {"dev": "babel ./main.js -o ./bundle.js -w"} ```

<<<<<<< HEAD
#### WEBPACK

Before installation, you must change the name of the dependencies to devDependencies, because you'll only use the babel file already transpiled.

``` yarn add webpack webpack-cli -D ```

After this you should to create a ``` webpack.config.js ``` file 

You need to install babel-loader
``` yarn add babel-loader -D ```

###### WEBPACK DEV SERVER

``` yarn add webpack-dev-server -D ```

For to find the bundle file you need type 
``` yarn add webpack --mode=production ```


#### ASYNC/AWAIT

You need to install a plugin before use:
``` yarn add @babel/plugin-transform-async-to-generator -D ```

after this you need to change the .babelrc file:

``` 
    {
        "presets": [
            "@babel/preset-env"
        ],
        "plugins": [
            "@babel/plugin-proposal-object-rest-spread",
            "@babel/plugin-transform-async-to-generator"
        ],

    }
```

#### AXIOS


``` yarn add axios ```
=======
###### And finally you're ready to create a .js file and use the ES6 tools


#### For use the rest/spread you need install this.

``` yarn add @babel/plugin-proposal-object-rest-spread ```

After alter the .babelrc adding this:

 ``` 
 {
    "presets": ["@babel/preset-env" ],
    "plugins": ["@babel/plugin-proposal-object-rest-spread"]
 } 
 ```
 
 run yarn.dev
