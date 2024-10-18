# Basic Components:-

1. React is extremely popular ,declarative, component based , state driven js library for building interfaces.

2. Whenever the state changes , react reacts to the changes by re-rendering the UI.

3. React is also called the view layer.

4. React is an abstraction away from dom.

4. cra and vite are tool chains used to create react apps.

5. cra used some slow and outdated technologies like webpack bundler 

6. Hot module reloading:- Whenever the code changes automatically page refeeshes.

7. jsx is simply a syntax that combines html,css ,js as well as referencing other components.

8. Babel is a transpiler which converts jsx code to raw js code. 

9. Template literal `${}` ke andar optional chaining ? use nahi ho sakta hai.

10. There are two options for creating react scaffolding:-
(a) cra (create react app)
(b) vite

11. If you will create large scale application using cra then you will face problems like slow refresh (large refresh time)

12. In vite hot module reloading is very fast so now it is being used to make large scale apps.

13. React strict mode is a development only feature and does not impact applications on production.In development mode react strict mode renders all the component twice.

14. Never write two components in the same file.

15. To apply inline styling use style props where style is passed as an object.

16. While using style props write the css properties in camel case.

17. For class use className

18. @import url('path to css file') (wheteher in repository or on internt) used to impprt other css files inside a css file

19. filename.module.css used to style things in local scope . If we use normal css files then style will happen in global scope.

20. You cannot export anything inside a function. To export something you have to be in global scope.



22. onClick={()=>fun(p1,p2)}

23. onClick={(e)=>fun(e,p1,p2)} (Way to pass event listener)

24. onClick={fun()}=> It executes fun() before clicking and nothing happens after clicking.

25. In {} you can write anything which produces a value.

26. A piece of jsx produces js expression.

27. A piece of jsx can have excatly one root or parent element. 

28. You can use React.Fragment to return multiple elements in jsx . It can only have key and children as props.

29. css inline styles are written like {{styles}}

30. Comments needs to be in {} because they are in js

31. Jab bhi loop lagao key props hamesha use karo.

32. {true} or {false} we are not able to see the output.

33. In js [] is considered as true and [] in python considered as false

34. {condition && (rendering)}

35. 0 is falsly value.

36. {
  condition?():()
}
or sometimes:
{
  condition ?():null
}

37. Insted of using <></> use <React.Fragment></React.Fragment> as when passing key props we have the only option of writing <React.Fragment></React.Fragment>

38. Apply styles in class dynamically:
className={condition?"claa1":"class2"}

39. You should only use index as key in the following cases:-
(a) Data is static
(b) No reordering to be done on data
(c) Absence of unique identifier

40. To handle event listeners in react use callback functions.

41. To increase the height of a <div> element using percentages in CSS, you can set the height property to a percentage value. The percentage is relative to the height of the parent element. If the parent element does not have a defined height, the percentage will not have a reference point, and the <div> may not behave as expected.

42. Mac ke andar se wahi video file etc read kar sakta hai jisme code sanitization ho. Iss case me bass angular hi use hoga na ki react.

43. Reactjs me bana hua website seo friendly nahi hai.

44. Package.json ke bina react application run nahi hoga.

45. Some example of markup language : html, xml

46. {} ke andar js ka koi bhi code likha jaa sakta hai. But domt use ;

47. package.json has declaration for all libraries.

48. Component ke andar markup aur js ka code hota hai.

49. Kabhi bhi object directly ui me render nahi hota hai . Usko string me convert karna padta hain.

50. Jisme padding kaam na kare matlab wo block element nahi hai. Uss case me display:block use karo

51. Public folder ke andar images naam ka folder hai. 
src="./images/image_name.png" to get image. Aap apne project me kisi bhi folder par ho yadi aapko public folder ko access karna hai then ./folder-inside-public-folder

52. padding me top , bottom fir left and right.

53. Jab anchor tag me padding margin etc kaam na kare then use display:block and then use padding and margin.

54. To display same react code in mobile and laptop:
Go to ip config and see the ip config.
ip config:port on mobile will render the app
Both mobile and laptop should be connected to same internet connection.

55. Jsx me kabhi bhi object nahi print ho sakta hai . Array aur normal variables print ho sakta hai.

56. To print an object in jsx use JSON.stringify(obj)

57. If you try to print object you will get this error: Uncaught Error: Objects are not valid as a React child 

58. React markup code ko xml ke shabdo me process karta hai.

59. Jab bhi design upar neeche dikhae background color change karke dekh lo.

60. Kabhi bhi index.js file ka code ko mat touch karo.

61. Important websites:
- google images
- google fonts
- font awesome
- unDraw
- Ant design
- Tailwind
- html entity

62. Single page application ka bahut bada disadvantage hai ki uska data server par cache nahi hota hai. Agar uska data server par cache nahi hoga to wo google ke search me nahi aayega.

63. pseudo class hum log inline style props ka maddad se nahi de paayenge.

64. !important tab use karte hain jab external stylesheet ka priority low hojata hai inline styling ke karan.

65. ::-webkit-scrollbar . This is pseudo element for scrollbar selector webkit is used so that is works on all recent browsers.

66. index.css global css ka file hai. Poore application ka css yaha hi likenge.

67. Agar koi css property parent me dete hain to wo child par bhi reflect hota hai
eg : If i apply style on div then it wiil also be shown on p and h1
<div>
<p>
</p>
<h1>
</h1>
</div>

68. kabhi footer me height mat dijiyega usse responsibe me dikkat hoga . Usse better hai usme padding dena.

69. Libraries for icons:-
- font awesone
- ant icons
- material icons
- hero icons
- icons8
- ion icons
- remix icons

70. Icons etc ka humlog global setup karte hain naki local . Css ka global setup ke liye index.css aur js library ka local setup ke liye app.jsx

71. https://cssgradient.io/

72. margin auto matlab jitna jagah baaki rahega half half bat jaayega.

73. The flexWrap property is a CSS property used in the Flexbox layout model. It controls how flex items are wrapped within a flex container when there isn’t enough space in a single line. 

74. gap , columnGap, rowGap:

75. Map ke andar parent element me key props use karo. 

76. const [a,b]=[1,2] // Array desctructuring

77. const {roll,name,subject}={
  name:"Rahul",
  roll:"76",
  subject:"maths"
};

78. const name="Rahul";
// This name can be accessed using firstname
const {roll,name:firstname,subject}={
  name:"Atul",
  roll:"87",
  subject:"chemistry"
}

79. Jab tak duplicacy ka problem nahi aaye tab tak alias nahi define karna chahiye.

80. const {one:{maths},two:{maths:math}}={
  one:{
    "english":"ravi",
    "maths":"rahul"
  },
  two:{
    "english":"sikha",
    "maths":"riya"
  }
}

81. Mac me code sanitisation ka concept hota hai iss liye mac ka default browser me kabhi bhi aap same mac ka computer se video play nahi kar paayenge.

82. Coomon html tags
- <nav></nav>
- <footer></footer>
- <section></section>
- <div></div>
- <ul></ul>
- <li></li>
- <a href=""></a>
- <header></header>




83. Internally html tag xml ke tarah se process hota hai issliye attribute ko property bolo.

84.  Jisme padding,margin ,width , height kaam na kare wo block level element nahi hai . Usko block level element banao display:block

85. margin: auto (Empty space left-right , top-bottom me equally divide hoga )

86. CSS Modules provide a way to scope CSS styles locally to individual React components. Styles defined in CSS Modules are automatically scoped to the component where they are imported, preventing style conflicts and promoting encapsulation. CSS Modules are a popular choice for styling React components in larger applications.

