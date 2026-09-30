import {supabase} from "@/lib/supabase";
export async function searchProfiles(query:string,limit=20){const {data,error}=await supabase.rpc("search_profiles",{p_query:query,p_limit:limit});if(error)throw error;return data??[];}
export async function getProfile(id:string){const {data,error}=await supabase.from("profiles").select("id,username,display_name,avatar_path,bio,status_text,is_active,last_seen_at,created_at").eq("id",id).maybeSingle();if(error)throw error;return data;}
export async function toggleFollow(targetUserId:string){const {data,error}=await supabase.rpc("toggle_follow",{p_target_user_id:targetUserId});if(error)throw error;return data;}
export async function toggleFavorite(targetUserId:string){const {data,error}=await supabase.rpc("toggle_favorite",{p_target_user_id:targetUserId});if(error)throw error;return data;}
export async function toggleBlock(targetUserId:string){const {data,error}=await supabase.rpc("toggle_block",{p_target_user_id:targetUserId});if(error)throw error;return data;}

export async function listFollowers(userId:string,limit=50){const {data,error}=await supabase.rpc("list_followers",{p_user_id:userId,p_limit:limit});if(error)throw error;return data??[];}
export async function listFollowing(userId:string,limit=50){const {data,error}=await supabase.rpc("list_following",{p_user_id:userId,p_limit:limit});if(error)throw error;return data??[];}
