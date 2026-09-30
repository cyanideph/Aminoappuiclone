import {useMutation,useQuery,useQueryClient} from "@tanstack/react-query"; import {getProfile,searchProfiles,toggleFollow,toggleFavorite,toggleBlock,listFollowers,listFollowing,listProfileComments,addProfileComment,recordProfileVisit} from "./api";
export function useProfileSearch(query:string){return useQuery({queryKey:["profiles","search",query],queryFn:()=>searchProfiles(query),enabled:query.trim().length>0,staleTime:30_000});}
export function useProfile(id:string){return useQuery({queryKey:["profile",id],queryFn:()=>getProfile(id),enabled:!!id,staleTime:30_000});}
export function useToggleFollow(){const qc=useQueryClient();return useMutation({mutationFn:toggleFollow,onSuccess:()=>qc.invalidateQueries({queryKey:["profiles"]})});}
export function useToggleFavorite(){const qc=useQueryClient();return useMutation({mutationFn:toggleFavorite,onSuccess:()=>qc.invalidateQueries({queryKey:["profile"]})});}
export function useToggleBlock(){return useMutation({mutationFn:toggleBlock});}

export function useFollowers(id:string){return useQuery({queryKey:["profile",id,"followers"],queryFn:()=>listFollowers(id),enabled:!!id,staleTime:30_000});}
export function useFollowing(id:string){return useQuery({queryKey:["profile",id,"following"],queryFn:()=>listFollowing(id),enabled:!!id,staleTime:30_000});}
export function useProfileComments(id:string){return useQuery({queryKey:["profile",id,"comments"],queryFn:()=>listProfileComments(id),enabled:!!id,staleTime:15_000});}
export function useAddProfileComment(){const qc=useQueryClient();return useMutation({mutationFn:({profileId,body}:{profileId:string;body:string})=>addProfileComment(profileId,body),onSuccess:(_,v)=>qc.invalidateQueries({queryKey:["profile",v.profileId,"comments"]})});}
export function useRecordProfileVisit(){return useMutation({mutationFn:recordProfileVisit});}
