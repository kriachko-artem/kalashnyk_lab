import {gsap} from "gsap";

export function toCling(element) {
   const devices = new RegExp('Android|webOS|iPhone|iPad|iPod|BlackBerry|BB|PlayBook|IEMobile|Windows Phone|Kindle|Silk|Opera Mini', "i");
   if (!devices.test(navigator.userAgent)) {
      element.addEventListener('mouseenter', (event)=> {
         move(to(event), 1.4)
         element.onmousemove = (event)=> move(to(event), 1.2)
      })
      element.onmouseleave = ()=> {
         element.onmousemove = null;
         move({x:0, y:0}, 1.3)
      }
   }
   function to(event){
      const center = {
         x: element.offsetWidth / 2,
         y: element.offsetHeight / 2
      };
      return {
         x: -center.x + event.offsetX,
         y: -center.y + event.offsetY,
      }
   }
   function move(to, duration){
      gsap.to(element,{
         translateX: to.x,
         translateY: to.y,
         duration: duration,
         ease: "elastic.out(1, 0.3)",
      })
   }
}