import { Action } from '@ngrx/store';
import { Game } from '../../model/game.model';

export enum GameAction {
    Reset = '[GAME] Reset',
    HandleCoinPlacement = '[GAME] Handle Coin Placement',
    CalculateWinner = '[GAME] Calculate Winner',
}

export class Reset implements Action {
    readonly type = GameAction.Reset;
}

export class HandleCoinPlacement implements Action {

    readonly type = GameAction.HandleCoinPlacement;
    constructor(public payload: { index: number }) { }
}

export class CalculateWinner implements Action {

    readonly type = GameAction.CalculateWinner;
    constructor(public payload: Game) { }
}


export type GameActions = Reset | HandleCoinPlacement | CalculateWinner;