87. Vite  me jaruri hai ki component (markup return karne wala code) ko .jsx me hi save karo.

88. Markup ke beech me {} ka matlab jsx

89. Browser me directly object nahi print ho sakta . Lekin array aur primitive variable ho sakta hai.

90. JSON.stringify() and JSON.parse()

91. React me humlog property bolte hain naa ki attribute.

92. unDraw website used to get illustrations based photos.

93. In single page application complete webpage is loaded at once. So if you click on link then it will be loaded directly from the server. So the request is not cached at server. So it is not SEO friendly.

94. Pseudo classes hum log internal aur inline css me use nahi kar sakte hain.

95. Different icons for react:
- ant icons
- font awesome
- material icons
- icons8
- ion icons
- remix icons

96. Behind the scenes vs code ka terminal aapka computer ka terminal ko hi use karta hai.

97. Photo ka naam start number se nahi hoga

98. css-gradient.io

99. event.target ==> event kisme laga hua hai

100. The two code snippets you've provided are almost identical in functionality, but they differ in the **scope** and **placement** of the `handleSubmit` function. Let's break down the differences:

Code 1: `handleSubmit` defined inside the component

```jsx
const App = () => {
  const handleSubmit = () => {
    console.log("Hello World");
  }
  return (
    <button onClick={handleSubmit}>Submit</button>
  );
}

export default App;
```

- **`handleSubmit` is defined inside the `App` component.**
- This means that every time the `App` component renders, a new instance of the `handleSubmit` function is created.
- **Scope**: The `handleSubmit` function exists only within the `App` component. It cannot be accessed from outside the component.
- **Re-renders**: During re-renders, this approach might impact performance, especially if the component is rendered frequently because a new function will be created each time the component renders.

Code 2: `handleSubmit` defined outside the component

```jsx
const handleSubmit = () => {
  console.log("Hello World");
};

const App = () => {
  return (
    <button onClick={handleSubmit}>Submit</button>
  );
}

export default App;
```

- **`handleSubmit` is defined outside the `App` component.**
- This means that the function is declared once and reused across multiple renders of the `App` component.
- **Scope**: The `handleSubmit` function exists in the broader module scope, meaning it can be used by other components or code in the same file, making it more reusable if needed elsewhere.
- **Re-renders**: Since the function is not created during each render, it could lead to better performance in scenarios where the `App` component is frequently re-rendered.

Key Differences

1. **Function Scope**:
   - **Code 1**: `handleSubmit` is local to the `App` component.
   - **Code 2**: `handleSubmit` is in the global (module) scope, so it can be reused in other parts of the same file.

2. **Performance**:
   - **Code 1**: A new instance of the `handleSubmit` function is created on each render of the `App` component, which could be inefficient in scenarios with frequent renders.
   - **Code 2**: `handleSubmit` is created only once and reused, making it more performant in case of frequent re-renders.

3. **Reusability**:
   - **Code 1**: The function is specific to `App` and can't be used by other components in the same file.
   - **Code 2**: The function can be reused by other components or code within the same file.

When to use which:
- **Code 1** is suitable when the function is specific to the component and unlikely to be used elsewhere.
- **Code 2** is better if the function might be reused in other parts of the code or if you want to avoid unnecessary re-creations of the function during re-renders.

101. {
          nameList.length>0 && nameList.map((name,index)=>(
            <p key={index}>{name}</p>
          ))
        }
Never use :
{
          nameList.length && nameList.map((name,index)=>(
            <p key={index}>{name}</p>
          ))
        }
As it will also print nameList.length if nameList.length==0 

101. Boolean value is never displayed on browser.

102. key props hamesh parent element me diya jaata hain loop ke andar.

103. pixels.com for photos

104. Pehle static design banao fir usko dynamic karo.

105. [key]: value in object if key is variable

106. 

# State and  Props:


1. Props are used to pass data from parent to child . They are read only and they should not be modified by the child (unless they are used as lifting of state).

2. In react it is a rule that the component must be pure functions in terms of props and states.

3. Props are immutable i.e child component cannot modify them unless they are state variables. If the props is an object then it can be modified in child component but that is not a good practice.

4. Props is one way data flow . You can only pass props from parent to child. For two way data flow you need lifting of the state

5. 

  Question:  const Dummy=({name})=>{
    console.log(`Dummy component rendered`);
    name="Atul";
    return (
      <h1>{name}</h1>
    );
  }

  export default Dummy;
  import "./App.css";
  import Dummy from './components/Dummy';

  const callConsole=()=>{
    console.log("Hello World");
    return <h1>Work done</h1>
  }
  function App() {
    console.log("App component rendered")
    return (
      <>
        <div>Hello World</div>
        {
          callConsole()
        }
        <Dummy name="Rahul"/>
      </>
    );
  }

  export default App;

  props are immutatble. How this is happening that in child component it is getting changed?

  Ans: In React, props are immutable by default, which means that the values passed from the parent component to the child component cannot be directly modified within the child component. However, in your code, you are modifying the `name` prop inside the `Dummy` component, which is not the correct way to handle props.

  Here's what's happening in your code:

  1. In the `Dummy` component, you have the following code:

  ```jsx
  const Dummy = ({ name }) => {
    console.log(`Dummy component rendered`);
    name = "Atul"; // Modifying the prop directly
    return (
      <h1>{name}</h1>
    );
  };
  ```

  When you assign a new value to the `name` prop (`name = "Atul"`), it creates a new local variable named `name` within the scope of the `Dummy` component. This local variable shadows the prop with the same name, but it does not actually modify the original prop passed from the parent component.

  2. In the `App` component, you are passing the string `"Rahul"` as the value for the `name` prop when rendering the `Dummy` component:

  ```jsx
  <Dummy name="Rahul" />
  ```

  3. When the `Dummy` component is rendered, it logs `"Dummy component rendered"` to the console, but the `name` prop is not being used to render the `<h1>` element. Instead, the local variable `name` with the value `"Atul"` is used.

  4. The actual value of the `name` prop passed from the `App` component (`"Rahul"`) is never used or displayed in the `Dummy` component.

  To properly handle props in React, you should avoid modifying them directly within the child component. Props are designed to be read-only values passed from the parent component to the child component.

  If you need to update the state based on the prop value, you can use the `useState` hook and initialize it with the prop value:

```jsx
  import { useState } from 'react';

  const Dummy = ({ name }) => {
    console.log(`Dummy component rendered`);
    const [localName, setLocalName] = useState(name);
    // Now you can use localName and setLocalName to update the state
    return (
      <h1>{localName}</h1>
    );
  };
  ```

  In this updated code, the `name` prop is used to initialize the `localName` state variable using the `useState` hook. You can then use `localName` to render the component and `setLocalName` to update the state if needed, without modifying the original prop.

6. 

const Dummy=(props)=>{
  console.log(`Dummy component rendered`);
  props.name="Atul";
  return (
    <h1>{props.name}</h1>
  );
}

export default Dummy;


import "./App.css";
import Dummy from './components/Dummy';

const callConsole=()=>{
  console.log("Hello World");
  return <h1>Work done</h1>
}
function App() {
  console.log("App component rendered")
  return (
    <>
      <div>Hello World</div>
      {
        callConsole()
      }
      <Dummy name="Rahul"/>
    </>
  );
}

export default App;

Here you will get error:

react-dom_client.js?v=3bf25f9e:19411 Uncaught TypeError: Cannot assign to read only property 'name' of object '#<Object>'



