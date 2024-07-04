import { GameQuery } from "../App";
import { Platform } from "../components/PlatformSelector";
import useData from "./useData";

export interface Game {
  id: number;
  name: string;
  background_image: string;
  parent_platforms: { platform: Platform }[];
  metacritic: number;
}
const useGames = (gameQuery: GameQuery) =>
  useData<Game>(
    "/games",
    {
      params: {
        genres: gameQuery.genre?.id,
        platforms: gameQuery.platform?.id,
        ordering: gameQuery.sorting,
      },
    },
    [gameQuery.genre?.id, gameQuery.platform?.id, gameQuery.sorting]
  );

export default useGames;
