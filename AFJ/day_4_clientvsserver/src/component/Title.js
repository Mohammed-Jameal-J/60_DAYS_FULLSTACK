'use client'
import React from 'react'

const Title = () => {
  const [name, setName] = React.useState('');
  const handleClick = () => {
    alert(`User ID: ${name}`);
    setName('');
  }
  return (
    <div>
      <h2>Get User</h2>
      <input placeholder="Enter user ID" value={name} onChange={(e) => setName(e.target.value)} />
      <button onClick={handleClick}>Display User</button>
    </div>
  )
}

export default Title