7. The potential flaw in the code snippet you provided is that it may not produce the expected result due to the asynchronous nature of the `setState` function in React.

```javascript
setCount(count + 1);
setCount(count + 1);
setCount(count + 1);
setCount(count + 1);
```

The issue is that the `count` variable used in each `setCount` call is the initial value of the state, not the updated value from the previous `setCount` call. This is because the state updates are batched and applied asynchronously by React.

Here's how it works:

1. The first `setCount(count + 1)` call updates the state, but the new state value is not immediately available.
2. The next three `setCount(count + 1)` calls also use the initial `count` value, not the updated value from the previous call.
3. The final state value may not be what you expect, as it only reflects the last `setCount` call, not the cumulative updates.

To ensure that the state updates are applied correctly, you should use the functional form of `setState`, which provides the previous state as a parameter:

```javascript
setCount((prevCount) => prevCount + 1);
setCount((prevCount) => prevCount + 1);
setCount((prevCount) => prevCount + 1);
setCount((prevCount) => prevCount + 1);
```

In this updated version, each `setCount` call uses the previous state value (`prevCount`) to calculate the new state, ensuring that the updates are applied correctly and the final state reflects the cumulative changes.

Alternatively, you can combine multiple state updates into a single `setCount` call:

```javascript
setCount(count => count + 4);
```

This will update the state by adding 4 to the current value, which is equivalent to the four separate `setCount` calls in the original example.

By using the functional form of `setState` or combining multiple updates into a single call, you can avoid the potential issues caused by the asynchronous nature of state updates in React.

8. By default children par bhi same css apply ho jata hain parent ke hisab se.

9. Using index as key is an anti-pattern :
Using the index of an array as the `key` prop when rendering a list of items in React is considered an anti-pattern for the following reasons:

   1. It can lead to performance issues

    When you use the index as the `key`, React doesn't have a stable identifier for each item. If the order of the items changes or if items are added or removed, React may re-render more items than necessary, leading to potential performance issues.

    2. It can cause data inconsistencies

    If the list is dynamic and items can be reordered, added, or removed, using the index as the `key` can cause issues with data mapping. React assumes that the order of the items will remain the same, but if the order changes, React may associate the wrong data with each item.

   3. It violates the assumptions of React's diffing algorithm*

    React's diffing algorithm assumes that the developer can hint at which child elements may be stable across different renders with a `key` attribute. Using the index as the `key` violates this assumption, as the index may change if the order of the items changes.

   4. It can lead to unexpected behavior in some cases

    Using the index as the `key` may work fine in some cases, but it can lead to unexpected behavior if the list is dynamic. For example, if you add an item to the beginning of the list, all the `key` values will change, and React may not be able to track the changes correctly.



10. value prop in input should be either empty string or undefined but it should not be null

11. Form par onsubmit define karo na ki submit button par . Submit button ka type submit hona chahiye

12. Jo data change ho raha hai UI me aur wo visibile hai to uske liye state variables use karo.

13. State allows developers to do things:-
(a) Allows to update the component view (by re-rendering it)
(b) Allows developers to persist local variables between multiple renders and re-renders.

14. Normal variables are destroyed and re-created during re-renders. So if you want that local variables are not destroyed and re-created during re-renders, that make that local variable as state.

15. Not complete file is re-rendered during the state change . Only the functional component that consumed the state changed re-renders and its child components also re-renders.

16. Always change the state variable using the available function for the state. Otherwise the change in state variable will not be reflected in UI.

17. Jab aap input element ke andar value likhte hain to wo dom hold karta hain naki reactjs

18. In React , controlled components refers to the component that have their state and behavoiur controlled by parent component.

19. e.target[0].value used to access the first input element of form

20.  faltu ka state variable nahi banana hai. Yadi koi state variable kisi group of state variable se derived hota hai to wo state variable useless hai.

21. e.preventDefault(); The e.preventDefault() method is used in JavaScript to prevent the default behavior of an event from occurring. It's commonly used in event handlers to stop the default action associated with a particular event.

22. Form Submission: When a form is submitted, the default behavior is to reload the page. To prevent this and handle the form submission in JavaScript, you can call e.preventDefault() in the form's submit event handler.

23. Hooks can only be defined inside the functional component. 

24. Child component ka state change hone se parent component re-rednder nahi karega yadi wo state parent me use nahi ho raha directly. Par parent component ka state change hone se automatically child component re-render hoga

25. Rules regarding using hooks:-
(a) call hook at the top level
(b) Only call hook inside the functional component

26. We cannot directly export state variables are they are defined inside the functional component using hooks. We can only export variables in local scope.

27. State variable aur uske related functions re-render ke time firse create nahi hota hai.

28. hooks are predefined functions in react.

29. useRef provide native js functionality related to document.getElementById

30. Ajax request  same as http request

31. 


# Hooks ,axios and react apis

https://www.youtube.com/playlist?list=PLApy4UwQM3UrZsBTY111R6P4frt6WK-G2

1. Axios is a powerful and easy-to-use library for making HTTP requests in JavaScript. It provides a simple and intuitive interface for sending and receiving data from a server. By using Axios, you can make requests to a server and handle the responses in a straightforward way.

2. Axios automatically jsonifies the incomming data. Api ka response ka data hamesh response.data me hi aayega.

3. Get request:

import axios from 'axios';

axios.get('https://jsonplaceholder.typicode.com/todos/1')
  .then(response => {
    console.log(response.data);
  })
  .catch(error => {
    console.error(error);
  });

4. Post request:

import axios from 'axios';

axios.post('https://jsonplaceholder.typicode.com/todos', {
  title: 'New Todo',
  completed: false
})
  .then(response => {
    console.log(response.data);
  })
  .catch(error => {
    console.error(error);
  });

5. PUT request:
import axios from 'axios';

axios.put('https://jsonplaceholder.typicode.com/todos/1', {
  title: 'Updated Todo',
  completed: true
})
  .then(response => {
    console.log(response.data);
  })
  .catch(error => {
    console.error(error);
  });

6. DELETE 
import axios from 'axios';

axios.delete('https://jsonplaceholder.typicode.com/todos/1')
  .then(response => {
    console.log(response.data);
  })
  .catch(error => {
    console.error(error);
  });

7. Dependency array me sirf state variable ya props hi pass kiya jaa sakta hai.

8. Bahut baar useEffect ka use karne se side effect create hota hain ya yadi koi function (rg. setTimeInterval) useeffect me chal raha hai  to wo ram ka bahut memory consuem karega , yadi uss memeory ko time to time release nahi kiya gaya to page scroll karne me dikkat aayega . Iss case me cleanup function inside useeffect use karte hain.

7. memo api:

Application: Jab tak props change nahi hoga tab tak component re-render nahi karega

Usage:

const Greeting = memo(function Greeting({ name }) {
  return <h1>Hello, {name}!</h1>;
});

export default Greeting;

8. lazy api:

Usage: Jab tak component render nahi hoga  for the first time tab tak uss compoennt ka code load nahi hoga

Application:

import { lazy } from 'react';

const MarkdownPreview = lazy(() => import('./MarkdownPreview.js'));

9. useState hook: useState is a React Hook that lets you add a state variable to your component.
const [state, setState] = useState(initialState)
setState((prev)=>prev_to_new)



10. useEffect Hook : If there is no dependency array , then it will be called on every re-render.
If the dependency array is [] then it will be called only once. If the dependency array has some parameters then it will be called when those parameters changes or during initial re-render. The elements in dependency array can be state or props. This is true for useEffect, useMemo, useCallback etc where there is a provision for providing dependency array.

