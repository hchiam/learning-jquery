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
- all elements with same `class="test"`: `$(".test")`
- all elements `<p>` with `class="test"`: `$("p.test")`
- all elements with same `id="test"`: `$("#test")`
- all elements: `$("*")`

```js
$(document).ready(function () {
  // jQuery methods go here...(prevented from running before doc loaded)
});
```

```js
$(function () {
  // jQuery methods go here...(prevented from running before doc loaded)
  // (just shortcut typing)
});
```

`.ready()` only works on page load --> `.promise().done()` is more likely what you want, and in some cases you might want `.promise().then()` instead

https://api.jquery.com/ready/

https://api.jquery.com/promise/

https://stackoverflow.com/questions/5436327/jquery-deferreds-and-promises-then-vs-done

`:input` and `:button` are examples of special jQuery selectors (not valid CSS selectors)
- `:input` selects `input` tags but also input-like things like `textarea`, `button`, `select` https://stackoverflow.com/a/14863774
  - example usage: https://github.com/hchiam/learning-js/blob/main/getFocusableElements.js
- `:button` selects `button` tags but also `input[type="button"]` https://stackoverflow.com/a/14863774

Pitfall when using `alert`​ for debugging event listeners: https://stackoverflow.com/a/7213895
- will get cryptic `Uncaught TypeError: Illegal invocation` error message when you click: `$('path').on('click', alert);​` because `alert`​ expects `this`​ to be the same as `window​`
- won't error when you click: `$('path').on('click', (x)=>alert(x));​`

Event listener `event.target` vs `event.currentTarget`: https://stackoverflow.com/a/10086501
- `currentTarget` = listening element (e.g. the individual button that has the click event listener fired on it)
- `target` = triggering element (i.e. maybe the button, or maybe the i or span you actually clicked on inside of the button) 

Carousel example: (Bootstrap 5.0.0 + jQuery 3.7.1) https://codepen.io/hchiam/pen/zYQoQpR?editors=1000

```js
function GetNextTabbable(jQueryElement, offset = 1) {
    const tabbables = $(':input, *[tabindex][tabindex!="-1"]').filter(':visible');
    const index = tabbables.index(jQueryElement);
    return tabbables.eq(index + offset);
}
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

$("p").click(function () {
  // action goes here!!
});
```

Example: `<p>'s` that disappear one at a time when dblclicked:

```html
<!DOCTYPE html>
<html>
  <head>
    <script src="http://ajax.googleapis.com/ajax/libs/jquery/1.11.1/jquery.min.js"></script>
    <script>
      $(document).ready(function () {
        $("p").dblclick(function () {
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
  <script src="http://ajax.googleapis.com/ajax/libs/jquery/1.11.1/jquery.min.js"></script>
  <script src="my_jquery_functions.js"></script>
</head>
```

You can use jQuery to get the event listeners registered on an element:

```js
$._data($("#element-being-investigated")[0], "events");
```

</details>

<details><summary>More functions:</summary>

```js
//fadeIn

$(document).ready(function () {
  $("button").click(function () {
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

$(document).ready(function () {
  $("button").click(function () {
    $("#div1").fadeTo("slow", 0.15);
    $("#div2").fadeTo("slow", 0.4);
    $("#div3").fadeTo("slow", 0.7);
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
      $(document).ready(function () {
        $("button").click(function () {
          $("#p1").css("color", "red").slideUp(2000).slideDown(2000);
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

$("#btn1").click(function () {
  $("#test1").text("Hello world!");
});
```

```js
//set attribute:

$("button").click(function () {
  $("#w3s").attr({
    href: "http://www.w3schools.com/jquery",
    title: "W3Schools jQuery Tutorial",
  });
});
```

```js
//get attribute:

$("button").click(function () {
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
      $(document).ready(function () {
        $("button").click(function () {
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

(Link: [a note on using `attr()` vs `prop()`](https://stackoverflow.com/questions/5874652/prop-vs-attr/5876747#5876747))

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
  var txt1 = "<p>Text.</p>"; // Create element with HTML
  var txt2 = $("<p></p>").text("Text."); // Create with jQuery
  var txt3 = document.createElement("p"); // Create with DOM
  txt3.innerHTML = "Text.";
  $("p").append(txt1, txt2, txt3); // Append the new elements
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

Note: a delegated jQuery event listener might not work on the first trigger: for some reason changing `$('body').on('click',` to `$('body').click(` helps make it work on the first click

</details>

<details><summary>select2</summary>

<https://codepen.io/hchiam/pen/WNvMaEx>

</details>

<details><summary>KeyTable DataTable</summary>

<https://codepen.io/hchiam/pen/wvKwZRz>

</details>

<details><summary>"scoped" or namespaced event listeners</summary>

You can namespace events! Helpful for unbinding only the one listener of an event you want to unbind, instead of removing all listeners of the same event type.
  
Example: `.on('click.myNameSpace', function () { });`

<https://css-tricks.com/namespaced-events-jquery>

You can do `.off('.namespace')`: "All events of all types in a specific namespace can be removed from an element by providing just a namespace, such as "`.myPlugin`". At minimum, either a namespace or event name must be provided." https://api.jquery.com/off/#:~:text=All%20events%20of%20all%20types%20in%20a%20specific%20namespace%20can%20be%20removed%20from%20an%20element%20by%20providing%20just%20a%20namespace%2C%20such%20as%20%22.myPlugin%22.%20At%20minimum%2C%20either%20a%20namespace%20or%20event%20name%20must%20be%20provided.

</details>

<details><summary>don't use event.stopPropagation: scoping with 'click.namespace' doesn't filter by 'click.namespace'</summary>

demo and what to do instead: https://codepen.io/hchiam/pen/eYjyRxN?editors=1010

explanation: https://css-tricks.com/dangers-stopping-event-propagation/

</details>

<details><summary>How to avoid memory leaks with jQuery .on (see namespace notes above)</summary>

Make use of namespaced events - https://stackoverflow.com/questions/30793066/how-to-avoid-memory-leaks-from-jquery

</details>

<details><summary>D3 svg/path.click() note</summary>

```js
/** Because simply using d3Element.click() or jQuery $(d3Element).click() doesn't work:
https://stackoverflow.com/questions/9063383/how-to-invoke-click-event-programmatically-in-d3 */
function triggerD3PathClick(d3Element) {
  const event = new MouseEvent("click");
  d3Element.dispatchEvent(event);
}
```

</details>
