import React from "react";
import Row from "./Row";

export default class Table extends React.Component {

    render() {

        let rows = [];
        for (let i = 0; i < 5; i++) {
            rows.push(<Row id={"1"} name={"Name"} age={"age"}/>);
        }

        return (<>
                <div>Hello world</div>
                <table>
                    <tr>
                        <th>Id</th>
                        <th>Name</th>
                        <th>Age</th>
                    </tr>
                    {rows}
                </table>
            </>
        );
    }
}
