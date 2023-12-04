
const switchTheme = (className) => {
   let a = document.querySelector(`'.${className}'`);
   a.addEventListener(click => {
      if (a.classList.contains('active')) {
         a.classList.remove('active')
      } else {
         a.classList.add('active')
      }
   })
}


export default switchTheme;