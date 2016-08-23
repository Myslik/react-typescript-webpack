/// <reference path="../typings/index.d.ts" />

import * as React from "react";

export interface ICellProps {
    value: any;
}

export class Cell extends React.Component<ICellProps, any> {
    render() {
        return (
            <div className="cell">
                {this.props.value}
            </div>
        );
    }
}
