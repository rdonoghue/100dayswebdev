# Setting up a small node project from scratch

## initial folder structure

- app.js in the root
  -html pages (soon to be esj, I think) in the **views** directory
- styles and scripts in the **public** directory
- data in the **data** directory

## NPM stuff

ok, let's see if I rmemebr
npm init
then npm install

- express
- ejs

also install nodemon with --save-dev

then edit package.json to make the nodedemon my npm start

```bash
    "start": "nodemon app.js"
```

## Initial File

### initialize filesystem and app

```js
const fs = require("fs");
const path = require("path");
const express = require("express");
const app = express();
```

then set configurations

```js
app.set("views", path.join(__dirname, "views"));
app.set("view engine", "ejs");
app.use(express.urlencoded({ extended: false }));
app.use(express.static("public")); //pointer to any static filenames
```

"views" sets the pathname to the view files (the html/esj) files
setting the view engine to esj initializes esj and lets it know to look for .esj files
urlencoded sets up th emiddleware so that when it grabs files it can actually parse then
express.static gives the location of actual static files, like stylesheets and scripts.

I also add

```js
app.listen(3000);
```

to activate the actual web server, but that needs to go down at the bottom

## Building hello world

ok, first step, move everything into the right folders,and renaming index.html (currently my only page) to index.esj. Because I did the pointer to public, the stylsheet pointer is still normal looking (/styles/styles.css). I also initialize soem empty json files, though I don't yet know what I intend to do with them

overall file directory is

```text
+
|-app.js
|-- data
|   |-- input.json
|   |-- output.json
|
|-- public
|   |-- styles
|   |   |-- styles.css
|   |-- scripts
|       |-- scripts.js
|-- views
|   |-- index.ejs

```

ok, so now I need code pointer from root ("/") to index.esj so that looks like:

```js
app.get("/", function (req, res) {
  res.render("index");
});
```

- I could probbaly do that as one line? basically, this is the what it responds when it gets a request to root.
- The "req" field isn't seeing any use here because all it's doing is serving the page
- "render" is an ejs thing. without that, I need to do some more complicted work to establish a path, then spray a file or some content over the connection.
- something that looks more like:

```js
app.get("/", function (req, res) {
  const HTMLFilePath = path.join(__dirname, "views", "index.html");
  res.sendFile(HTMLFilePath);
});
```

or

````js
app.get("/", function (req, res) {
  res.send(
    "<h2><form action='/store-user' method='POST'><label>Your Name</label><input type='text' name='username'><button>Submit</button></form></h2>"
  );
});
```


- note that res.render only needs the body of the name, not the .esj because it assumes esj files.

## The Hello World Code

Ok, it SHOULD be able to run a simple hello world now, so I'm about to test it. The app.js code is:

```js
"use strict";
const fs = require("fs");
const path = require("path");
const express = require("express");
const app = express();
app.set("views", path.join(__dirname, "views"));
app.set("view engine", "ejs");
app.use(express.urlencoded({ extended: false }));
app.use(express.static("public")); //pointer to any static filenames

app.get("/", function (req, res) {
  res.render("index");
});

app.listen(3000);
````

so, now I just `npm start` and cross my fingers

