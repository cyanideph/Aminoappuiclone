import {useMutation,useQuery,useQueryClient} from "@tanstack/react-query"; import {listRooms,joinRoom,sendRoomMessage,listRoomMessages} from "./api";
export function useRooms(){return useQuery({queryKey:["rooms"],queryFn:listRooms,staleTime:30_000,refetchOnReconnect:true});}
export function useRoomMessages(roomId:string){return useQuery({queryKey:["room-messages",roomId],queryFn:()=>listRoomMessages(roomId),enabled:!!roomId,staleTime:5_000,refetchOnReconnect:true});}
export function useJoinRoom(){const qc=useQueryClient();return useMutation({mutationFn:joinRoom,onSuccess:()=>qc.invalidateQueries({queryKey:["rooms"]})});}
export function useSendRoomMessage(){const qc=useQueryClient();return useMutation({mutationFn:({roomId,body}:{roomId:string;body:string})=>sendRoomMessage(roomId,body),onSuccess:(_,v)=>qc.invalidateQueries({queryKey:["room-messages",v.roomId]})});}
