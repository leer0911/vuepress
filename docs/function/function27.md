# The longest palindrome in a specified string

Write a JavaScript function that returns the longest palindrome in a given string.

```
Note: According to Wikipedia "In computer science, the longest palindromic substring or longest symmetric factor problem is 
the problem of finding a maximum-length contiguous substring of a given string that is also a palindrome.
For example, the longest palindromic substring of "bananas" is "anana".
The longest palindromic substring is not guaranteed to be unique; for example,
in the string "abracadabra", there is no palindromic substring with length greater than three,
but there are two palindromic substrings with length three, namely, "aca" and "ada".
In some applications it may be necessary to return all maximal
palindromic substrings (that is, all substrings that are themselves palindromes and cannot
be extended to larger palindromic substrings) rather than returning only one substring or
returning the maximum length of a palindromic substring.
```

**Sample Solution:** -

**HTML Code:**

```html
<!DOCTYPE html>
<html>
<head>
  <meta charset="utf-8">
  <title>Write a JavaScript function that returns the longest palindrome in a given string</title>
</head>
<body>

</body>
</html>

```

**JavaScript Code:**

```html
function is_Palindrome(str1) {
var rev = str1.split("").reverse().join("");
return str1 == rev;
}

function longest_palindrome(str1){

var max_length = 0,
maxp = '';

for(var i=0; i < str1.length; i++) 
{
var subs = str1.substr(i, str1.length);

for(var j=subs.length; j>=0; j--) 
{
var sub_subs_str = subs.substr(0, j);
if (sub_subs_str.length <= 1)
continue;

if (is_Palindrome(sub_subs_str))
{
if (sub_subs_str.length > max_length) 
{
max_length = sub_subs_str.length;
maxp = sub_subs_str;
}
}
}
}

return maxp;
}
console.log(longest_palindrome("abracadabra"));

console.log(longest_palindrome("HYTBCABADEFGHABCDEDCBAGHTFYW12345678987654321ZWETYGDE")); 

```

**Flowchart:**

![](https://www.w3resource.com/w3r_images/javascript-function-exercise-27.png)

**Live Demo:**

<section class="expand-codepen"><p data-height="380" data-theme-id="0" data-slug-hash="bormwQ" data-default-tab="js,result" data-user="w3resource" data-embed-version="2" data-pen-title="JavaScript - The longest palindrome in a specified string-function-ex- 27" data-editable="true" class="codepen">See the Pen by w3resource () on .</p><codepen></codepen></section>