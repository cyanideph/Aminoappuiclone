import {useMutation} from "@tanstack/react-query";
import {pickMedia,uploadMedia} from "./api";

export function usePickMedia(){return useMutation({mutationFn:pickMedia});}
export function useUploadMedia(){return useMutation({mutationFn:(value:{asset:Parameters<typeof uploadMedia>[0];bucket:"content-media"|"room-media"})=>uploadMedia(value.asset,value.bucket)});}
