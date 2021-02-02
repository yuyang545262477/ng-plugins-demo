import {IGroup, IShape, ModelConfig} from '@antv/g6';
import {HsGraph} from '../hs-graph';
import {ERegisterEdgeEnum} from './register-edge.enum';

HsGraph.registerEdge(ERegisterEdgeEnum.circleRunning, {
  afterDraw(cfg: ModelConfig | undefined, group: IGroup | undefined): void {
    const shape = group?.get('children')[0];
    const startPoint = shape.getPoint(0);
    /*circle*/
    //  initial
    const circle: IShape | undefined = group?.addShape('circle', {
      attrs: {
        x: startPoint.x,
        y: startPoint.y,
        fill: '#1890ff',
        r: 3,
      },
      name: 'circle-shape',
    });
    //  circle animation
    circle?.animate(
      (ratio: number) => {
        const tmpPoint = shape.getPoint(ratio);
        return {
          x: tmpPoint.x,
          y: tmpPoint.y,
        };
      },
      {
        repeat: true,
        duration: 1500,
      },
    );
  },

}, 'cubic');

