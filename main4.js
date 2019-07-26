const BREAK_POINTS = {
  SM: '480',
  MD: '880',
  LG: '1080',
}

const ranges = {
  xs: { min: 0, max: BREAK_POINTS.SM -1 },
  sm: { min: BREAK_POINTS.SM, max: BREAK_POINTS.MD - 1 },
  md: { min: BREAK_POINTS.MD, max: BREAK_POINTS.LG },
  lg: { min: BREAK_POINTS.LG, max: Number.POSITIVE_INFINITY },
}

const screen = `only screen and `;
const landscape = '(orientation: landscape)';
const portrait = '(orientation: portrait)';
const min = (range) => `(min-width: ${ranges[range].min}px)`
const max = (range) => `(max-width: ${ranges[range].max}px)`;

const getMatchedMedia = (...mediaQueries) => {
  const queryStr = screen + mediaQueries.join(' and ');
  return window.matchMedia(queryStr).matches;
}

const isScreenXSmall = () => getMatchedMedia(max('xs'));
const isScreenSmall = () => getMatchedMedia(min('sm'), max('sm'));
const isScreenMediumUp = () => getMatchedMedia(min('md'));

console.log(
  'xsmall', isScreenXSmall()
)
console.log(
  'small', isScreenSmall()
)
console.log(
  'mediumUp', isScreenMediumUp()
)
const titleEl = document.querySelector('.title');

if (isScreenMediumUp()) {
  titleEl.classList.add('md');
}
if (isScreenSmall()) {
  titleEl.classList.add('sm');
}
if (isScreenXSmall()) {
  titleEl.classList.add('xs');
}