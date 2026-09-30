import {useQuery} from "@tanstack/react-query";
import {listRooms} from "./api";
export function useRooms(){return useQuery({queryKey:["rooms"],queryFn:listRooms,staleTime:30_000});}