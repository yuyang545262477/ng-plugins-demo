import {GraphData} from '@antv/g6-core/lib/types';

export const CircleRunningDatum: GraphData = {
  nodes: [
    {
      id: 'node1',
      x: 100,
      y: 100,
      label: 'Node 1',
      labelCfg: {
        position: 'top',
      },
    },
    {
      id: 'node2',
      x: 300,
      y: 200,
      color: '#40a9ff',
      label: 'Node 2',
      labelCfg: {
        offset: 10,
        position: 'left',
      },
    },
  ],
  edges: [
    {
      source: 'node1',
      target: 'node2',
    },
  ],
};
