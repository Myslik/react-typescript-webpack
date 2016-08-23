/// <reference path="../typings/index.d.ts" />

import * as React from "react";
import { Row } from "./row";

export interface IBodyProps {
    
}

export class Body extends React.Component<IBodyProps, void> {
    render() {
        return (
            <div className="body">
                <Row />
                <Row />
            </div>
        );
    }
}
