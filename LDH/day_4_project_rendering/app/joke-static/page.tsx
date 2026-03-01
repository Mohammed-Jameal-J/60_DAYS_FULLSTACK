import { Joke } from "@/types/joke";

import React from 'react'

const staticJokePage = async () => {
    const res = await fetch('https://official-joke-api.appspot.com/random_joke', { cache: 'force-cache' })
    const joke: Joke = await res.json()
    const buildTime = new Date().toLocaleTimeString()
  return (
    <div>
      <h2>{joke.type}</h2>
      <p>{joke.setup}</p>
      <p>{joke.punchline}</p>
      <p>Build Time: {buildTime}</p>
    </div>
  )
}

export default staticJokePage