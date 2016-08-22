/// <reference path="../typings/globals/es6-promise/index.d.ts" />

export interface IEntity {
    [key: string]: any;
    id: string;
}

export interface IColumn {
    key: string;
    width?: number;
}

export interface IAdapter {
    getColumns(): Promise<IColumn[]>;
    find(): Promise<IEntity[]>;
}
