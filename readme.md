# Block Level Elements

- The elements that start on a new line and take up the full width available are called block-level elements.

- Examples:
  - `<div>`, `<h1>`, `<p>`, `<ul>`, `<li>`, etc.

# Inline Elements

- The elements that do not start on a new line and only take up as much width as necessary are called inline elements.

- Examples:
  - `<span>`, `<a>`, `<strong>`, `<em>`, `<img>`, etc.

## CSS Positioning

1. Static Positioning
   - Default positioning for HTML elements.
   - Elements are positioned according to the normal flow of the document.

2. Fixed Positioning
   - Elements are positioned relative to the viewport.
   - They remain in the same position even when the page is scrolled.
   - We can use `top`, `bottom`, `left`, and `right` properties to specify the position.

3. Sticky Positioning
   - Elements are treated as relative until they reach a specified scroll position, then they become fixed.
   - We can use `top`, `bottom`, `left`, and `right` properties to specify the position. But it only works when scrolling occurs in the parent element. Mostly with the `top` property.

4. Relative Positioning
   - Elements are positioned relative to their normal position.
   - We can use `top`, `bottom`, `left`, and `right` properties to move the element from its normal position.
