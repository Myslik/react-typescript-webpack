/// <reference path="../typings/index.d.ts" />

import * as React from "react";
import { IAdapter } from "./adapter";
import { Header } from "./header";
import { Body } from "./body";

export interface IGridProps {
    adapter: IAdapter;
}

export class Grid extends React.Component<IGridProps, void> {
    render() {
        return (
            <div className="react-grid">
                <Header />
                <Body />
            </div>
        );
    }
}