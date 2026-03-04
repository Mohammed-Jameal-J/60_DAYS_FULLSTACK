import React from 'react'

async function getData() {
  // Simulate an API call
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve({ message: "Hello from the dashboard!" });
    }, 1000);
  });
}

const page = async () => {
  const data = await getData();
  return (
           <div>
      <h1>Dashboard Page</h1>
      <p>{data.message}</p>
           </div>
            
  )
}

export default page