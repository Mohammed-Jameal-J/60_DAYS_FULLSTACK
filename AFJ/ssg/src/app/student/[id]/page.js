import React from 'react'

const students = [1,2,3,4,5,6];

export async function generateStaticParams() {
    return students.map((id) => {
      return { id : id.toString() }
    })
}

const DynamicPage = async ({params}) => {
    const lag = await params

  return (
    <div>DynamicPage - {lag.id}</div>
  )
}

export default DynamicPage