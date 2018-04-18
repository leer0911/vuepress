# Find longest substring in a given a string without repeating characters

Write a JavaScript function to find longest substring in a given a string without repeating characters.

```
Sample Solution:  -
```

**HTML Code:**

```html
<!DOCTYPE html>
<html>
<head>
  <meta charset="utf-8">
  <title>Find longest substring in a given a string without repeating characters</title>
</head>
<body>

</body>
</html>

```

**JavaScript Code:**

```js
function longest_substring_without_repeating_characters(input) {
var chars = input.split('');
var curr_char;
var str = "";
var longest_string = "";
var hash = {};
for (var i = 0; i < chars.length; i++) {
curr_char = chars[i];
if (!hash[chars[i]]) 
{ 
str += curr_char; 
hash[chars[i]] = {index:i};
}
else 
{
if(longest_string.length <= str.length)
{
longest_string = str;
}
var prev_dupeIndex = hash[curr_char].index;
var str_FromPrevDupe = input.substring(prev_dupeIndex + 1, i);
str = str_FromPrevDupe + curr_char;
hash = {};
for (var j = prev_dupeIndex + 1; j <= i; j++) {
hash[input.charAt(j)] = {index:j};
}
}
}
return longest_string.length > str.length ? longest_string : str;
}
console.log(longest_substring_without_repeating_characters("google.com")); 

console.log(longest_substring_without_repeating_characters("example.com")); 

```

**Flowchart:**

![](https://www.w3resource.com/w3r_images/javascript-function-exercise-26.png)

**Live Demo:**

<section class="expand-codepen"><p data-height="380" data-theme-id="0" data-slug-hash="WZEawL" data-default-tab="js,result" data-user="w3resource" data-embed-version="2" data-pen-title="JavaScript - Find longest substring in a given a string without repeating characters-function-ex- 26" data-editable="true" class="codepen">See the Pen by w3resource () on .</p><codepen></codepen></section>