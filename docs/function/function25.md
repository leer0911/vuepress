# Accept a list of words and returns the longest

Write a JavaScript function that accept a list of country names as input and returns the longest country name as output

```
Sample function  : Longest_Country_Name(["Australia", "Germany", "United States of America"])
Expected output : "United States of America"
```

**Sample Solution:** -

**HTML Code:**

```html
<!DOCTYPE html>
<html>
<head>
  <meta charset="utf-8">
  <title>Find longest word</title>
</head>
<body>

</body>
</html>

```

**JavaScript Code:**

```js
function Longest_Country_Name(country_name)
  {
  return country_name.reduce(function(lname, country) 
  {
    return lname.length > country.length ? lname : country;
  }, 
"");
}
console.log(Longest_Country_Name(["Australia", "Germany", "United States of America"]));

```

**Flowchart:**

![](https://www.w3resource.com/w3r_images/javascript-function-exercise-25.png)

**Live Demo:**

<section class="expand-codepen"><p data-height="380" data-theme-id="0" data-slug-hash="PJKdLE" data-default-tab="js,result" data-user="w3resource" data-embed-version="2" data-pen-title="JavaScript - Bubble Sort algorithm-function-ex- 24" data-editable="true" class="codepen">See the Pen by w3resource () on .</p><codepen></codepen></section>