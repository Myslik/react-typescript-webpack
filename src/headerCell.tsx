/// <reference path="../typings/index.d.ts" />

import * as React from "react";

export interface IHeaderCellProps {
    title: string;
}

export class HeaderCell extends React.Component<IHeaderCellProps, any> {
    render() {
        return (
            <div className="header-cell">
                {this.props.title}
            </div>
        );
    }
}
