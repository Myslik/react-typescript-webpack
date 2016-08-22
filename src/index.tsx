/// <reference path="../typings/index.d.ts" />

import * as React from "react";
import * as ReactDOM from "react-dom";
import { ODataAdapter } from "./odata";
import { Grid } from "./grid";

var adapter = new ODataAdapter({
    uri: "http://services.odata.org/V4/OData/OData.svc/Products",
    columns: [
        { key: "ID", width: 70 },
        { key: "Name", width: 140 },
        { key: "Description", width: 250 }
    ]
});

ReactDOM.render(    
    <Grid adapter={adapter} />,
    document.getElementById("example")
);