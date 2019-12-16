import React from 'react';
import Axios from 'axios';
import { Table } from 'react-bootstrap';

/**
 * @usage :  
 * 
 * @author_name : Rahul Jadhav
 */


export default class Employee extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            data: []
        }
    }

    componentDidMount() {
        console.log("componentDidMount");
        this.getData();

    }

    renderTableData = () => {
        return (
            <div>
                <div className="hotel">
                    <h1>Employee Details</h1>
                </div>
                <Table striped bordered hover>
                    <thead>
                        <tr>
                            <th>EMP-ID</th>
                            <th>Name</th>
                            <th>Salary</th>

                        </tr>
                    </thead>
                    <tbody>
                        {this.state.data.map((listValue, index) => {
                            return (
                                <tr key={index}>
                                    <td>{listValue.empid}</td>
                                    <td>{listValue.empname}</td>
                                    <td>{listValue.salary}</td>
                                </tr>
                            );
                        })}
                    </tbody>
                </Table>
            </div>
        );
    }


    /**
     * @name : this user pass name
     * @usage : Get data from server and set to state data variable
     * 
     * 
     */
    getData = (emp) => {
        Axios.get('/data/Employee.json').then((res) => {
            console.log(res);
            this.setState({
                data: res.data
            })
        })
    }

    render() {
        return (
            <div>
                {this.renderTableData()}
            </div>

        );
    }
}


