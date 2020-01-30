# Course JavaScript

This in a course of javascript including: JavaScript, ES6, ReactJS and NodeJS

###### But here i'm teaching how do you creats a SSH for accesing your GitHub (Security Method)

1. You need to create a folder whatever you want
2. Open the terminal inside your folder and type ``` ssh-keygen ```
..* After this you need put a name and a password (very important) for your file. 
3. With this command 2 files ``` <name> ``` and ``` <name.pub> ``` will be created, now you need to access your github account
4. Go to Settings > SSH and GPG Keys >  New SSH Key (if one already exists, delete and create another)
5. Ok! now for to use your SSH, you need to create a repository and use a SSH URL
6. In your terminal type ```git init```, and ```git remote add origin <ssh url>```
..* ps: type without the symbol <>
7. After this, for ```push``` your files you need to type ``` eval `ssh-agent` ``` and then ``` ssh-add <directory of <name> created by ssh-keygen command>``` 
..* ps: type without the symbol <>
