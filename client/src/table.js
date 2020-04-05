import React from 'react';

class Table extends React.Component {
   constructor(props) {
      super(props)
      this.state = {
         students: []
      }
   }

   componentDidMount() {
      fetch('/api/names')
         .then(res => res.json())
         .then(students => this.setState({ students }, () => console.log('fetched students.. ', students)));
      
      fetch('http://localhost:8000/api/students/Ankit/Bando', {
         mode: 'no-cors'
      })
         .then(res => console.log(res));
   }

   renderTableData() {
      return this.state.students.map((students, index) => {
         const { _id, name, Registration_number, status } = students
         return (
            <tr key={_id}>
               <td>{Registration_number}</td>
               <td>{name}</td>
               <td>{status}</td>
            </tr>
         )
      })
   }

   // refreshData() {
   //    fetch('/api/names')
   //       .then(res => res.json())
   //       .then(students => this.setState({ students }, () => console.log('fetched students.. ', students)));
   // }

   render() {
      return (
         <div>
            <table className="highlight">
               <thead>
                  <tr>
                     <th>Registration Number</th>
                     <th>Name</th>
                     <th>Status</th>
                  </tr>
               </thead>
               <tbody>
                  {this.renderTableData()}
               </tbody>
            </table>
            {/* <button className="btn waves-effect waves-light" type="button" name="action" style={{ marginTop: 50 }} onClick={this.refreshData}>Refresh
                </button> */}
         </div>
      )
   }
}

export default Table