import {AfterViewInit, ChangeDetectionStrategy, Component, ElementRef, OnInit, ViewChild} from '@angular/core';
import {G6Service} from './g6.service';

@Component({
  selector: 'app-g6-play',
  template: `
    <section fxFill>
      <div #G6Play fxFill></div>
    </section>
  `,
  styleUrls: ['./g6-play.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  providers: [G6Service],
})

export class G6PlayComponent implements AfterViewInit {
  @ViewChild('G6Play', {static: true}) private _g6Play: ElementRef<HTMLDivElement> | undefined;

  constructor(private g6Service: G6Service) {
  }

  ngAfterViewInit(): void {
    if (!this._g6Play) {
      return;
    }
    this.g6Service.renderView(this._g6Play);
  }


}
