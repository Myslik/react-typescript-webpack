/// <reference path="../typings/index.d.ts" />

import * as React from "react";
import { IColumn } from "./adapter";
import { HeaderCell } from "./headerCell";

export interface IHeaderProps {
    columns: IColumn[];
}

export class Header extends React.Component<IHeaderProps, void> {
    render() {
        return (
            <div className="header">
                {
                    this.props.columns.map(column => {
                        return <HeaderCell key={column.key} title={column.key} />;
                    })
                }
            </div>
        );
    }
}
