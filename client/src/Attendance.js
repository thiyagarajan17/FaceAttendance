import React from 'react';
import Table from './table.js';

const Attendance = () => {
    
    return (
        <div className="row">
            <div className="col s4 offset-s1" >
                <h3>Attendance List</h3>
                <Table />
                <button className="btn waves-effect waves-light" type="submit" name="action" style={{marginTop: 50}}>Submit
                </button>
            </div>
            <div className="col s4 offset-s1" >
                <h3>Camera Feed</h3>
                <img src="http://localhost:5050/video_feed" />
            </div>
        </div>
    )
}

export default Attendance