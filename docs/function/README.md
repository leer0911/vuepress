# Reverse a number

Write a JavaScript function that reverse a number.  
Sample Data and output:  
Example x = 32243;  
Expected Output: 34223

```
Sample Solution:  -
```

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
function reverse_a_number(n)
{
	n = n + "";
	return n.split("").reverse().join("");
}
console.log(reverse_a_number(32243));

```

**Explanation:**  
Assume n = 1000.  
Convert a number to a string :  
Code : -> n = n + "";  
Note : There are different ways to convert number to string :

*   String literal -> str = "" + num + "";
*   String constructor -> str = String(num);
*   toString -> str = num.toString();
*   String Literal simple -> str = "" + num;  
    

The method is used to split a String object into an array of strings by separating the string into substrings.  
Code : console.log('1000'.split(""));  
Output : \["1", "0", "0", "0"\]  
  
The method is used to reverse an array in place. The first array element becomes the last and the last becomes the first.  
Code : console.log(\["1", "0", "0", "0"\].reverse());  
Output : \["0", "0", "0", "1"\]  
  
The method is used to join all elements of an array into a string.  
Code : console.log(\["1", "0", "0", "0"\].reverse().join(""));  
Output : "0001"

**Flowchart:**

![](https://www.w3resource.com/w3r_images/javascript-function-exercise-1.png)

**Live Demo:**

<section class="expand-codepen"><p data-height="380" data-theme-id="0" data-slug-hash="zEzXeG" data-default-tab="js,result" data-user="w3resource" data-embed-version="2" data-pen-title="JavaScript -Reverse a number-function-ex- 1" data-editable="true" class="codepen">See the Pen by w3resource () on .</p><codepen></codepen></section>