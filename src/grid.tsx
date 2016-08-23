/// <reference path="../typings/index.d.ts" />

import * as React from "react";
import { IEntity, IColumn, IAdapter } from "./adapter";
import { Header } from "./header";
import { Body } from "./body";

export interface IGridProps {
    adapter: IAdapter;
}

export interface IGridState {
    columns: IColumn[];
    rows: IEntity[];
}

export class Grid extends React.Component<IGridProps, IGridState> {
    constructor(props: IGridProps) {
        super(props);
        this.state = {
            columns: [],
            rows: []
        };
        this.loadColumns();
    }

    loadColumns() {
        this.props.adapter.getColumns().then(columns => {
            this.setState((state, props) => {
                state.columns = columns;
                return state;
            }, () => { this.loadRows(); });
        });
    }

    loadRows() {
        this.props.adapter.find().then(entities => {
            this.setState((state, props) => {
                state.rows = entities;
                return state;
            });
        });
    }

    render() {
        return (
            <div className="react-grid">
                <Header columns={this.state.columns} />
                <Body columns={this.state.columns} rows={this.state.rows} />
            </div>
        );
    }
}