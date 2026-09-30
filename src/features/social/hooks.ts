import {useMutation,useQuery,useQueryClient} from "@tanstack/react-query"; import {searchProfiles,toggleFollow,toggleFavorite,toggleBlock} from "./api";
export function useProfileSearch(query:string){return useQuery({queryKey:["profiles","search",query],queryFn:()=>searchProfiles(query),enabled:query.trim().length>0,staleTime:30_000});}
export function useToggleFollow(){const qc=useQueryClient();return useMutation({mutationFn:toggleFollow,onSuccess:()=>qc.invalidateQueries({queryKey:["profiles"]})});}
export function useToggleFavorite(){return useMutation({mutationFn:toggleFavorite});}
export function useToggleBlock(){return useMutation({mutationFn:toggleBlock});}