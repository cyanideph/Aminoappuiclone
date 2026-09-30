import {supabase} from "@/lib/supabase";
export type Room={id:string;name:string;description:string|null;province_code:string|null;kind:"public"|"private"|"group"};
export async function listRooms():Promise<Room[]>{
 const {data,error}=await supabase.from("rooms").select("id,name,description,province_code,kind").eq("is_active",true).order("updated_at",{ascending:false});
 if(error) throw error;
 return (data??[]) as Room[];
}