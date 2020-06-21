import { Injectable } from "@angular/core";
import { Action } from "@ngrx/store";
import { Tutorial } from "../models/tutorial.model";

export const ADD_TUTORIAL = 'add'
export const REMOVE_TUTORIAL = 'remove'

export class AddTutorial implements Action {
    readonly type = ADD_TUTORIAL;
    constructor(public payload) {}
}

export class RemoveTutorial implements Action {
    readonly type = REMOVE_TUTORIAL;
    constructor(public payload) {}
}

export type Actions = AddTutorial | RemoveTutorial