import { useEffect } from 'react';
import { createConnection } from './chat.js';

function ChatRoom({ roomId }) {
  const [serverUrl, setServerUrl] = useState('https://localhost:1234');

  useEffect(() => {
    const connection = createConnection(serverUrl, roomId);
    connection.connect();
    return () => {
      connection.disconnect();
    };
  }, [serverUrl, roomId]);
  // ...
}

11. useMemo : useMemo is a React Hook that lets you cache the result of a calculation between re-renders.
const cachedValue = useMemo(calculateValue, dependencies)

import { useMemo } from 'react';

function TodoList({ todos, tab, theme }) {
  const visibleTodos = useMemo(() => filterTodos(todos, tab), [todos, tab]);
  // ...
}



12. useRef: 

- Value of useRef always inside current property.
const ref=useRef();
ref.current => used to access the value of ref

- useRef will allow you to make update and read the updated value instantly without re-render and the reason you dont wait for re-render is because useRef dont even trigger a re-render in first place.Jab tak component re-render nahi hoga tab tak uska dom re-paint nahi hoga yani UI par koi visible effect nahi hoga. So it ia adviced not to use useRef inside return .

- useRef always allows you to access dom directly.

- Hooks always runs after things are rendered




13. useReducer: It is similar to useState. It is used when two or more states are dependent on each other . It is done so to reduce the lines of code.

const [state, dispatch] = useReducer(reducer, initialState);

import { useReducer } from 'react';

const initialState = { count: 0 };

function reducer(state, action) {
  switch (action.type) {
    case 'increment':
      return { count: state.count + 1 };
    case 'decrement':
      return { count: state.count - 1 };
    case 'reset':
      return { count: 0 };
    default:
      throw new Error();
  }
}

function Counter() {
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <div>
      Count: {state.count}
      <button onClick={() => dispatch({ type: 'increment' })}>+</button>
      <button onClick={() => dispatch({ type: 'decrement' })}>-</button>
      <button onClick={() => dispatch({ type: 'reset' })}>Reset</button>
    </div>
  );
}



14. useCallback : Jab bhi koi component re-render hota hai to usme functiosn firse create hota hai.Function create hone ke karan uska reference bhi change hota hai. Yadi wo function kisi bhi child component me as a props pass hua hai to bhalehi wo memo me ho par wo fir se render hoga. Isslie humlog callback hook use karte hain taki function firse create nahi ho.

15. useTransition :useRef is a React Hook that lets you reference a value that’s not needed for rendering.


16. useId : useId is a React Hook for generating unique IDs that can be passed to accessibility attributes.

const id = useId()

17. Do not call useId to generate keys in a list. Keys should be generated from your data.

18. Jab state change hota hai tab pehle pura code execute hoga and fir re-render trigger hoga . Aaisa nahi hoga ki jaise hi state change hua aage ka code execute hone ke wjah re-render ho yagega functional component. Except for useRef hook all updated values are accesible in the next render.

19. useState is used to store state component by component.

20. {show===true ? "yes":"no"}

21. Hooks can be called inside the function components only.

22. fetch ke case me yadi aap try catch use kar rahe hain to exception catch karne me dikkat hoga. Issliye fetch se api call karne par aap then catch use kariye. Nahi to axios use kariye


# Differnt types of storage in browsers

1. Use localStorage when:

- You need to store simple data that should persist across browser sessions, like user preferences, settings, or non-sensitive data
- You want to store data that is publicly available and not at all sensitive, like a username or favorite color 
- You have a small amount of data to store, as localStorage has a 5MB limit per domain.

2. Don't use localStorage when:-

- You need to store sensitive data like authentication tokens, as localStorage is accessible by JavaScript and can be read by any script on the page.
- You need to store large amounts of data, as there are size limitations. Use IndexedDB instead for larger datasets.
- You only need to store data for the current session. Use sessionStorage instead, which clears when the browser tab is closed.
- You need to store data that should be sent with every HTTP request, like session cookies. localStorage is only accessible client-side.

3. In summary, localStorage is best used for simple, non-sensitive data that should persist permanently on the client-side. Avoid storing anything security-related or large datasets in it. Use sessionStorage for session-only data, cookies for data to be sent to the server, and IndexedDB for larger storage needs.

4.  Comparison of localStorage vs cookies in terms of performance:


- localStorage is faster than cookies. One benchmark found localStorage to be two orders of magnitude faster than cookies.

- Accessing data from localStorage takes about 0.0007 milliseconds. It is significantly faster than accessing regular object properties.

- localStorage does not impact HTTP traffic at all, as the data is only stored and accessed client-side. 

- Cookies, on the other hand, can potentially slow down web traffic slightly since they are sent with every HTTP request to a domain if they match the domain and path.

- localStorage has a much larger storage limit of around 5-10MB per domain, depending on the browser.

- Cookies are limited to only 4KB per cookie.

In summary, localStorage is faster and can store much more data than cookies without impacting HTTP performance. However, cookies can be read server-side while localStorage is client-side only. The choice depends on your specific use case and data requirements.

5. IndexedDB allows you to store a wide range of data types.
There is no specific limit on the size of a single item in IndexedDB, but the total size of the database is limited by the browser and disk space. It is very huge as compared to that of local storage in the magintude of gb generally.

6. Cookie ka size 4kb hota hai aur wo session id store karne ke kaam aata hai.

7. localStorage me data persist karta hai aur indexDB me bhi

8. Differences between localStorage and indexedDB in terms of data persistence:

(a)localStorage:
- Stores data as key-value pairs, where both the key and value are strings.
- Data stored in localStorage persists across browser sessions and page reloads.
- Has a storage limit of around 5-10MB per domain, depending on the browser.
- Synchronous API, which means it can block the main thread if large amounts of data are being accessed or modified.
- Good for storing small amounts of non-sensitive data that needs to persist across sessions, like user preferences or settings.

(b)indexedDB:
- Provides a more robust and flexible database-like storage system.
- Stores data in the form of objects, which can be complex data structures like arrays, nested objects, etc.
- Data stored in indexedDB persists across browser sessions and page reloads.
- Has a much larger storage limit, typically up to 50MB per origin (domain + protocol) or more, depending on the browser and available disk space.
- Asynchronous API, which means it can perform operations without blocking the main thread.
- Suitable for storing large amounts of structured data, such as user-generated content, offline-first applications, and other data-intensive use cases.
- Supports advanced features like indexing, transactions, and version management, making it more suitable for complex data storage and retrieval needs.

In summary, localStorage is better suited for small, simple key-value data that needs to persist, while indexedDB is more appropriate for larger, more complex data structures that require advanced database-like features and higher storage limits.

9. localStorage always stores the string data only.
To convert string to json JSON.parse()
To convert json to string JSON.stringify()


# React Router Dom

1. React router dom first matches the more specific route then the dynamic route in whatever order they might be written and they do an exact match

2. Nested routes ka element parent route wala hi page me render karta hai. 

3. Outlet compoennt child routes ka element ko parent reoute me render karne ke liye use hota hai.

4. useParams hook se humlog dynamic parameters kya value pata kar satke hain. Ye dynamic parameter aur uska value ko key value format me return karta hai.
Example of dynamic parameter /:userId

