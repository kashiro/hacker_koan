import fontLoader from './lib/font';

fontLoader(
  [
    [
      'Cutive Mono',
      'local(\'Cutive Mono Regular\'), local(\'CutiveMono-Regular\'), url(https://fonts.gstatic.com/s/cutivemono/v6/N5odNRruTwjvCM8y77PhQaE8kM4xWR1_1bYURRojRGc.woff2) format(\'woff2\')',
      {
        style: 'normal',
        weight: 400,
        unicodeRange:
          'U+0100-024F, U+1E00-1EFF, U+20A0-20AB, U+20AD-20CF, U+2C60-2C7F, U+A720-A7FF',
      },
    ],
    [
      'Cutive Mono',
      'local(\'Cutive Mono Regular\'), local(\'CutiveMono-Regular\'), url(https://fonts.gstatic.com/s/cutivemono/v6/N5odNRruTwjvCM8y77PhQYgp9Q8gbYrhqGlRav_IXfk.woff2) format(\'woff2\')',
      {
        style: 'normal',
        weight: 400,
        unicodeRange:
          'U+0000-00FF, U+0131, U+0152-0153, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2212, U+2215',
      },
    ],
    [
      'FontAwesome',
      'url(\'https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/fonts/fontawesome-webfont.woff2?v=4.7.0\') format(\'woff2\')',
      {
        style: 'normal',
        weight: 400,
      },
    ],
    [
      'devicon',
      'url(\'https://cdn.rawgit.com/konpa/devicon/df6431e323547add1b4cf45992913f15286456d3/fonts/devicon.woff?-hdf3wh\') format(\'woff\')',
      {
        style: 'normal',
        weight: 400,
      },
    ],
  ],
  'font-loaded'
);
