import { Grid, GridItem, HStack, Heading, Show } from "@chakra-ui/react";
import Navbar from "./components/Navbar";
import GameGrid from "./components/GameGrid";
import GenreList from "./components/GenreList";
import { useMemo, useState } from "react";
import { Genre } from "./hooks/useGenres";
import PlatformSelector from "./components/PlatformSelector";
import SortSelector from "./components/SortSelector";
import { Platform } from "./hooks/usePlatforms";

export interface GameQuery {
  genre: Genre | null;
  platform: Platform | null;
  sorting: string | null;
  searching: string | null;
}

function App() {
  const [gameQuery, setGameQuery] = useState<GameQuery>({} as GameQuery);

  const header = useMemo(() => {
    let text = "Games";
    if (gameQuery.genre) text = gameQuery.genre.name + " " + text;
    if (gameQuery.platform) text = gameQuery.platform.name + " " + text;
    return text;
  }, [gameQuery.genre, gameQuery.platform]);

  return (
    <Grid
      templateAreas={{
        base: `"nav" "main"`,
        lg: `"nav nav" "aside main"`,
      }}
      templateColumns={{
        base: "1fr",
        lg: "200px 1fr",
      }}
    >
      <GridItem area="nav">
        <Navbar
          onSearch={(searching) => setGameQuery({ ...gameQuery, searching })}
        ></Navbar>
      </GridItem>
      <Show above="lg">
        <GridItem area="aside" paddingX={5}>
          <GenreList
            selectedGenre={gameQuery.genre}
            onSelectGenre={(genre) => setGameQuery({ ...gameQuery, genre })}
          />
        </GridItem>
      </Show>
      <GridItem area="main" paddingX="10px">
        <Heading as="h2" size="2xl" paddingY={8}>
          {header}
        </Heading>
        <HStack paddingBottom={4}>
          <PlatformSelector
            selectedPlatform={gameQuery.platform}
            onSetSelectedPlatform={(platform) =>
              setGameQuery({ ...gameQuery, platform })
            }
          />
          <SortSelector
            selectedSort={gameQuery.sorting}
            onSetSelectedSort={(sorting) =>
              setGameQuery({ ...gameQuery, sorting })
            }
          />
        </HStack>
        <GameGrid gameQuery={gameQuery} />
      </GridItem>
    </Grid>
  );
}

export default App;
