/// <reference path="../typings/index.d.ts" />

import * as React from "react";
import { IEntity, IColumn, IAdapter } from "./adapter";
import { Header } from "./header";

export interface IGridProps {
    adapter: IAdapter;
}

export class Grid extends React.Component<IGridProps, void> {
    render() {
        return (
            <div className="react-grid">
                React-Grid
                <Header columns={[]} />
            </div>
        );
    }
}