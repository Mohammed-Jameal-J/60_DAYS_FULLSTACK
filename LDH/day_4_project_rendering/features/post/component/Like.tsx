'use client'

import React, { useState } from 'react'

const Like = () => {
    const [likes, setLikes] = useState(0)
    return (
        <div>
            <button onClick={() => setLikes(likes + 1)}>
                Like ({likes})
                </button>
        </div>
    )
}

export default Like