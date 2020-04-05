import React from 'react';
import Select from 'react-select';

const options = [
   { value: 'Present', label: 'Present' },
   { value: 'Absent', label: 'Absent' },
];

class DropDown extends React.Component {
   state = {
      selectedOption: null,
   };
   handleChange = selectedOption => {
      this.setState({ selectedOption });
      console.log(`Option selected:`, selectedOption);
   };
   render() {
      const { selectedOption } = this.state;

      return (
         <Select
            value={selectedOption}
            onChange={this.handleChange}
            options={options}
            defaultValue="Present"
            placeholder="Present"
         />
      );
   }
}

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
   }

   renderTableData() {
      return this.state.students.map((student, index) => {
         const { reg, name, } = student
         return (
            <tr key={reg}>
               <td>{reg}</td>
               <td>{name}</td>
               <td><DropDown /></td>
            </tr>
         )
      })
   }

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
            <button className="btn waves-effect waves-light" type="submit" name="action" style={{ marginTop: 50 }}>Modify</button>
            <a href="/add" className="btn waves-effect waves-light" style={{ marginTop: 50, marginLeft: 50}}>Add new Student</a>
         </div>
      )
   }
}

export default Table