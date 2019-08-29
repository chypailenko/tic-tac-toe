import {
  Component, OnInit, Input,
  Output, EventEmitter, ChangeDetectionStrategy
} from '@angular/core';

@Component({
  selector: 'app-square',
  templateUrl: './square.component.html',
  styleUrls: ['./square.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class SquareComponent implements OnInit {

  @Input() value: number;
  @Input() disabled: boolean;
  @Output() squareSelection: EventEmitter<void> = new EventEmitter<void>();

  constructor() { }

  ngOnInit() {
  }

}
