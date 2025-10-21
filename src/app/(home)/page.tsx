import React from 'react'
import Layout from './layout'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import ComponentsShowcase from './components/ComponentsShowcase'
import ButtonShowcase from './components/ButtonShowcase'
import Testimonials from './components/Testimonials'
import Work from './components/Work'
import Link from './components/Link'
import Faq from './components/Faq'
import Footer from './components/Footer'



const  Page = () => {
  return (
   <Layout>
     <Navbar/>
     <Hero/>
     <div className="bg-background">
       <ComponentsShowcase/>
       <Testimonials/>
       <Work/>
       <Link/>

       <Footer/>
     </div>
   </Layout>
  )
}

export default  Page