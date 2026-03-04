import Link from 'next/link'
import React from 'react'

const page = () => {
  return (

    <div>
        <nav>
            <Link href="/support">Support</Link> |
             <Link href="/">Home</Link> | 
             <Link href="/dashboard">Dashboard</Link>
        </nav>
         <h1>contactpage</h1>
    </div>
   


  )
}

export default page