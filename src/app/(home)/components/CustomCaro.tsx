import { Carousel_001 } from "@/components/ui/skiper-ui/skiper47";


const image = [
     {
        src:"/assets/images/card2.png",
        alt: "",
        link: ""
     },
      {
        src: "/assets/images/card3.png",
        alt: "",
        link: ""
     },
      {
        src:  "/assets/images/card4.png",
        alt: "",
        link: ""
     },
       {
        src:  "/assets/images/card7.png",
        alt: "",
        link: ""
     },
      {
        src:  "/assets/images/card8.png",
        alt: "",
        link: ""
     },
     {
      src:  "/assets/images/card9.png",
      alt: "",
      link: ""
   }
]

import React from 'react'

const CustomCaro = () => {
  return (
     <Carousel_001
       images={image}
     showPagination={true}
      showNavigation={true}
      loop={true}
      autoplay={true}
      spaceBetween={80}
     />
  )
}

export default CustomCaro
