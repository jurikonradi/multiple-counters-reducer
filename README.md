## Demo

[link](http://yurikonradi.izziwebstudio.com/code-examples/multiple-counters/index.html)

---
# Form

### Button add (+)

- create one more input with increase and decrease button

### Input

- numbers only
- editable

### Actions (separate component)

- Button increase - increase input value
- Button decrease - decrease input value

### Button save

- save input value

### Button restore

- restore previously saved number and set to input field
- if no saved value - 0
- disabled if nothing was changed

### Form should be refresh proof

- not implemented

---

# Made with React & useReducer

State for all inputs is saved inside parent component. **Disadvantage**: all components re-renders by changes in any input.

Responsive

Numeric keyboard appears on mobiles