5. Using useSearchParams hook you can access , add or remove query  parameters.
import {Outlet,useSearchParams} from 'react-router-dom';
const [searchParams,setSearchParams]=useSearchParams();
const isActive=searchParams.get("filter")==="true";
return (
    <div>
    <h2>User 1</h2>
    <h2>User 2</h2>
    <h2>User 3</h2>
    <Outlet/>
    <button onClick={()=>setSearchParams({filter:"true"})}>Active users</button>
    <button onClick={()=>setSearchParams()}>Reset filter</button>
    {
      isActive ?(<h1>Showing active users</h1>):(<h1>Showing all users</h1>)
    }
    </div>
  );

6. Realtive paths or relative links dont start with a forward / . If a link or path starts with forward slash then it is absolute path

7. A relative link is a link that doesnot starts with the / and will inherit the closest route in which they are rendered.

8. Lazy laoding is a technique when componnets not required on the home page can be split into separate code bundles and downloaded only when the user navigates to that page. You can think of it as incrementally downloading the application.It helps reduce initial load time thereby improving performance.

9. main-chunk.js is the bundle size of js 

10. To do lazy lad we need:
(a) Dynamic imports : For dynamic imports we need default export of the components
(b) React Suspense

11. To connect url in the browser with the application we use BrowserRouter.

12. Routes component ke andar sirf Route ya react fragment hi use ho sakta hai.

13. Saara react router dom se related chiz browser router me wrap hona chahiye.

14. React router dom does exact path match.

15. BrowserRouter , Routes , Route , NavLink, Link , useNavigate, Outlet

16. The `Link` and `NavLink` components in `react-router-dom` are used for navigating between routes in a React application.

Link Component

The `Link` component is used to create links between routes. It renders an accessible `<a>` element with a real `href` that points to the resource it's linking to. This means that things like right-clicking a `<Link>` work as you'd expect.

Example:

```jsx
<Link to="/about">About</Link>
```

When the link is clicked, it navigates to the `/about` route without reloading the page. This is essential because react is a single page application and it brings all data to the browser once the application is started . Since the data is already present in browser so there is no need to make request to server to bring the data as it will increase latency. So we dont use <a> in react .Instead we use Link

NavLink Component

The `NavLink` component is a special version of the `Link` component that adds some extra functionality. It automatically adds an `active` class to the link when the current URL matches the `to` prop[2].

Example:

```jsx
<NavLink to="/about" style={({ isActive }) =>
  isActive ? { color: 'green' } : { color: 'black' }
}>
  About
</NavLink>
```

In this example, the `style` prop is used to conditionally apply a green color to the link when it is active (the current URL matches `/about`).

The `NavLink` component is commonly used for creating navigation menus or tabs in a React application.

Both `Link` and `NavLink` components accept a `to` prop, which can be a string or an object representing the target location to which the link should navigate[1][3].

In summary, the `Link` component is used for creating links between routes, while the `NavLink` component adds extra functionality by automatically applying an `active` class or style when the current URL matches the link's `to` prop.

17. The `useNavigate` hook in `react-router-dom` is used to navigate programmatically between routes in a React application. It provides an imperative way to navigate without using the `Link` or `NavLink` components.

To use `useNavigate`, you need to import it from `react-router-dom`:

```jsx
import { useNavigate } from 'react-router-dom';
```

Inside a component, you can obtain the `navigate` function by calling `useNavigate()`:

```jsx
const navigate = useNavigate();
```


To navigate to a specific route, call the `navigate` function with the target path as the argument:

```jsx
navigate('/about');
```

This will navigate to the `/about` route.


You can also pass a number to `navigate` to move back or forward in the history stack:

```jsx
navigate(-1); // Go back one step in history
navigate(1); // Go forward one step in history
```


The `navigate` function also accepts an optional second argument, which is an object with various options:

- `replace`: If `true`, replaces the current entry in the history stack instead of adding a new one.
- `state`: Allows you to pass state to the destination route, which can be accessed via `useLocation`.
- `preventScrollReset`: Disables resetting the scroll position when navigating.


```jsx
navigate('/about', { replace: true, state: { fromHome: true } });
```

`useNavigate` is commonly used inside `useEffect` hooks to navigate based on certain conditions:

```jsx
useEffect(() => {
  if (condition) {
    navigate('/error');
  }
}, [condition, navigate]);
```

In summary, `useNavigate` provides a way to navigate between routes imperatively in a React application, allowing you to control navigation based on user actions or application state.

18. useLocation Hook: 
The `useLocation` hook in `react-router-dom` is used to access the current URL location object. It provides information about the current URL, such as the pathname, search parameters, hash, and state.

Here are a few key points about using `useLocation`:



To use `useLocation`, you need to import it from `react-router-dom`:

```jsx
import { useLocation } from 'react-router-dom';
```



Inside a component, you can obtain the current location object by calling `useLocation()`:

```jsx
const location = useLocation();
```



The `location` object returned by `useLocation` has the following properties:

- `pathname`: The path part of the URL, including the file name (if any).
- `search`: The query string portion of the URL, including the leading question mark.
- `hash`: The fragment identifier (including the hash symbol) of the URL.
- `state`: Any location state that was passed to the `navigate` function or `Link` component.
- `key`: A unique string representing this entry in the history stack.

Example:

```jsx
const { pathname, search, hash, state, key } = useLocation();
console.log(pathname); // Output: "/about"
console.log(search); // Output: "?q=hello"
console.log(hash); // Output: "#section1"
console.log(state); // Output: { fromHome: true }
console.log(key); // Output: "abc123"
```


`useLocation` is commonly used inside `useEffect` hooks to perform side effects based on the current location:

```jsx
useEffect(() => {
  // Perform some action when the location changes
  trackPageView(location.pathname);
}, [location]);
```

In summary, `useLocation` provides access to the current URL location object, allowing you to retrieve information about the current route and perform actions based on the location changes in your React application.



# Context Api

1.  Here is a coding example to illustrate the effects of state transitions on parent and child components when using the React Context API:

### Example Code

#### `TodoContext.js`
```javascript
import { createContext, useState } from 'react';

const TodoContext = createContext();

const TodoProvider = ({ children }) => {
  const [todos, setTodos] = useState([]);
  const [selectedTodo, setSelectedTodo] = useState(null);

  const addTodo = (todo) => {
    setTodos((prevTodos) => [...prevTodos, todo]);
  };

  const selectTodo = (todo) => {
    setSelectedTodo(todo);
  };

  const value = {
    todos,
    selectedTodo,
    addTodo,
    selectTodo,
  };

  return <TodoContext.Provider value={value}>{children}</TodoContext.Provider>;
};

export { TodoContext, TodoProvider };
```

#### `ParentComponent.js`
```javascript
import React from 'react';
import { TodoContext } from './TodoContext';
import ChildComponent from './ChildComponent';

const ParentComponent = () => {
  const { todos, selectedTodo } = React.useContext(TodoContext);

  return (
    <div>
      <h1>Parent Component</h1>
      <ul>
        {todos.map((todo) => (
          <li key={todo.id}>{todo.text}</li>
        ))}
      </ul>
      <ChildComponent />
    </div>
  );
};

export default ParentComponent;
```

#### `ChildComponent.js`
```javascript
import React from 'react';
import { TodoContext } from './TodoContext';

const ChildComponent = () => {
  const { addTodo, selectTodo } = React.useContext(TodoContext);

  const handleAddTodo = (event) => {
    const todoText = event.target.value;
    addTodo({ id: Date.now(), text: todoText });
    event.target.value = '';
  };

  return (
    <div>
      <h2>Child Component</h2>
      <input type="text" onChange={handleAddTodo} />
      <button onClick={() => selectTodo(selectedTodo)}>Select Todo</button>
    </div>
  );
};

export default ChildComponent;
```

