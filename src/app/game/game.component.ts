import { Component, ChangeDetectionStrategy } from '@angular/core';
import { Store, select } from '@ngrx/store';
import { GameState } from './store/state/game.state';
import {
  selectHistory, selectSquares,
  selectStatus, selectStopPlay, selectStepNumber
} from './store/selectors/game.selectors';
import { Reset, HandleCoinPlacement } from './store/actions/game.actions';

@Component({
  selector: 'app-game',
  templateUrl: './game.component.html',
  styleUrls: ['./game.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class GameComponent {

  squares$ = this.store.pipe(select(selectSquares));
  status$ = this.store.pipe(select(selectStatus));
  stopPlay$ = this.store.pipe(select(selectStopPlay));

  constructor(
    private store: Store<{ game: GameState }>
  ) { }

  handleReset() {
    this.store.dispatch(new Reset());
  }

  handleCoinMovement(index: number) {
    this.store.dispatch(new HandleCoinPlacement({ index }));
  }
}
