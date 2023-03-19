import { Layout } from '@/components/layouts'
import { FavoritePokemons } from '../../components/layouts/pokemon/FavoritePokemons'
import { NoFavorites } from '@/components/layouts/ui/NoFavorites'
import { useEffect, useState } from 'react'
import { localFavorites } from 'utils'

const FavoritePages = () => {
    const [favoritePokemons, setFavoritePokemons] = useState<number[]>([])

    useEffect(() => {
        setFavoritePokemons(localFavorites.pokemons())
    }, [])
    
    return (
        <Layout title="Pókemons - Favoritos">
            {favoritePokemons.length === 0
                ? ( <NoFavorites/> )
                : ( <FavoritePokemons pokemons={favoritePokemons} /> )
            }
            
        </Layout>
    )
}

export default FavoritePages