### Effects of State Transitions

1. **Parent Component**:
   - When the `todos` state changes (e.g., a new todo is added), the `ParentComponent` will re-render because it consumes the `todos` state from the context. Jo state variable return statement me directly ya indirectly hain usko hi manajayega ki wo component consume kar raha hai. 
   - When the `selectedTodo` state changes (e.g., a todo is selected), the `ParentComponent` will not re-render because it only consumes the `selectedTodo` state indirectly through the `ChildComponent`.

2. **Child Component**:
   - When the `todos` state changes (e.g., a new todo is added), the `ChildComponent` will re-render because it consumes the `todos` state from the context.
   - When the `selectedTodo` state changes (e.g., a todo is selected), the `ChildComponent` will re-render because it consumes the `selectedTodo` state directly.

### Key Points

- **Parent Component**:
  - Re-renders when the `todos` state changes.
  - Does not re-render when the `selectedTodo` state changes unless it directly consumes it.

- **Child Component**:
  - Re-renders when the `todos` state changes.
  - Re-renders when the `selectedTodo` state changes.

By understanding these effects, you can optimize your application's performance and ensure that components re-render only when necessary.


2. Strategies to Mitigate Performance Issues
Memoization: Use useMemo to memoize the context value. This ensures that components only re-render when the context state actually changes, rather than on every re-render.
Optimize Context Updates: Carefully consider when and how to update the context value to minimize unnecessary re-renders. For example, only update the context when there is a significant change in the state.
Use Reducers and Middlewares: Instead of using useEffect to handle state changes, consider using useReducer and middlewares to manage state transitions more explicitly. This can help in avoiding unnecessary re-renders and side effects.

3. 

# Redux and redux persist


# CSS 

1. padding me pehla value top bottom ke liye aur dusra value left right ke liye.

2. Jab bhi koi cheez ghicha hua dikhega then vertical alignment theek nahi hai.

3. Yadi css me property ka value number hai then '' me band karne ka koi zarurat nahi

4. box-shadow: [horizontal-offset] [vertical-offset] [blur-radius] [spread-radius] [color];

5. Yadi padding , margin kaam na kare then display property ka value block kar dijiyega. Padding ,margin kaam karna start kar dega.

6. Jab bhi aapko design thoda bahut upar neeche dikhe aap background color daal kar dekh lena

7. Footer me kabhi bhi height nahi dena chahiye kyuki responsive me dikkat hoga.

8. index.css --> global css file

9. width:"fit-content"

10. kisi dabbe ko fit karna hai horizontally aur jagah left aur right me empty hain then use
marhin:'0 auto' (top-bottom left-right)

11. Parent me kabhi bhi height:100vh mat dijiyega . Use minHeight:100vh

12. calc function ke andar jo aap opeartor doge uske pehle aur baad me space hona chahoiye.

13. freepic website to search images

14. animate.style for animation

15. gradient matlab ek se zada color mix karna

16. Jis class bar md: laga denge wo sirf desktop par hi kaam karega

17. swiper.js

18. (a) padding:-

- p-12
- px-12
- py-12
- pt-12
- pb-12

(b) margin:
- m-12
- mx-12
- my-12
- mt-12
- mb-12

(c) display
- flex
- hidden
- block
- justify-center
- justify-around
- justify-between
- justify-evenly
- items-center

(d) width:
- w-
- w-fit
- w-screen
- w-full 
- w-[] => Custom value dene ke liye

(e) height:
- h-
- h-fit
- h-screen
- h-full
- h-[]


19. Agar position static nahi hai  to height % age me do naki vh me.

20. Dynamic css use kara ho then dont use tailwind.

21. Classname me md: aage laga denge matlab desktop ke liye design hai

22. The <aside> tag in HTML is used to define content that is indirectly related to the main content of a page. It is often used for sidebars, pull quotes, or other elements that are supplementary to the main article or section. The content inside an <aside> element is typically tangential or additional information, like advertisements, navigation menus, or links to related content.

23. Padding aur margin block level element me kaam hi karta hai.

24. Yadi form me ek bhi button hain to wo submit karne lagega. Issliye type ="button" use karo

25. 

# Nextjs

1. It is a js framework.

2. Difference between npx and npm : npx is a tool that comes with npm (since version 5.2.0) and is used to execute packages directly without needing to install them globally or manage dependencies. T

3. Client-Side Rendering (CSR) and Server-Side Rendering (SSR) refer to how web applications handle rendering HTML content.

Client-Side Rendering (CSR):

-  In CSR, the initial HTML document is a bare-bones file with minimal content (often just a `<div>` element). The JavaScript files, typically bundled, are downloaded and then executed in the browser to create the full UI.
  1. The browser requests an HTML file from the server.
  2. The server sends back a minimal HTML file with links to the necessary JavaScript files.
  3. The browser downloads these JavaScript files, executes them, and generates the content (HTML) on the client side.

- Interactivity is faster after the initial load since subsequent actions are handled in the browser.
- Can reduce server load.
- Slower initial page load since JavaScript must download and execute before content appears.
- SEO challenges, as search engine crawlers might not wait for JavaScript to execute.

Server-Side Rendering (SSR):

- In SSR, the server generates the full HTML content on each request and sends it to the browser.
  1. The browser requests an HTML file.
  2. The server processes this request, generates the HTML content, and sends it back to the browser.
  3. The browser displays the fully rendered HTML page immediately, and any additional JavaScript files are downloaded afterward for interactivity.
  
- Faster initial page load because the server sends a complete HTML file.
- Better for SEO since search engines get fully-rendered content immediately.
- Can increase server load due to rendering on every request.
- Interactivity can be slower to initialize because JavaScript is loaded after the HTML.

4. Next.js Rendering Approach:

Next.js is a React framework that supports both SSR and CSR, as well as Static Site Generation (SSG) and Incremental Static Regeneration (ISR), offering flexibility in how pages are rendered.

- Next.js uses Server-Side Rendering (SSR) for dynamic pages by default.
  - This is done via getServerSideProps(). On every request, the server will generate the HTML page dynamically.
  
- For static pages, it uses Static Site Generation (SSG):
  - This is handled through getStaticProps() or getStaticPaths(), where pages are generated at build time. Once generated, these pages are served like static files, offering faster page loads.
  
- Client-Side Rendering (CSR):
  - Can be used by Next.js for interactivity once the initial HTML is loaded. Parts of the page or components can use CSR, usually for user interaction or dynamically loaded data.
  - You can implement CSR manually, but it's not the default unless explicitly used.


4. By default nextjs server side rendering karta hai aur yadi aapko client side rendering karwana hai then file ka top me 'use client'likho. Isko hamesha file ka top me hi likha jata hai. Yadi koi  componenet iss file ko as a parent componenet use kar raha hai then usme 'use client' likhne ka zarurat nahi hai.

5. layout.js similar to index.js and page.js similar to App.js

6. Rendeering means gtml page generation

7.  In nextjs we use file system based routing.

8. About ka route declare karne ke liye : src/app/about/page.js

9. The folder name will match the route name and page.js should be present in every folder.

10. import Link from 'next/link';
Here on clicking links the page will not reload.

11. Jaha par aaplog hooks use kar rahe hain 'use client' use karo

12. import {useRouter} from 'next/navigation';
const router=useRouter();
router.push("/");


13. Jab humlog ek link par click karke jaate hain to usko linking bolte hain aur yadi humlog koi bhi event par ek roote se dusre route par jaate hain to usko navigation bolte hain

