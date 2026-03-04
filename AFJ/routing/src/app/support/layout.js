import React from 'react'
import Link from 'next/link'

const ContactLayout = ({children}) => {
  return (
    <div>
                <nav>
            <Link href="/support">Support</Link> |
             <Link href="/">Home</Link> | 
             <Link href="/dashboard">Dashboard</Link>
        </nav>
        {children}
    </div>
  )
}

export default ContactLayout