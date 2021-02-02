import {IGroup, IShape, ModelConfig} from '@antv/g6';
import {HsGraph} from '../hs-graph';
import {ERegisterEdgeEnum} from './register-edge.enum';

HsGraph.registerEdge(ERegisterEdgeEnum.lineDash, {
  afterDraw: function(cfg: ModelConfig | undefined, group: IGroup | undefined, rst: IShape | undefined): void {
    const shape = group?.getChildren()[0];
    let index = 0;
    shape?.animate(
      () => {
        index++;
        if (index > 9) {
          index = 0;
        }
        const lineDash = [4, 1, 1, 4];
        return {
          lineDash,
          lineDashOffset: -index,
        };
      },
      {
        repeat: true,
        duration: 1500,
      },
    );
  },
}, 'cubic');
