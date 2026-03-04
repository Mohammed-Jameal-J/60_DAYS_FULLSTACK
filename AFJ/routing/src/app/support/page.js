'use client'

import { useRouter } from "next/navigation"

const page = () => {
  const router = useRouter()
  return (
    <div>
      support page
       <button onClick={() => router.push('/dashboard')}>Go to dashboard</button>
      </div>
   
  )
}

export default page