/// <reference path="../typings/index.d.ts" />

import * as React from "react";
import { HeaderCell } from "./headerCell";

export interface IHeaderProps {
    
}

export class Header extends React.Component<IHeaderProps, void> {
    render() {
        return (
            <div className="header">
                <HeaderCell title="Header Cell 1" />
                <HeaderCell title="Header Cell 2" />
            </div>
        );
    }
}
