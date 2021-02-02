import {IGroup, ModelConfig} from '@antv/g6';
import {HsGraph} from '../hs-graph';
import {ERegisterNodeEnum} from './register-node.enum';

HsGraph.registerNode(ERegisterNodeEnum.circleAnimate, {
  afterDraw(cfg: ModelConfig | undefined, group: IGroup | undefined): void {
    const shape = group?.getChildByIndex(0);
    shape?.animate(
      (ratio: number) => {
        const diff = ratio <= 0.5 ? ratio * 10 : (1 - ratio) - 10;
        return {
          r: (<number> cfg?.size) / 2 + diff,
        };
      },
      {
        repeat: true,
        duration: 1500,
        easing: 'eseCubic',
      },
    );
  },

}, 'circle');
