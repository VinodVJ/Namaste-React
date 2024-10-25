// const reactHeading = React.createElement('h1', {}, 'Hello from react');
// const reactRoot = ReactDOM.createRoot(document.getElementById('reactroot'));
// reactRoot.render(reactHeading);

import React from 'react'
import ReactDOM from 'react-dom/client';
/*
const parent = React.createElement('div', {id: 'parent'},
    [React.createElement('div', {id: 'child1'},
        [React.createElement('h1', {}, 'Heading 1'), 
         React.createElement('h2', {}, 'Heading 2')] 
    ),
     React.createElement('div', {id: 'child2'},
        [React.createElement('h1', {}, 'Heading 1'), 
        React.createElement('h2', {}, 'Heading 2')] 
    )]
);

const reactRoot = ReactDOM.createRoot(document.getElementById('reactroot'));
reactRoot.render(parent);
*/

// Episode - 3

// This is JSX - it will get transpiled to react element by parcel.
// parcel is the manager which gives transpiling job to babel
const heading = <h1>Heading Line by VJ with JSX 🚀 </h1>
// For multiline jsx we can use ()
const multilineHead = (
    <h1 id="head" className='class1'> 
        This is multiline heading
    </h1>
);

// Functional component
// Functional component is a normal function that returns a jsx
const HeadingComp = () => <h1>This is Heading Component 🐸</h1>

// Another way to return
const HeadingComp2 = () => {
   return (
        <h1>This is Heading Component 🐸 second way to return</h1>
    );
}

// We can use {} to execute any JS inside JSX
// Component composition - Adding component inside another component
const HeadingComp3 = () => {
    return (
        <div>
            <h1>{heading}</h1>
            <HeadingComp></HeadingComp>
            <HeadingComp2 />
            {HeadingComp()}
            <h1>This is Heading Component 🐸 Multiple ways of using component</h1>
        </div>
    )
}

const root = ReactDOM.createRoot(document.getElementById('root'));
// root.render(heading);
// root.render(multilineHead);
root.render(<HeadingComp3 />);