14. hook.js:608 Warning: Extra attributes from the server: data-new-gr-c-s-check-loaded,data-gr-ext-installed Error Component Stack
    at body (<anonymous>)
    at html (<anonymous>)
    at RedirectErrorBoundary (redirect-boundary.js:72:9)
    at RedirectBoundary (redirect-boundary.js:80:11)
    at NotFoundErrorBoundary (not-found-boundary.js:54:9)
    at NotFoundBoundary (not-found-boundary.js:62:11)
    at DevRootNotFoundBoundary (dev-root-not-found-boundary.js:32:11)
    at ReactDevOverlay (ReactDevOverlay.js:66:9)
    at HotReload (hot-reloader-client.js:294:11)
    at Router (app-router.js:157:11)
    at ErrorBoundaryHandler (error-boundary.js:82:9)
    at ErrorBoundary (error-boundary.js:110:11)
    at AppRouter (app-router.js:440:13)
    at ServerRoot (app-index.js:126:11)
    at RSCComponent (<anonymous>)
    at Root (app-index.js:142:11)

Ans: The warning you are seeing refers to extra attributes  present in the HTML coming from the server, which were not expected during client-side rendering. Specifically, the `data-new-gr-c-s-check-loaded` and `data-gr-ext-installed` attributes seem to be causing the issue. These attributes are likely injected by browser extensions, particularly ones related to grammar checking (like Grammarly).
1. Server-Side Rendering (SSR) When Next.js (or any SSR framework) renders HTML on the server, it generates an HTML file without any browser-specific modifications.
2. Client-Side Hydration: When the page is loaded on the client (browser), React "hydrates" the page by attaching event listeners and updating the DOM. During this process, it compares the server-rendered HTML with the one created by React on the client side.
3. Mismatch: Since the server doesn't have access to browser extensions (like Grammarly), but the client does, these attributes can appear during hydration, causing a mismatch.

The warning is likely caused by browser extensions injecting extra HTML attributes. Since this is unrelated to your app’s logic or Next.js setup, you can either disable the extension or safely ignore the warning.

15. Kisi bhi folder me yadi humlog layout.js me koi code define karte hain to wo har file par applicable hoga uss folder ke andar.

16. import {usePathname} from 'next/navigation';
const pathname=usePathname();
Isse humlog pata kar sakte hain ki curent route ka path kya hai

17. === and !==

18. http://localhost:3000/students/Shivam => This route has 3 segments

19. not-found.js in app folder for global 404 page

20.  Ek application me ek hi notfound page hona chahiye.

21. Middleware banane ke liye file ka naam middleware.js hi rahega hamesha

22. Middleware hamesha routing se pehle execute hota hai.

23. middleware.js hamesh app folder ke bahar src folder ke andar banega
```javascript

import { NextResponse } from "next/server";
export const middleware = (request) => {
  return NextResponse.redirect(new URL("/login", request.url));
};
export const config = {
  matcher: ["/about/:path*", "/students/:path*"],
};

```

24. Ek saath humlog both server side aur client side rendering kar sakte hain.

25. In web development, rendering refers to the process of generating the HTML content that is displayed to the user in a browser. This can be done in different ways, depending on when and where the HTML is generated. In modern web applications, rendering can be done on the server, client, or during the build process.

26. Server-Side Rendering (SSR): In SSR, the page content is generated on the server for every request. The browser requests a page.The server renders the full HTML page (including any dynamic data) and sends it to the client. The browser displays the fully-rendered page and then hydrates it with React to make it interactive.

27. Static Site Generation (SSG): In SSG, the HTML is generated at build time. Once the site is built, the HTML files are served statically to the browser. At build time, Next.js generates HTML for each page. When the user requests a page, the pre-generated HTML is served instantly. React hydrates the page after it loads to enable interactivity.

28. Client-Side Rendering (CSR): In CSR, the initial HTML sent from the server is mostly empty, and the full page is rendered by React on the client (in the browser) using JavaScript. The browser requests a page. The server sends an almost-empty HTML file (usually just a <div> tag). The browser downloads JavaScript bundles and renders the content in the browser.

29. Incremental Static Regeneration (ISR) : ISR allows you to update static pages after they’ve been built. It combines the benefits of SSG (fast initial load) with the ability to regenerate pages as needed. The browser requests a page. A pre-rendered static page is served if it exists. If the page is outdated based on a time interval, the server regenerates the page in the background.

30. Pre-rendering me html code server environment ke andar generate hota hai.
- Static Site Generation (SSG)
- Server-Side Rendering (SSR)

31. useEffect ka callback function async nahi ho sakta hai.

32. Whether doing client side rendering or server side rendering key is must if you are looping through an array using map.

33. Server side components me humlog events nahi add kar sakte kyuki events browser me hi work karte hain naa ki server me.

34. global.css me jo bhi code likha hua hai wo poore project me use hoga.global.css wo file hai jo layput.js me imported hai

35.  Jo file jaada pass hai uska css applicable hoga 

36. modular css ko humlog as an object import karte hain isslye wo locally hamesha apply hota hai aur global se jada preference hota hai iska.


37. Yadi humlog nextjs ka font ko chood kar google font use karenge to request server par jaayega . Issse network bandwidth waste hoga . Issliye nextjs ka font use karo.

import { Roboto } from "next/font/google";
```javascript
import { Roboto } from "next/font/google";
const roboto=Roboto({
  weight:'100',
  subsets:['cyrillic'],
  display:'swap'
});

const Fonts=()=>{
  return (
    <div className={roboto.className}>Font next js </div>
  )
};

export default Fonts;

```

38. Metadata html ka head ka portion hai jaise ki title etc. Dynamic meta data matlab yadi koi pages me ye property change ho raha hai dynamically. generateMetadata function use karo dynamic metadata generate karne ke liye. generateMetadata function can be async as well 

```javascript 
// Used to static metadata generation

import Laoding from "./loading";

const fetchData = async () => {
  const response = await fetch("https://jsonplaceholder.typicode.com/posts");
  const data = await response.json();
  return data;
};

const User = async () => {
  const data = await fetchData();
  return (
    <div>
      {data.length===0 &&<Laoding />}
      <h1>User Page</h1>
      {data.map((item) => (
        <div key={item.id}>{item.title}</div>
      ))}
    </div>
  );
};

export default User;

export const generateMetadata = () => {
  return {
    title: "User Page",
  };
};

```

```javascript
// Dynamic metadata generation

// app/blog/[slug]/page.js
import { fetchPost } from '@/lib/api';

export async function generateMetadata({ params }) {
  const post = await fetchPost(params.slug);

  return {
    title: post.title,
    description: post.description,
    openGraph: {
      title: post.title,
      description: post.description,
      images: post.image,
    },
    twitter: {
      card: 'summary_large_image',
      title: post.title,
      description: post.description,
      image: post.image,
    },
  };
}

export default function BlogPost({ params }) {
  // Your page component rendering
}



```

39. Kabhi kabhi humlog ko external libraries use karna hota hai project me par uska npm package nahi bana hota hai issliye hum log cdn use karte hain  aur script tag se usko poore project me load karte hain . yadi humlog ko koi specific componenet me hi wo librtary use karna hai to Script component use karte hain

```javascript

'use client';

import Script  from "next/script";
const Location=()=>{
  return (
    <div>
    <h1>Get Current Location</h1>
    <Script
    src="./location.js"
    onLoad={()=>console.log("Hello World")}
    />
    </div>
  );
}

export default Location;

```

