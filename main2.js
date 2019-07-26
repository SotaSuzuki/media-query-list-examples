const title = document.querySelector('.title');
const mediaQueryList = window.matchMedia('(max-width: 480px)');
// mediaQueryList.onchange = (event) => {
//   console.log(event.target);
// }
mediaQueryList.addListener(evt => {
  const { target: mql } = evt;
  if (mql.matches) {
    title.classList.add('small');
  } else {
    title.classList.remove('small');
  }
  console.log('onchange', mql.onchange);
  console.log('media', mql.media);
})

if (mediaQueryList.matches) {
  title.classList.add('small');
}