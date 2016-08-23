/// <reference path="../typings/index.d.ts" />

import * as React from "react";
import { IEntity, IColumn } from "./adapter";
import { Cell } from "./cell";

export interface IRowProps {
    columns: IColumn[];
    entity: IEntity;
}

export class Row extends React.Component<IRowProps, void> {
    render() {
        return (
            <div className="row">
                {
                    this.props.columns.map(column => {
                        return <Cell
                            key={column.key}
                            value={this.props.entity[column.key]} />
                    })
                }
            </div>
        );
    }
}