and...
`Error: Failed to lookup view "index" in views directory "/Users/rdonoghue/projects/100dayswebdev/mynode/views"'

## Troubleshooting

### Check Essentials

ok, step 1, check for typos and reduce to a minimum set. Going to temporarily use that old code to just show text rather than try to render a file. the

```js
res.send("<h2>Hello World</h2>");
```

Success! Ok, so that suggests that I've got everything instlled correctly, but I'm somehow mangling the act of getting the index file. Looking at the workign example to see if I missed a step.

### Check browser

Last night I had a moment of weirdness with safari expecting an index.html file, so I may need a pointer to index.html in addition to root. Easiest way to test this is to re-open the page in Firefox.

And nope. Ok, so much for that hypothesis.

### Confirm the positive

Ok, gonna stop the server, and make sure the class project still works.

Well, crap. It worked liek a charm. So it's definitely PEBKAC

## Brute force

So, I'll spin up a new index.html file and see if

```js
app.get("/", function (req, res) {
  const HTMLFilePath = path.join(__dirname, "views", "index.html");
  res.sendFile(HTMLFilePath);
});
```

That worked, so it's definitely somethign specific to ejs.

### I am an idiot

So, I was just now typing ejs, and I couldn't remember if it was ejs or esj (It's ejs) and that inspired me to check the filenames, and sure enough, I has called it `index.esj`, not `index.ejs`.

So, fixing the filename and trying again and....

**it worked!!!**

Ok, I am now in a position to do a little bit of content manipulation, and to that end I'm going to look at the ejs docs to see some of the formatting guidelines.

## Looking at ejs

- [ejs.co](https://ejs.co)
- first thing in the getting started is actually about using it on the command line to generate HTMl files from data. That's cool, and informative, but we're doing that on the fly, so looking for a good example for that.

### Tag syntax

I don't know what most of these mean right now, but this seems useful to know.

```text
Tags
<% 'Scriptlet' tag, for control-flow, no output
<%_ ‘Whitespace Slurping’ Scriptlet tag, strips all whitespace before it
<%= Outputs the value into the template (HTML escaped)
<%- Outputs the unescaped value into the template
<%# Comment tag, no execution, no output
<%% Outputs a literal '<%'
%> Plain ending tag
-%> Trim-mode ('newline slurp') tag, trims following newline
_%> ‘Whitespace Slurping’ ending tag, removes all whitespace after it

```

### A random variable

Ok, I'm going to establish a variable in my app js
`const messageText="this is a message for node";"`

so, how do I get it to show up in the web page?

I **think** I need to declare it into the response somehow, so what's the syntax for that?

looking at the project, it looks like

```js
res.render("restaurants", { numberofRestaurants: restaurantData.length });
```

so it looks like I'm passing an object, and it shoudl be something like:

```js
res.render("index", { messageText: messageText });
```

Ok, putting that in there didn't break anything, but now I need to do somethign with it.

### Curious: is it now available to the local JS?

Going to console.log `messageText` from within the HTML just to see if it shows up.

Ok, that got me `Uncaught ReferenceError: messageText is not defined`, but in retrospect, that isn't suprising - it got passed as part of an object, not as itself, so `console.log(messageText);` shouldn't work. I need to find what the object is called, and they I can `console.log(WHATEVER.messageText);` but I'll probably need to come back to that later, since that's not how ejs works.

### Inserting the message

Looking at the project again, the insertion looks like `<%= numberofRestaurants %>`

`<%=` means "Outputs the value into the template (HTML escaped)" so I should be able to just do `<%= messageText %>` so let's try that.

Ok, worked like a charm. Now, out of curiosity, I'm going to update the variable

```js
const messageText="this is a <b>message</b> for node";"
```

and as expected, that got me `this is a <b>message</b> for node` as the output because of the "HTML escaped" bit. So that suggests that if I do `<%-` I should get "this is a **message** for node".

Ok, I think that worked, but the styling of bold is less visible than I'd like. One sec, pulling in a better bold font.

Yeah, that definitely worked, so woo hoo!

## File Manipulation

### Getting Data from a file

I need some kind of json file, so checking if there are any easily on hand. searchign for them seems to have hung the finder, so I hecked the web and adobe had a good example which I'm using as `colors.json` which is a set of colors and their hexcodes, formatted as.

```json
[
  {
    "color": "red",
    "value": "#f00"
  }
]
```

So, in theory, I should be able to iterate through those values and show the name and an example of each color. The HTML will be janky (**ASIDE:** while I'm largely using static css files, there's probably nothing keeping me from using a dynamically generated css file, so long as I declare a path to it. I may need to try that after this) So, first thing: reading the file.

The project does this:

```js
app.get("/restaurants", function (req, res) {
  const dataFilePath = path.join(__dirname, "data", "restaurants.json");
  const fileData = fs.readFileSync(dataFilePath);
  const restaurantData = JSON.parse(fileData);
  res.render("restaurants", { numberofRestaurants: restaurantData.length });
});
```

