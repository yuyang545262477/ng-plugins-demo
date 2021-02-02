import {ElementRef, Injectable} from '@angular/core';
import {Graph} from '@antv/g6';
import {nodeAnimationDatum} from './data';
import {ERegisterEdgeEnum, HsGraph} from './hs-graph';

@Injectable()
export class G6Service {
  private instance: Graph | undefined;

  constructor() {
  }

  renderView(g6Play: ElementRef<HTMLDivElement>) {
    this.instance = new HsGraph.Graph({
        container: g6Play.nativeElement, // String | HTMLElement，必须，在 Step 1 中创建的容器 id 或容器本身
        width: g6Play.nativeElement.clientWidth, // Number，必须，图的宽度
        height: g6Play.nativeElement.clientHeight, // Number，必须，图的高度
        modes: {
          default: ['drag-node'],
        },
        defaultNode: {
          style: {
            fill: '#DEE9FF',
            stroke: '#5B8FF9',
          },
        },
        defaultEdge: {
          type: ERegisterEdgeEnum.circleRunning,
          style: {
            lineWidth: 2,
            stroke: '#000',
          },
        },
      },
    );
    this.instance.data(nodeAnimationDatum);
    this.instance.render();
  }

}
