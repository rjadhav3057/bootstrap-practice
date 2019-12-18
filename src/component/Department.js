import React from 'react'
import { Table } from 'react-bootstrap';

export default class Department extends React.Component {

    constructor(props) {
        super(props)
        this.state = {
            data: []
        }
    }

    componentDidMount() {
        console.log("componentDidMount");
        this.getData();
    }

    getData = (name) => {
        fetch('/data/Department.json')
            .then(res => res.json())
            .then(
                (result) => {
                    console.log(result);
                    this.state.data = result;
                    this.setState({
                        data: result
                    })

                },
                (error) => {

                }
            )
    }

    renderTableData = () => {
        return (
            <div>
                <div className="tours">
                    <h1>Department Details</h1>
                </div>
                <Table striped bordered hover>
                    <thead>
                        <tr>
                            <th>ID</th>
                            <th>Name</th>
                            <th>EMP-ID</th>

                        </tr>
                    </thead>
                    <tbody>
                        {this.state.data.map((listValue, index) => {
                            return (
                                <tr key={index}>
                                    <td>{listValue.deptid}</td>
                                    <td>{listValue.deptname}</td>
                                    <td>{listValue.empid}</td>
                                </tr>
                            );
                        })}
                    </tbody>
                </Table>
            </div>
        );
    }

    render() {
        return (
            <div>
                {this.renderTableData()}
            </div>

        );
    }
}
