// const reactHeading = React.createElement('h1', {}, 'Hello from react');
// const reactRoot = ReactDOM.createRoot(document.getElementById('reactroot'));
// reactRoot.render(reactHeading);

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
