# Returns a passed string with letters in alphabetical order

Write a JavaScript function that returns a passed string with letters in alphabetical order.  
_Example string:_ 'webmaster'  
_Expected Output:_ 'abeemrstw'

```
Note: Assume punctuation and numbers symbols are not included in the passed string.. 
```

**Sample Solution**: -

**HTML Code:**

```html
<!DOCTYPE html>
<html>
<head>
<meta charset=utf-8 />
<title>JS Bin</title>
</head>
<body>
  
</body>
</html>

```

**JavaScript Code:**

```js
function alphabet_order(str)
  {
return str.split('').sort().join('');
  }
console.log(alphabet_order("webmaster"));

```

**Explanation:**  
The method is used to split a String object into an array of strings by separating the string into substrings.  
Code : console.log('32243'.split(""));  
Output : \["3", "2", "2", "4", "3"\]  
  
The method is used to sort the elements of an array in place and returns the array.  
Code : console.log(\["3", "2", "2", "4", "3"\].sort());  
Output : \["2", "2", "3", "3", "4"\]  
  
The method is used to join all elements of an array into a string.  
Code : console.log(\["2", "2", "3", "3", "4"\].join(""));  
Output : "22334"

**Flowchart:**

![](https://www.w3resource.com/w3r_images/javascript-function-exercise-4.png)

**Live Demo:**

<section class="expand-codepen"><p data-height="380" data-theme-id="0" data-slug-hash="gGxKyq" data-default-tab="js,result" data-user="w3resource" data-embed-version="2" data-pen-title="JavaScript -Returns a passed string with letters in alphabetical order-function-ex- 4" data-editable="true" class="codepen">See the Pen by w3resource () on .</p><codepen></codepen></section>