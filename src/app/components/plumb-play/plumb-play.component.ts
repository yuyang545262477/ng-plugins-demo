import {ChangeDetectionStrategy, Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-plumb-play',
  template: `
    <section fxFill>
      <h1>试了一上午,初始化都没成功,弃!</h1>
      <span>
        plumb-play 456 works!
      </span>
    </section>
  `,
  styleUrls: ['./plumb-play.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class PlumbPlayComponent implements OnInit {

  constructor() {
  }

  ngOnInit(): void {
  }

}
