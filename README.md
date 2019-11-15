# Edinburgh Hoppers Website

## intro
The website runs on [**Jekyll**](https://jekyllrb.com/). This means it's relatively easy to work with collaboratively, and it's possible to make the pages look and feel consistent across the whole of the website with the use of **templates**.

## contributing
First, clone this repository on your computer. To check for any updates, use GitHub Desktop or, using the terminal, 
```
git fetch
git pull
```
(only `git pull` if there are no conflicts with your local repository!)

**You are strongly suggested to have a look at the [Jekyll documentation](https://jekyllrb.com/docs/home/) and familiarise yourself with it**

## jekyll installation
Please refer to [these instructions](https://jekyllrb.com/docs/installation/) to install Jekyll on your own machine. For reference, I (@JMaio aka "lemon") am running Jekyll on [Windows Subsystem for Linux (WSL)] on [Windows 10]

## running the web server
Jekyll runs a server on your local machine that will allow the website to be viewed on your web browser by navigating to, by default, the following address:
[localhost:4000](http://localhost:4000) (aka [127.0.0.1:4000](http://127.0.0.1:4000))

> note the address/port on your server might be different - if they are, don't worry, jekyll should display them on the terminal

this can be done by navigating to the repository in your terminal and issuing the following command:
```
bundle exec jekyll serve
```
