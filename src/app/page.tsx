'use client'

import { useEffect, useState } from 'react'
import Link from 'next/link'
import Image from 'next/image'

export default function Home() {

  const [pokemons, setPokemons] = useState<GetPokemonsType>()

  type PokemonResultType = {
    name: string
    url: string
  }

  type GetPokemonsType = {
    count: number
    next: string
    previous: string
    results: PokemonResultType[]
  }

  useEffect(() => {
    async function getPokemons () {
      const response = await fetch("https://pokeapi.co/api/v2/pokemon")
      setPokemons( await response.json())
    }
    getPokemons()
  }, [])


  return (
      <main className="w-full h-[100vh] flex justify-center items-center">   
       <div className='grid grid-cols-4 gap-2.5 w-[80%]'>
        {pokemons && pokemons.results.map(({name},i) => (
            <Link href={`/pokemon/${name}`} key={i}>
              <div className='bg-gray-200 p-2 rounded-md w-28'>
                {name}
              </div>
            </Link>
        ))}
       </div>
      </main>
  )
}
