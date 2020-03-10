# React-focused-test
**Javascript Section** 

**Q1. What is your favourite new javascript feature and why?**

Ans: There are so many javascript features that have changed my way of coding. Such as **Object/Array Destruction**. I consider it as my favourite javascript feature, just because it simplify to way to access to certain nested object properies in the shortest possible manner.

**Q2. Explain an interesting way in which you have used this javascript feature.**

Ans: **Object/Array Destruction**, I used it often when I am dealing with component props, f.e. accessing a particular property. 

Example 1 : Object destruction
`const { isVisible } = props;
console.log(isVisible);`

Example 2 : Array destruction
`const [isVisible, setVisible ] = useState(false);`

**Q3. Is there any difference between regular function syntax and the shorter arrow function syntax? (Write the answer in your own words)**

Ans: There two different way to declare a function in javascript.
- Regular function syntax: `function doSomething(){}`
- Arrow function syntax: `const doSomething = () => {}`

**Q4: What is the difference between ‘myFunctionCall(++foo)’   and  ‘myFunctionCall(foo++)’**

The prefix increment return the value of the variable after it has been incremented, so in case of `myFunctionCall(++foo)`, it takes as param the new value of `foo` variable.

e.g. `let foo = 0; console.log(++foo) // that should return in the console 1`
e.g. `let foo = 0; console.log(foo++) // that should return in the console 0`

**Q5: In your own words, explain what a javascript ‘class’ is and how it differs from a function.**

- Classes can be called using `new classContructorName()`, but in case of function, it's simply by its signature.
- A class in Javascript is distinguished by its contructor function, its methods.
- A class can inherit from other classes, but functions can't.

**CSS Section** 

**Q6: skipped**
**Q7: In your own words, explain, what is ‘!important’ in css.  Also how does it work?  Are there any special circumstances when using it, where it’s behaviour might not be what you expect?**

Ans: `!important` is a css rule used when you want to override certain css property that is already defined inside an existing html element style. It probably won't do the expected when that property we want to override has already a high level rule (f.e. !veryimportant). 

**Q8: What is your prefered layout system: inline-block, floating + clearing, flex, grid, other?  And why?**

Ans: I prefer using grid layout system because it offers flexibelity to place element inside different screen sizes.

**Q9: Are negative margins legal and what do they do (margin: -20px)?**

Ans: Using negative margins is almost a good practise in certain situtations, it allows to move element outside their relative parent element. f.e. placing  a close button just on the top-right corner of a modal, that should makes the job :)

**Unit tests**

**Q10: What technologies do you use to unit test your react components?**
Recently, I've written a good bench of tests using Enzyme library (based on jest).

**Are there any pitfalls associated with this technology that have caused you difficulty in the past?**
I've not yet faced any difficulties with that tehcnology.

**How do you test in your unit tests to see if the correct properties are being passed to child components.**
`const wrapper = mount(component); expect(component.props().propName).toEqual(value)`