40. Static files same as static assets

41.  Static files are kept under public folder and when we build the code then static file remains unchanged (i.e they are not minified)

42.  There are three types of build : Development build, Production build and Customised build.

43. Development build me humlog kabhi bhi code ko minified form me nahi karte hain kyuki aaisa karne se debug karne me dikkat ho jayega.

44. npm run build
npm run start 
-- To start server after production build

45. generateStaticParams() is used for static site generation
```javascript

export const generateStaticParams = async () => {
  const response = await getUsers();
  return response.map((item) => ({
    userId: item.id.toString(), // Make sure userId is a string if dynamic route expects a string
  }));
};


```

46. generateStaticParams me mapping ke samay [folder-name] use karna zaruri hai

47. Error: Page "/users/[userId]/page" cannot use both "use client" and export function "generateStaticParams()".

48. ```javascript

import Image from "next/image";
import Profile from '../../../public/next.svg'
const ConditionalStyle=()=>{
  return (
    <div>
    <Image src={Profile}/>
    <Image src="https://cdn.britannica.com/45/5645-050-B9EC0205/head-treasure-flower-disk-flowers-inflorescence-ray.jpg"
    width={400}
    height={600}
    />
    </div>
  );
}

export default ConditionalStyle;
```

48. Redirection hamesha configuration se karo.

```javascript
/** @type {import('next').NextConfig} */
const nextConfig = {
  redirects:async ()=>([
    {
      source:"/about",
      destination:"/",
      permanent:false
    },
    {
      source:"/users/:path*",
      destination:"/",
      permanent:false
    }
  ]
  ),
  export:"output"
}

module.exports = nextConfig


```

49. In Next.js, the brackets (`[ ]`) and ellipsis (`...`) in folder and file names are used to define **dynamic routes**. They allow you to capture parts of the URL dynamically, making it possible to build flexible, parameterized URLs. Let's break down the difference between `[folder]` and `[...folder]`:

**`[folder]` (Single Dynamic Segment)**

A folder or file wrapped in square brackets (`[ ]`) represents a **single dynamic segment** in the URL. This means that whatever is inside the brackets will be captured and treated as a dynamic parameter for that segment of the URL.


```bash
/pages
  /[category]/
    index.js
```

- **Folder Structure**: In this example, `category` is dynamic and can represent any value.
- **URL Example**: `/electronics`, `/books`, `/clothing`, etc.
- **Accessing the Parameter**: In the `index.js` file, you can access the dynamic segment `category` using Next.js routing methods like `getServerSideProps`, `getStaticProps`, or `useRouter`.

```js
// pages/[category]/index.js
import { useRouter } from 'next/router';

export default function CategoryPage() {
  const router = useRouter();
  const { category } = router.query; // category will be 'electronics', 'books', etc.
  
  return <div>Category: {category}</div>;
}
```

- When you visit `/electronics`, the `category` parameter will be set to `"electronics"`.

 **`[...folder]` (Catch-All Dynamic Route)**

When you use `[...folder]`, it creates a **catch-all route** that captures **multiple segments** in the URL. This is useful when you want to match URLs with more than one dynamic segment.



```bash
/pages
  /[...slug]/
    index.js
```

- **Folder Structure**: Here, `slug` is a catch-all route that can capture one or more segments in the URL.
- **URL Example**: `/post/my-first-post`, `/post/tech/javascript`, `/post/2021/08/article-title`, etc.
- **Accessing the Parameter**: The catch-all parameter will be an array containing the segments of the URL.

```js
// pages/[...slug]/index.js
import { useRouter } from 'next/router';

export default function SlugPage() {
  const router = useRouter();
  const { slug } = router.query; // slug will be an array like ['post', 'my-first-post']
  
  return <div>Slug: {slug ? slug.join('/') : 'Home'}</div>;
}
```

- **URL Matching**:
  - `/post/my-first-post`: `slug` will be `['post', 'my-first-post']`.
  - `/post/tech/javascript`: `slug` will be `['post', 'tech', 'javascript']`.
  - `/post/2021/08/article-title`: `slug` will be `['post', '2021', '08', 'article-title']`.

**`[[...folder]]` (Optional Catch-All Dynamic Route)**

This is a slight variation of `[...folder]` but with **double brackets**: `[[...folder]]`. It creates an **optional catch-all dynamic route**, meaning it can capture zero or more segments.



```bash
/pages
  /[[...slug]]/
    index.js
```

- **Folder Structure**: `[[...slug]]` will match URLs with or without extra segments.
- **URL Example**: `/` (root), `/about`, `/blog/my-first-post`, etc.
- **Accessing the Parameter**: It works like `[...folder]`, but it can be `undefined` or an empty array if there are no additional segments.

```js
// pages/[[...slug]]/index.js
import { useRouter } from 'next/router';

export default function OptionalSlugPage() {
  const router = useRouter();
  const { slug } = router.query; // slug will be undefined for root or empty URLs
  
  return <div>Slug: {slug ? slug.join('/') : 'Home'}</div>;
}
```

- **URL Matching**:
  - `/`: `slug` will be `undefined` (no segments).
  - `/about`: `slug` will be `['about']`.
  - `/blog/my-first-post`: `slug` will be `['blog', 'my-first-post']`.



| Syntax        | Description                                    | Example URL                  | Query Object Value                      |
|---------------|------------------------------------------------|------------------------------|-----------------------------------------|
| **`[folder]`**  | Matches a single dynamic segment               | `/category/books`             | `{ category: 'books' }`                |
| **`[...folder]`** | Matches multiple segments (catch-all)         | `/category/tech/javascript`   | `{ folder: ['tech', 'javascript'] }`   |
| **`[[...folder]]`** | Matches zero or more segments (optional)     | `/`, `/about`, `/post/123`    | `{ folder: undefined }`, `{ folder: ['about'] }`, etc. |


- **`[folder]`**: Captures a single dynamic segment (e.g., `/blog/[id]`).
- **`[...folder]`**: Captures multiple segments as an array (e.g., `/blog/[...slug]`).
- **`[[...folder]]`**: Matches URLs with or without segments, making it optional (e.g., `/[[...slug]]`).

These dynamic route patterns give you powerful flexibility in handling various URL structures in Next.js applications.

50. If you are using rtk then you have to install both redux and redux toolkit

51. Jab bhi humlog refresh karte hain to redux ka data hat jaata hai . Yadi aap redux ke data ko store karke rakhna chaate ho then use redux persist. But this makes the application show. Otheriwse 
do the proper api calls

52. Data flow in rtk is unidirectional.

53. Slice composed of actions and reducers

54. A slice is a collection of Redux reducer logic and actions for a single feature in your app.

55. Action wo data hota hai jo hum store karwana chate hain store ke andar aur reducer action wale data ko store ke andar store karne me hamari maddad karta hai

56. useDispatch hook koi callback function nahi leta hai par useSelector hook leta hai

57. Jab bhi aap react-redux use karte hain to usko client component banana padta hai

58. Kisi bhi application me ek hi store aur provider banano ideally but can use multiple slice.

59. [Immer] 'current' expects a draft, got: [object Object],[object Object],[object Object],[object Object],[object Object]
    at die (immer.mjs:64:11)

The error you're seeing is from Immer.js, which is commonly used with Redux Toolkit to allow you to write "mutative" code while maintaining immutability under the hood. The error message indicates that the current function is being called on an object that is not recognized as a draft, which is a problem because Immer works with drafts internally.

60. 
