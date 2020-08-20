# Learning jQuery

jQuery is a JavaScript library for easier writing of JS for a website.

Just one of the things I'm learning. https://github.com/hchiam/learning

jQuery greatly simplifies JavaScript programming (can be good for webpage UI).

```html
<head>
<script src="http://ajax.googleapis.com/ajax/libs/jquery/1.11.1/jquery.min.js"></script>
</head>
```

With jQuery you select (query) HTML elements and perform "actions" on them.
http://www.w3schools.com/jquery/jquery_syntax.asp

- one current element: `$(this).hide()`
- all elements with same `<p>` tag: `$("p")`
- all elements with same `class="test"`: 	`$(".test")`
- all elements `<p>` with `class="test"`: `$("p.test")`
- all elements with same `id="test"`: `$("#test")`
- all elements: `$("*")`

```js
$(document).ready(function(){

   // jQuery methods go here...(prevented from running before doc loaded)

});
```

```js
$(function(){

   // jQuery methods go here...(prevented from running before doc loaded)
   // (just shortcut typing)

});
```

Click to expand and learn more:

<details><summary>Event methods</summary>

click
dblclick
mousedown
mouseenter
keypress
submit
change
focus
load
scroll
resize

```js
//If click then do action:

$("p").click(function(){
  // action goes here!!
});
```


Example:  `<p>'s` that disappear one at a time when dblclicked:

```html
<!DOCTYPE html>
<html>
<head>
<script src="http://ajax.googleapis.com/ajax/libs/jquery/1.11.1/jquery.min.js"></script>
<script>
$(document).ready(function(){
  $("p").dblclick(function(){
    $(this).hide();
  });
});
</script>
</head>
<body>

<p>If you double-click on me, I will disappear.</p>
<p>Click me away!</p>
<p>Click me too!</p>

</body>
</html>
```

If need to put functions in a separate file my_jquery_functions.js:

```html
<head>
<script src="http://ajax.googleapis.com/ajax/libs/jquery/1.11.1/jquery.min.js">
</script>
<script src="my_jquery_functions.js"></script>
</head>
```

You can use jQuery to get the event listeners registered on an element:

```js
$._data($('#element-being-investigated')[0], 'events');
```

</details>

<details><summary>More functions:</summary>

```js
//fadeIn

$(document).ready(function(){
  $("button").click(function(){
    $("#div1").fadeIn();
    $("#div2").fadeIn("slow");
    $("#div3").fadeIn(3000);
  });
});
```

```js
//fadeToggle
$(document).ready(function(){
  $("button").click(function(){
    $("#div1").fadeToggle();
    $("#div2").fadeToggle("slow");
    $("#div3").fadeToggle(3000);
  });
```

```js
//fadeTo

$(document).ready(function(){
  $("button").click(function(){
    $("#div1").fadeTo("slow",0.15);
    $("#div2").fadeTo("slow",0.4);
    $("#div3").fadeTo("slow",0.7);
  });
});
```

```html
// MULITPLE FUNCTIONS ALL AT ONCE:

<!DOCTYPE html>
<html>
<head>
<script src="http://ajax.googleapis.com/ajax/libs/jquery/1.11.1/jquery.min.js"></script>
<script>
$(document).ready(function()
  {
  $("button").click(function(){
    $("#p1").css("color","red")
      .slideUp(2000)
      .slideDown(2000);
    // could also just do:  $("#p1").css("color","red").slideUp(2000).slideDown(2000);
    // note that the slideUp and slideDown are done in order (as expected)

  });
});
</script>
</head>
<body>

<p id="p1">jQuery is fun!!</p>
<button>Click me</button>

</body>
</html>
```

```js
//get content:

alert("Text: " + $("#test").text());

//set contentL

$("#btn1").click(function(){
  $("#test1").text("Hello world!");
});
```

```js
//set attribute:

$("button").click(function(){
  $("#w3s").attr({
    "href" : "http://www.w3schools.com/jquery",
    "title" : "W3Schools jQuery Tutorial"
  });
});
```

```js
//get attribute:

$("button").click(function(){
  alert($("#w3s").attr("href"));
});
```

```html
//example:
<!DOCTYPE html>
<html>
<head>
<script src="http://ajax.googleapis.com/ajax/libs/jquery/1.11.1/jquery.min.js"></script>
<script>
$(document).ready(function(){
  $("button").click(function(){
    alert($("#w3s").attr("href"));
  });
});
</script>
</head>

<body>
<p><a href="http://www.w3schools.com" id="w3s">W3Schools.com</a></p>
<button>Show href Value</button>
</body>
</html>
```

```js
//rid it + its children:
$("#div1").remove();

//rid it of its children:
$("#div1").empty();

//remove all <p>'s with italic
$("p").remove(".italic");
```

```js
//add after:
$("p").append("Some appended text.");

//add before:
$("p").prepend("Some prepended text.");
```

```js
//append multiple <p>'s:
function appendText() {
    var txt1 = "<p>Text.</p>";               // Create element with HTML  
    var txt2 = $("<p></p>").text("Text.");   // Create with jQuery
    var txt3 = document.createElement("p");  // Create with DOM
    txt3.innerHTML = "Text.";
    $("p").append(txt1, txt2, txt3);         // Append the new elements 
}
```

```js
//insert text after an image:
$("img").after("Some text after");

//insert text before an image:
$("img").before("Some text before");
```

</details>

<details><summary>Better performance when using selectors</summary>

When jQuery looks at the string inside `$('...')`, it searches from right to left (so `.this-last .this-second .this-first`).

Prefer: (id) over (tag name with class) over (class).

For example, from fastest to slowest: `$('#some-id')` is faster than `$('a.some-class')` is faster than `$('.some-class')`.

A helpful pattern to remember is: `var cache = $('#container').find('div.some-class')`.

That is actually _faster_ than `var cache = $('#container div.some-class')`, because, again, jQuery searches right-to-left inside the selector string, which means it looks for `div.some-class` before filtering for instances that are inside of an element with id `#container`.

</details>

<details><summary>Delegated event handling</summary>

You can dynamically add event listeners to children elements that don't exist yet!

`$('#parent').on("click", "#child", function() {});`

</details>

<details><summary>select2</summary>

<https://codepen.io/hchiam/pen/WNvMaEx>

</details>

<details><summary>KeyTable DataTable</summary>

<https://codepen.io/hchiam/pen/wvKwZRz>

</details>
