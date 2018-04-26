### Overflow scroll gradient

Adds a fading gradient to an overflowing element to better indicate there is more content to be scrolled.

#### HTML

```html
<div class="overflow-scroll-gradient">
  <div class="overflow-scroll-gradient__scroller">
    Content to be scrolled
  </div>
</div>
```

#### CSS

```css
.overflow-scroll-gradient {
  position: relative;
}
.overflow-scroll-gradient::after {
  content: '';
  position: absolute;
  bottom: 0;
  width: 240px;
  height: 25px;
  background: linear-gradient(
    rgba(255, 255, 255, 0.001),
    white
  ); /* transparent keyword is broken in Safari */
  pointer-events: none;
}
.overflow-scroll-gradient__scroller {
  overflow-y: scroll;
  background: white;
  width: 240px;
  height: 200px;
  padding: 15px 0;
  line-height: 1.2;
  text-align: center;
}
```

#### Demo

<div class="snippet-demo">
  <div class="snippet-demo__overflow-scroll-gradient">
    <div class="snippet-demo__overflow-scroll-gradient__scroller">
      Content to be scrolled
    </div>
  </div>
</div>

<style>
.snippet-demo__overflow-scroll-gradient {
  position: relative;
}
.snippet-demo__overflow-scroll-gradient::after {
  content: '';
  background: linear-gradient(rgba(255, 255, 255, 0.001), white);
  position: absolute;
  width: 240px;
  height: 25px;
  bottom: 0;
  pointer-events: none;
}
.snippet-demo__overflow-scroll-gradient__scroller {
  overflow-y: scroll;
  background: white;
  width: 240px;
  height: 200px;
  padding: 15px 0;
  line-height: 1.2;
  text-align: center;
}
</style>

<script>
document.querySelector('.snippet-demo__overflow-scroll-gradient__scroller').innerHTML = 'content '.repeat(100)
</script>

#### Explanation

1. `position: relative` on the parent establishes a Cartesian positioning context for pseudo-elements.
2. `::after` defines a pseudo element.
3. `background-image: linear-gradient(...)` adds a linear gradient that fades from transparent to white
   (top to bottom).
4. `position: absolute` takes the pseudo element out of the flow of the document and positions it in relation to the parent.
5. `width: 240px` matches the size of the scrolling element (which is a child of the parent that has
   the pseudo element).
6. `height: 25px` is the height of the fading gradient pseudo-element, which should be kept relatively small.
7. `bottom: 0` positions the pseudo-element at the bottom of the parent.
8. `pointer-events: none` specifies that the pseudo-element cannot be a target of mouse events, allowing text behind it to still be selectable/interactive.

#### Browser support

<span class="snippet__support-note">✅ No caveats.</span>

* https://caniuse.com/#feat=css-gradients

<!-- tags: visual -->
