/// <reference path="../typings/index.d.ts" />

import * as React from "react";
import { IColumn } from "./adapter";

export interface IHeaderProps {
    columns: IColumn[];
}

export class Header extends React.Component<IHeaderProps, void> {
    static defaultProps = {
        sorting: {}
    };

    render() {
        return (
            <div className="header">
                Header
                <HeaderCell title="Header Cell" />
            </div>
        );
    }
}

export interface IHeaderCellProps {
    title: string;
    width?: number;
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
