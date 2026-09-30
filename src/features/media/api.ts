import {supabase} from "@/lib/supabase";

export type PickedMedia={uri:string;mimeType:string;fileName:string;fileSize:number;width?:number;height?:number;durationMs?:number};

export async function uploadMedia(asset:PickedMedia){
  const {data:{user}}=await supabase.auth.getUser();
  if(!user) throw new Error("You must be signed in to upload media.");
  const response=await fetch(asset.uri);
  if(!response.ok) throw new Error("Unable to read selected media.");
  const bytes=await response.arrayBuffer();
  const bucket="content-media";
  const path=user.id+"/"+Date.now()+"-"+asset.fileName;
  const result=await supabase.storage.from(bucket).upload(path,bytes,{contentType:asset.mimeType,upsert:false});
  if(result.error) throw result.error;
  return result.data;
}
