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
Please refer to [these instructions](https://jekyllrb.com/docs/installation/) to install Jekyll on your own machine.

## running the web server
Jekyll runs a server on your local machine that will allow the website to be viewed on your web browser by navigating to, by default, the following address:
[localhost:4000](http://localhost:4000) (aka [127.0.0.1:4000](http://127.0.0.1:4000))

> note the address/port on your server might be different - if they are, don't worry, jekyll should display them on the terminal

this can be done by navigating to the repository in your terminal and issuing the following command:
```
bundle exec jekyll serve
```

## create big event

Create an new file in _pages and set the following variables:
  - layout: bigEvent
  - cover: [Link to the cover image. Relative path starting from the img-folder.]
  - logo: [Link to the logo. Relative path starting from the img-folder.]
  - title: [Title of the event.]
  - subtitle: [Subtitle of the event. OPTIONAL.]
  - day: [Day of the event.]
  - facebook: [Link to the event on facebook. OPTIONAL.]
  - bookTickets: [Link to the event on eventbrite or a similar site. OPTIONAL.]
  - navItems: [Link to the data file that lists what to include in the navbar. Every element has a text (which is shown in the navbar) and a href (a relative path, starting at the base url of the page).]
  - subpages: Put all yml files in _data in a folder for particular event and add that folder name here. Can refer to it using the following syntax: ```{% for member in site.data[page.subpages][page.<insert element like data, faq, schedule>]%}{% endfor %}.``` 
  - data: [Link to the event's data file which describes the page's content. Every element has a title and a includeFrom (relative path starting from the _includes folder that refers to the content of the section; using the data in the data files refered to with the following variables).]
  - [Include links to the data files needed to display certain contents (Schedule? FAQ?). Look into the _includes folder to find already designed segments from IWD20.]