so, I probably need to do:

```js
app.get("/", function (req, res) {
  const dataFilePath = path.join(__dirname, "data", "colors.json");
  const fileData = fs.readFileSync(dataFilePath);
  const colorData = JSON.parse(fileData);
  res.render("index", { messageText: messageText, colorData: colordata });
});
```

Note: I don't actually know if I'm supposed to comma seperate the values, so I'm just going to try it.

Yep, that was right, or at least it didn't break anything. So, next, I'm just going to try ``<%= colorData %>` to see if it dumps the contents raw.

somewhat predictably, that got me something like "[object Object],[object Object]", which makes sense, I need to iterate through it. This is not something the class has covered yet, but is supect it's on the ejs site

ok, so the sampel page has a snippet like this

```js
<ul>
  <% users.forEach(function(user){ %>
    <%- include('user/show', {user: user}); %>
  <% }); %>
</ul>

```

so maybe

```js
<ul>
<% colorData.forEach(function(color){ %>
<%- include(color); %>
  <% }); %>

</ul>
```

I feel like this is going to fail because I don't actually know the syntax for `include()` but it may be an educational failure.

Yep, definitely educational failure. Lessons learned:

- Generated an error - TypeError [ERR_INVALID_ARG_TYPE]:
- vscode munged the layout of the include, dunno how that impacts things.

So, let's try a null op

```js
<ul>
<% colorData.forEach(function(color){ %>
<li>Ping</li>
  <% }); %>

</ul>
```

Woo! that worked! So, it definitely suggests I'm misusing th einclude, so let's check the syntax o that.

OH HO! Yes, totally misusing include - that's what I'd use if I have another _FILE_ I wasnt to include, so it's totally the wrong thing. let's try just doing the variable, so :

```js
<ul>
<% colorData.forEach(function(color){ %>
<li><%= color %></li>
  <% }); %>

</ul>
```

ok, that got me a list of [objectObject], but that suggests the problem is my javascript - I'm probably mangling forEach - and I need to extract the color pair values. So, quick and dirty, let's try:

```js
<ul>
<% colorData.forEach(function(colorEntry){ %>
<li><%= colorEntry.color %></li>
  <% }); %>

</ul>
```

**Worked!** got a bulleted list of the color names!

### Incorporating the colors

So, let's say I want it to be `"<li color =XXX>colorName</li>"` - can I just manhandle that in there?

```js
<ul>
<% colorData.forEach(function(colorEntry){ %>
<li style="color:<%= colorEntry.value %>"><%= colorEntry.color %></li>
  <% }); %>

</ul>
```

I feel like the quotes are going to mangle it, but let's see

huh, no, it totally worked, with the sole problem that it is absolutely messing with the parser, so the file is showing as red.

in theory, the `<%` tag without any other modifiers is a space for script elements, so could I maybe set the LI as a string, then use that? Let's try.

```js
<ul>
<% colorData.forEach(function(colorEntry){
    const colorBullet="<li style='color:" + colorEntry.value + "'>"+colorEntry.color + "</li>%>
<%- colorBullet %>
  <% }); %>

</ul>
```

**NOPE** total carcrash. Ok, I think this is the point where I pick up the class again, since I suspect I'm delving into spaces they'll cover.

From the lesson: Turns out you can drop includes straight into the quotes, so the original method was actually right. THough it might be tidier to do:

```js
<ul>
<% colorData.forEach(function(colorEntry){ %>
 <%   const colorBullet="color:" + colorEntry.value %>
<li style="<% =colorBullet %>"><%- colorEntry.color %></li>
  <% }); %>

</ul>
```

Which works ok, but the linter still hates it.

## Following up on includes

Yep, so, includes are snippet .ejs files kept in the views folder (ideally in a subfolder) and canjust be imported vis relative path, with something like

```js
    <%- include("includes/aside", {}) %>
```

(The curly brackets are in case you need to pass information, like maybe the active page)
