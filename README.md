# 总结

* Write a JavaScript function to check whether an 'input' is an array or not.

```js
toString.call(input) === '[object Array]';
```

* Write a JavaScript function to clone an array.

```js
arr.slice(0);
```

* Write a JavaScript function to get the first element of an array. Passing a parameter 'n' will return the first 'n' elements of the array.

```js
if (n === null) {
  return arr[0];
} else {
  arr.slice(0, n);
}
```

* Write a JavaScript function to get the last element of an array. Passing a parameter 'n' will return the last 'n' elements of the array.

```js
if (n === null) {
  return arr[0];
} else {
  arr.slice(0, n);
}
```
