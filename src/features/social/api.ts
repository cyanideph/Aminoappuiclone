import {supabase} from "@/lib/supabase";
export async function searchProfiles(query:string,limit=20){const {data,error}=await supabase.rpc("search_profiles",{p_query:query,p_limit:limit});if(error)throw error;return data??[];}
export async function getProfile(id:string){const {data,error}=await supabase.from("profiles").select("id,username,display_name,avatar_path,bio,status_text,is_active,last_seen_at,created_at").eq("id",id).maybeSingle();if(error)throw error;return data;}
export async function toggleFollow(targetUserId:string){const {data,error}=await supabase.rpc("toggle_follow",{p_target_user_id:targetUserId});if(error)throw error;return data;}
export async function toggleFavorite(targetUserId:string){const {data,error}=await supabase.rpc("toggle_favorite",{p_target_user_id:targetUserId});if(error)throw error;return data;}
export async function toggleBlock(targetUserId:string){const {data,error}=await supabase.rpc("toggle_block",{p_target_user_id:targetUserId});if(error)throw error;return data;}

export async function listFollowers(userId:string,limit=50){const {data,error}=await supabase.rpc("list_followers",{p_user_id:userId,p_limit:limit});if(error)throw error;return data??[];}
export async function listFollowing(userId:string,limit=50){const {data,error}=await supabase.rpc("list_following",{p_user_id:userId,p_limit:limit});if(error)throw error;return data??[];}

export async function listProfileComments(profileId:string,beforeCreatedAt:string|null=null,beforeId:string|null=null,limit=50){const {data,error}=await supabase.rpc("list_profile_comments",{p_profile_id:profileId,p_before_created_at:beforeCreatedAt,p_before_id:beforeId,p_limit:limit});if(error)throw error;return Array.isArray(data)?data:(data?.items??[]);}
export async function addProfileComment(profileId:string,body:string,parentId:string|null=null){const {data,error}=await supabase.rpc("add_profile_comment",{p_profile_id:profileId,p_body:body,p_parent_id:parentId});if(error)throw error;return data;}
export async function recordProfileVisit(profileId:string){const {data,error}=await supabase.rpc("record_profile_visit",{p_profile_id:profileId});if(error)throw error;return data;}
