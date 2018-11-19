/* eslint-disable sort-keys */

import SequentialScheme from '../../SequentialScheme';

const schemes = [
  {
    id: 'schemeBrBG',
    label: 'brown/green',
    isDiverging: true,
    colors: [
      '#543005',
      '#8c510a',
      '#bf812d',
      '#dfc27d',
      '#f6e8c3',
      '#c7eae5',
      '#80cdc1',
      '#35978f',
      '#01665e',
      '#003c30',
    ],
  },
  {
    id: 'schemePRGn',
    label: 'purple/green',
    isDiverging: true,
    colors: [
      '#40004b',
      '#762a83',
      '#9970ab',
      '#c2a5cf',
      '#e7d4e8',
      '#d9f0d3',
      '#a6dba0',
      '#5aae61',
      '#1b7837',
      '#00441b',
    ],
  },
  {
    id: 'schemePiYG',
    label: 'pink/green',
    isDiverging: true,
    colors: [
      '#8e0152',
      '#c51b7d',
      '#de77ae',
      '#f1b6da',
      '#fde0ef',
      '#e6f5d0',
      '#b8e186',
      '#7fbc41',
      '#4d9221',
      '#276419',
    ],
  },
  {
    id: 'schemePuOr',
    label: 'purple/orange',
    isDiverging: true,
    colors: [
      '#2d004b',
      '#542788',
      '#8073ac',
      '#b2abd2',
      '#d8daeb',
      '#fee0b6',
      '#fdb863',
      '#e08214',
      '#b35806',
      '#7f3b08',
    ],
  },
  {
    id: 'schemeRdBu',
    label: 'red/blue',
    isDiverging: true,
    colors: [
      '#67001f',
      '#b2182b',
      '#d6604d',
      '#f4a582',
      '#fddbc7',
      '#d1e5f0',
      '#92c5de',
      '#4393c3',
      '#2166ac',
      '#053061',
    ],
  },
  {
    id: 'schemeRdGy',
    label: 'red/gray/black',
    isDiverging: true,
    colors: [
      '#67001f',
      '#b2182b',
      '#d6604d',
      '#f4a582',
      '#fddbc7',
      '#e0e0e0',
      '#bababa',
      '#878787',
      '#4d4d4d',
      '#1a1a1a',
    ],
  },
  {
    id: 'schemeRdYlBu',
    label: 'red/yellow/blue',
    colors: [
      '#a50026',
      '#d73027',
      '#f46d43',
      '#fdae61',
      '#fee090',
      '#e0f3f8',
      '#abd9e9',
      '#74add1',
      '#4575b4',
      '#313695',
    ],
    isDiverging: true,
  },
  {
    id: 'schemeRdYlGn',
    label: 'red/yellow/green',
    colors: [
      '#a50026',
      '#d73027',
      '#f46d43',
      '#fdae61',
      '#fee08b',
      '#d9ef8b',
      '#a6d96a',
      '#66bd63',
      '#1a9850',
      '#006837',
    ],
    isDiverging: true,
  },
  {
    id: 'schemeSpectral',
    label: 'rainbow',
    colors: [
      '#9e0142',
      '#d53e4f',
      '#f46d43',
      '#fdae61',
      '#fee08b',
      '#e6f598',
      '#abdda4',
      '#66c2a5',
      '#3288bd',
      '#5e4fa2',
    ],
  },
  {
    id: 'schemeBlues',
    label: 'blues',
    colors: [
      '#b5d4e9',
      '#93c3df',
      '#6daed5',
      '#4b97c9',
      '#2f7ebc',
      '#1864aa',
      '#0a4a90',
      '#08306b',
    ],
  },
  {
    id: 'schemeGreens',
    label: 'greens',
    colors: [
      '#b7e2b1',
      '#97d494',
      '#73c378',
      '#4daf62',
      '#2f984f',
      '#157f3b',
      '#036429',
      '#00441b',
    ],
  },
  {
    id: 'schemeGrays',
    label: 'grays',
    colors: [
      '#cecece',
      '#b4b4b4',
      '#979797',
      '#7a7a7a',
      '#5f5f5f',
      '#404040',
      '#1e1e1e',
      '#000000',
    ],
  },
  {
    id: 'schemeOranges',
    label: 'oranges',
    colors: [
      '#fdc28c',
      '#fda762',
      '#fb8d3d',
      '#f2701d',
      '#e25609',
      '#c44103',
      '#9f3303',
      '#7f2704',
    ],
  },
  {
    id: 'schemePurples',
    label: 'purples',
    colors: [
      '#cecee5',
      '#b6b5d8',
      '#9e9bc9',
      '#8782bc',
      '#7363ac',
      '#61409b',
      '#501f8c',
      '#3f007d',
    ],
  },
  {
    id: 'schemeReds',
    label: 'reds',
    colors: [
      '#fcaa8e',
      '#fc8a6b',
      '#f9694c',
      '#ef4533',
      '#d92723',
      '#bb151a',
      '#970b13',
      '#67000d',
    ],
  },
  {
    id: 'schemeViridis',
    label: 'Viridis',
    colors: [
      '#482475',
      '#414487',
      '#355f8d',
      '#2a788e',
      '#21918c',
      '#22a884',
      '#44bf70',
      '#7ad151',
      '#bddf26',
      '#fde725',
    ],
  },
  {
    id: 'schemeInferno',
    label: 'Inferno',
    colors: [
      '#160b39',
      '#420a68',
      '#6a176e',
      '#932667',
      '#bc3754',
      '#dd513a',
      '#f37819',
      '#fca50a',
      '#f6d746',
      '#fcffa4',
    ],
  },
  {
    id: 'schemeMagma',
    label: 'Magma',
    colors: [
      '#140e36',
      '#3b0f70',
      '#641a80',
      '#8c2981',
      '#b73779',
      '#de4968',
      '#f7705c',
      '#fe9f6d',
      '#fecf92',
      '#fcfdbf',
    ],
  },
  {
    id: 'schemeWarm',
    label: 'Warm',
    colors: [
      '#963db3',
      '#bf3caf',
      '#e4419d',
      '#fe4b83',
      '#ff5e63',
      '#ff7847',
      '#fb9633',
      '#e2b72f',
      '#c6d63c',
      '#aff05b',
    ],
  },
  {
    id: 'schemeCool',
    label: 'Cool',
    colors: [
      '#6054c8',
      '#4c6edb',
      '#368ce1',
      '#23abd8',
      '#1ac7c2',
      '#1ddfa3',
      '#30ef82',
      '#52f667',
      '#7ff658',
      '#aff05b',
    ],
  },
  {
    id: 'schemeCubehelixDefault',
    label: 'Cube Helix',
    colors: [
      '#1a1530',
      '#163d4e',
      '#1f6642',
      '#54792f',
      '#a07949',
      '#d07e93',
      '#cf9cda',
      '#c1caf3',
      '#d2eeef',
      '#ffffff',
    ],
  },
  {
    id: 'schemeBuGn',
    label: 'blue/green',
    colors: [
      '#b7e4da',
      '#8fd3c1',
      '#68c2a3',
      '#49b17f',
      '#2f9959',
      '#157f3c',
      '#036429',
      '#00441b',
    ],
  },
  {
    id: 'schemeBuPu',
    label: 'blue/purple',
    colors: [
      '#b2cae1',
      '#9cb3d5',
      '#8f95c6',
      '#8c74b5',
      '#8952a5',
      '#852d8f',
      '#730f71',
      '#4d004b',
    ],
  },
  {
    id: 'schemeGnBu',
    label: 'green/blue',
    colors: [
      '#bde5bf',
      '#9ed9bb',
      '#7bcbc4',
      '#58b7cd',
      '#399cc6',
      '#1d7eb7',
      '#0b60a1',
      '#084081',
    ],
  },
  {
    id: 'schemeOrRd',
    label: 'orange/red',
    colors: [
      '#fdca94',
      '#fdb07a',
      '#fa8e5d',
      '#f16c49',
      '#e04530',
      '#c81d13',
      '#a70403',
      '#7f0000',
    ],
  },
  {
    id: 'schemePuBuGn',
    label: 'purple/blue/green',
    colors: [
      '#bec9e2',
      '#98b9d9',
      '#69a8cf',
      '#4096c0',
      '#19879f',
      '#037877',
      '#016353',
      '#014636',
    ],
  },
  {
    id: 'schemePuBu',
    label: 'purple/blue',
    colors: [
      '#bfc9e2',
      '#9bb9d9',
      '#72a8cf',
      '#4394c3',
      '#1a7db6',
      '#0667a1',
      '#045281',
      '#023858',
    ],
  },
  {
    id: 'schemePuRd',
    label: 'purple/red',
    colors: [
      '#d0aad2',
      '#d08ac2',
      '#dd63ae',
      '#e33890',
      '#d71c6c',
      '#b70b4f',
      '#8f023a',
      '#67001f',
    ],
  },
  {
    id: 'schemeRdPu',
    label: 'red/purple',
    colors: [
      '#fbb5bc',
      '#f993b0',
      '#f369a3',
      '#e03e98',
      '#c01788',
      '#99037c',
      '#700174',
      '#49006a',
    ],
  },
  {
    id: 'schemeYlGnBu',
    label: 'yellow/green/blue',
    colors: [
      '#d5eeb3',
      '#a9ddb7',
      '#73c9bd',
      '#45b4c2',
      '#2897bf',
      '#2073b2',
      '#234ea0',
      '#1c3185',
      '#081d58',
    ],
  },
  {
    id: 'schemeYlGn',
    label: 'yellow/green',
    colors: [
      '#e4f4ac',
      '#c7e89b',
      '#a2d88a',
      '#78c578',
      '#4eaf63',
      '#2f944e',
      '#15793f',
      '#036034',
      '#004529',
    ],
  },
  {
    id: 'schemeYlOrBr',
    label: 'yellow/orange/brown',
    colors: [
      '#feeaa1',
      '#fed676',
      '#feba4a',
      '#fb992c',
      '#ee7918',
      '#d85b0a',
      '#b74304',
      '#8f3204',
      '#662506',
    ],
  },
  {
    id: 'schemeYlOrRd',
    label: 'yellow/orange/red',
    colors: [
      '#fee087',
      '#fec965',
      '#feab4b',
      '#fd893c',
      '#fa5c2e',
      '#ec3023',
      '#d31121',
      '#af0225',
      '#800026',
    ],
  },
].map(s => new SequentialScheme(s));

export default schemes;