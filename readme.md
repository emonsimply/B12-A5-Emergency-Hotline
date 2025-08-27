1. What is the difference between getElementById, getElementsByClassName, querySelector / querySelectorAll?
  # getElementById Find one element by ID, getElementsByClassName Finds all elements by class, querySelector Finds the first element, querySelectorAll Finds all elements.

2. How do you create and insert a new element into the DOM?
  # document.createElement("div")

3. What is Event Bubbling and how does it work?
  # when you click an event on a child element, the event also goes up to its parent, then to the grandparent.

4. What is Event Delegation in JavaScript? Why is it useful?
  # Put one event listener on a parent to handle events from its children.

5. What is the difference between preventDefault() and stopPropagation() methods?
  # preventDefault() Stop the browser default action. stopPropagation() Stop the event from bubbling up to parent elements.