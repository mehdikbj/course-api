import React from 'react';
import ReactDOM from 'react-dom';

class FirstComponent extends React.Component {

    render() {
        return <h1>Hello world !!!</h1>;
    }
};

ReactDOM.render(
<FirstComponent />,
    document.getElementById('react')
);