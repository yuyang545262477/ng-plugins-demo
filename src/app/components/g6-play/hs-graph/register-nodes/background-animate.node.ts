import {formatNumber} from '@angular/common';
import {AnimateCfg} from '@antv/g-base/lib/types';
import {HsGraph} from '../hs-graph';
import {ERegisterNodeEnum} from './register-node.enum';

const backShapeConfig = {
  x: 0,
  y: 0,
  opacity: .6,
};


HsGraph.registerNode(ERegisterNodeEnum.backgroundAnimate, {
  afterDraw(cfg, group) {
    const numberR = (<number> cfg?.size) / 2;

    const attrs = {
      x: 0,
      y: 0,
      r: numberR,
      fill: cfg?.color,
      opacity: 0.6,
    };

    const back1Shape = group?.addShape('circle', {
      zIndex: -3,
      name: 'back1-shape',
      attrs,
    });
    const back2Shape = group?.addShape('circle', {
      zIndex: -2,
      name: 'back2-shape',
      attrs,
    });
    const back3Shape = group?.addShape('circle', {
      zIndex: -1,
      name: 'back3-shape',
      attrs,
    });

    group?.sort();
    //动画属性
    const animateAttr = {
      r: numberR + 10,
      opacity: 0.1,
    };
    //动画配置
    const animateCfg: AnimateCfg = {
      repeat: true,
      easing: 'easeCubic',
      duration: 1500,
    };
    back1Shape?.animate({...animateAttr}, {...animateCfg, delay: 0});
    back2Shape?.animate({...animateAttr}, {...animateCfg, delay: 500});
    back3Shape?.animate({...animateAttr}, {...animateCfg, delay: 1000});
  },
}, 'circle');
