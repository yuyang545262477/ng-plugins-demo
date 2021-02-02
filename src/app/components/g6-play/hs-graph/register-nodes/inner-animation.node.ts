import {IGroup, ModelConfig} from '@antv/g6';
import {HsGraph} from '../hs-graph';
import {ERegisterNodeEnum} from './register-node.enum';

HsGraph.registerNode(
  ERegisterNodeEnum.innerAnimate,
  {
    afterDraw(cfg: ModelConfig | undefined, group: IGroup | undefined): void {
      const [_width, _height] = cfg?.size as number[];
      const width = _width - 12;
      const height = _height - 12;

      /*addShape*/
      const shapeConfig = {
        baseType: 'image',
        attrs: {
          x: -width / 2,
          y: -height / 2,
          width,
          height,
          img: cfg?.img,
        },
        name: 'image-shape',
      };

      group
        ?.addShape(
          shapeConfig.baseType,
          {
            attrs: shapeConfig.attrs,
            name: shapeConfig.name,
          },
        )
        ?.animate(
          (ratio: number) => {
            const toMatrix = HsGraph.Util.transform(
              [1, 0, 0, 0, 1, 0, 0, 0, 1],
              [['r', ratio * Math.PI * 2]],
            );
            return {
              matrix: toMatrix,
            };
          },
          {
            repeat: true,
            duration: 1500,
            easing: 'easeCubic',
          },
        );
    },
  },
  'rect',
);
