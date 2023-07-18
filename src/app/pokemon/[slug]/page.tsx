'use client'

import React, { Suspense } from 'react';
async function getPokemons (name:string) {
    const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${name}`,{
    })
    return await response.json()
}

export default async function page({params}:{params:{slug:string}})  {
    const data = await getPokemons(params.slug)
    console.log(data)
    return (
        <div>
            
            <Suspense fallback={<div>Loading...</div>}>
             <div>{data.name}</div>
            </Suspense>
        </div>
    );
};
