import React from "react";

export default class Row extends React.Component {
    render() {
        return (
            <>
                <tr>
                    <td>{this.props.id}</td>
                    <td>{this.props.name}</td>
                    <td>{this.props.age}</td>
                </tr>
            </>
        );
    }
}
