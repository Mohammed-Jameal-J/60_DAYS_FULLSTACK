"use client"

import React, { useState , useTransition } from 'react'
import { useRouter } from 'next/router';

const SearchBar = () => {
    const [query, setQuery] = useState(''); 
    const router = useRouter();
    
    const handleChange = (value: string) => {
        setQuery(value);
        router.push(`/products?search=${encodeURIComponent(value)}`);
    }

    return (
        <div className='search-bar mb-4'>
            <input 
                type='text' 
                placeholder='Search products...' 
                value={query} 
                onChange={(e) => handleChange(e.target.value)} 
                className='input input-bordered w-full max-w-xs'
            />
        </div>
    )
}

export default SearchBar