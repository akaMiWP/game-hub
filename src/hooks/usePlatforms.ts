import useData from "./useData";
import { Platform } from "./useGames";

export const usePlatform = () => useData<Platform>("platforms/lists/parents");
