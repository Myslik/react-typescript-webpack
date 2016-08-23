/// <reference path="../typings/index.d.ts" />

import * as React from "react";
import { IEntity, IColumn } from "./adapter";
import { Row } from "./row";

export interface IBodyProps {
    columns: IColumn[];
    rows: IEntity[];
}

export class Body extends React.Component<IBodyProps, void> {
    render() {
        return (
            <div className="body">
                {
                    this.props.rows.map(row => {
                        return <Row key={row.id} columns={this.props.columns} entity={row} />
                    })
                }
            </div>
        );
    }
}
