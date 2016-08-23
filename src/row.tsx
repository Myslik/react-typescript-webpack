/// <reference path="../typings/index.d.ts" />

import * as React from "react";
import { Cell } from "./cell";

export interface IRowProps {
    
}

export class Row extends React.Component<IRowProps, void> {
    render() {
        return (
            <div className="row">
                <Cell value="Cell 1" />
                <Cell value="Cell 2" />
            </div>
        );
    }
}
