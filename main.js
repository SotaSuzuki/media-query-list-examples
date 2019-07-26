const BREAK_POINTS = {
  SMALL: '480',
  MEDIUM: '880',
  LARGE: '1080',
}
Object.freeze(BREAK_POINTS)

let ww = window.innerWidth

const MEDIA_QUERY_LIST = Object.keys(BREAK_POINTS).reduce((list, size) => {
  list[size] = {
    MIN: `min-width: ${BREAK_POINTS[size]}px`,
    MAX: `max-width: ${BREAK_POINTS[size]}px`,
  }
  return list
}, [])

let mediaMatches = []

const handleResize = () => {
  ww = window.innerWidth

  if (ww < BREAK_POINTS.SMALL) {
    if (!mediaMatches.includes(MEDIA_QUERY_LIST.SMALL.MAX)) {
      mediaMatches.push(MEDIA_QUERY_LIST.SMALL.MAX);
      console.log('480px より小さくなった')
    }
  }

  if (ww > BREAK_POINTS.SMALL) {
    if (!mediaMatches.includes(MEDIA_QUERY_LIST.SMALL.MIN)) {
      mediaMatches.push(MEDIA_QUERY_LIST.SMALL.MIN);
      console.log('480px より大きくなった')
    }
  }

  console.log(mediaMatches);

  // if (ww <= BREAK_POINTS.SMALL && !mediaQueryList['max:small']) {
  //   console.log('max 480');
  //   mediaQueryList['max:small'] = true;
  //   return;
  // }
  // if (ww > BREAK_POINTS.SMALL && mediaQueryList['max:small']) {
  //   console.log('min 480');
  //   mediaQueryList['max:small'] = false;
  //   return;
  // }
}

window.addEventListener('resize', handleResize)