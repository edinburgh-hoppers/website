# Edinburgh Hoppers Website (read-only)

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
Please refer to [these instructions](https://jekyllrb.com/docs/installation/) to install Jekyll on your own machine.

## running the web server
Jekyll runs a server on your local machine that will allow the website to be viewed on your web browser by navigating to, by default, the following address:
[localhost:4000](http://localhost:4000) (aka [127.0.0.1:4000](http://127.0.0.1:4000))

> note the address/port on your server might be different - if they are, don't worry, jekyll should display them on the terminal

this can be done by navigating to the repository in your terminal and issuing the following command:
```
bundle exec jekyll serve
```

## sections of the website: 
 - \_pages: this is where all the main pages of our website are defined. All of them mainly contain [front matter](https://jekyllrb.com/docs/front-matter/), and the majority of code goes in the \_layouts and \_includes folder. Most front matter contains a layout variable, which chooses a template from the \_layouts folder to implement. 
 - \_layouts: contains the structure of our pages. A lot of variables in [Liquid](https://shopify.github.io/liquid/basics/introduction/) are present, so brushing up on how Liquid works is highly recommended. 
 - \_includes: contains sections of the websites that can be added onto a main page. This helps separate parts of a website into individual functionality. Each file is a .html file. These files can be included using the include keyword. 
 - \_data: contains .yml files that holds all data files that are used in our website. 
 - \assets: contains images, stylesheets, and script files that are used in the website. Stylesheets have the extension .scss, which is the [Sass](https://sass-lang.com/guide) preprocessor for CSS. Script files are in JavaScript. Additionally, we also use [Bootstrap](https://getbootstrap.com/) to style our website.

## create big event

For a big event website, create a new repository in the Hoppers organisation.
