import React from 'react'

import Navbar from '../../components/Navbar/Index'
import Footer from '../../components/Footer/Index'

export default function Index({ children }: { children: React.ReactNode }) {
  return (
    <>
      <Navbar />
      { children }
      <Footer />
    </>
  )
}
