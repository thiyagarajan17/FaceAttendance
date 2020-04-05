import React from 'react';
import Table from 'csv-react-table';

class Report extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            students: [
            ]
        };
        this.editedData = params => {
            console.log(params);
        };
    }

    componentDidMount() {
        fetch('/api/names')
           .then(res => res.json())
           .then(students => this.setState({ students }, () => console.log('fetched students.. ', students)));
     }

    render () {
        return (
            <div className="container">
            <Table
                list={this.state.students}
                pageCount={this.state.students.length}
                headers={[
                    {
                        headerName: "Registration Number",
                        mapKey: "reg",
                    },
                    {
                        headerName: "Name",
                        mapKey: "name",
                    },
                    {
                        headerName: "Status",
                        mapKey: "status",
                    }
                ]}
                csv
                edited={this.editedData}
                />
            </div>
        )
    }
}

export default Report