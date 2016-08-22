/// <reference path="../typings/globals/es6-promise/index.d.ts" />

import { IEntity, IColumn, IAdapter } from "./adapter";

interface ODataResponse {
    value: any[];
}

export interface ODataMetadata {
    uri: string;
    columns: IColumn[];
}

export class ODataAdapter implements IAdapter {
    private metadata: ODataMetadata;

    constructor(metadata: ODataMetadata) {
        this.metadata = metadata;
        if (metadata.columns.length < 1) {
            throw "You need to provide at least one column definition";
        }
    }

    public getColumns(): Promise<IColumn[]> {
        return new Promise<IColumn[]>((resolve, reject) => {
            resolve(this.metadata.columns);
        });
    }

    protected handleResponse(response: ODataResponse): IEntity[] {
        var identifier = this.metadata.columns[0].key;
        return response.value.map((i) => {
            i["id"] = i[identifier];
            return <IEntity>i;
        });
    }

    public find(): Promise<IEntity[]> {
        var uri = this.metadata.uri;
        return new Promise<IEntity[]>((resolve, reject) => {
            var request = new XMLHttpRequest();
            request.open("GET", uri, true);
            request.onload = () => {
                if (request.status >= 200 && request.status < 400) {
                    var response = <ODataResponse>JSON.parse(request.responseText);
                    var entities = this.handleResponse(response);
                    resolve(entities);
                } else {
                    reject();
                }
            };
            request.onerror = () => {
                reject();
            };
            request.send();
        });
    }
}
