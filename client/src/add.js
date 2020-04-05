import React from 'react';


const name = "Ankit";
const source = "http://localhost:5050/add_new?name=" + name;

class Add extends React.Component {
    constructor(props) {
        super(props)
    }
    render() {
        return (
            <div className="container">
                <h1>{name}</h1>
                <img src={source} />
                <br />
                <a href="/Modify" className="btn waves-effect waves-light">Add</a>
            </div>
        )
    }
}

export default Add;