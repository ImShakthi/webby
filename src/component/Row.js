import React from "react";

class Row extends React.Component {
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

export default Row;
