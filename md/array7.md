# JavaScript: Sort the items of an array

Write a JavaScript program to sort the items of an array.

::: tip

_Sample array_ : var arr1 = \[ 3, 8, 7, 6, 5, -4, 3, 2, 1 \];  
_Sample Output_ : -4,-3,1,2,3,5,6,7,8

:::

**Sample Solution:** -

**HTML Code:**

```html




Write a JavaScript program to sort the items of an array





```

**JavaScript Code:**

```javascript
var arr1=[-3,8,7,6,5,-4,3,2,1];
var arr2=[];
var min=arr1[0];
var pos;
max=arr1[0];
for (i=0; iarr1[j]) 
                        {
                                min=arr1[j];
                                pos=j;
                        }
                }
        }
        arr2[i]=min;
        arr1[pos]="x";
        min=max;
}
console.log(arr2);

```

Sample Output:

::: tip

\[-4,-3,1,2,3,5,6,7,8\]

:::

**Flowchart:**

![](https://www.w3resource.com/w3r_images/javascript-array-exercise-7.png)  

**ES6 Version:**

```javascript
const arr1=[-3,8,7,6,5,-4,3,2,1];
const arr2=[];
let min=arr1[0];
let pos;
max=arr1[0];
for (i=0; iarr1[j]) 
                        {
                                min=arr1[j];
                                pos=j;
                        }
                }
        }
        arr2[i]=min;
        arr1[pos]="x";
        min=max;
}
console.log(arr2);

```

**Live Demo:**

<section class="expand-codepen"><p data-height="380" data-theme-id="dark" data-slug-hash="VMpRYZ" data-default-tab="js,result" data-user="w3resource" data-embed-version="2" data-pen-title="JavaScript - Sort the items of an array- array-ex- 7" data-editable="true" class="codepen">See the Pen <a href="https://codepen.io/w3resource/pen/VMpRYZ/">JavaScript - Sort the items of an array- array-ex- 7</a> by w3resource (<a href="https://codepen.io/w3resource">@w3resource</a>) on <a href="https://codepen.io">CodePen</a>.</p><codepen></codepen></section>