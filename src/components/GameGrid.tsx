import { SimpleGrid, Text } from '@chakra-ui/react';
import useGames from '../hooks/useGAmes';
import GameCard from './GameCard';
import GameCardSkeleton from './GameCardSkeleton';
import GameCardContainer from './GameCardContainer';

const GameGrid = () => {
    const { data, error, isLoading } = useGames();
    const skeletons = [1, 2, 3, 4, 5, 6, 7, 8, 9];

    return (
        <SimpleGrid columns={{sm: 1, md: 2, lg: 3, xl:4}} padding="10px" spacing={3}>
            {error && <Text>{error}</Text>}
            {isLoading && skeletons.map((Skeleton) =>
                <GameCardContainer>
                    <GameCardSkeleton key={Skeleton} />
                </GameCardContainer>
            )}
            {data.map((game) => (
                <GameCardContainer>
                    <GameCard key={game.id} game={game} />
                </GameCardContainer>
            ))}   
        </SimpleGrid>    
    )
}

export default GameGrid