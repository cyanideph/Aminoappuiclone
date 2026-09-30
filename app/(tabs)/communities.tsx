import {Text,TextInput,View} from "react-native";
import {Screen} from "@/components/Screen";
import {CommunityCard} from "@/components/CommunityCard";
import {useRooms} from "@/features/rooms/hooks";

export default function Communities(){
 const {data:rooms,isLoading,error}=useRooms();
 return <Screen>
  <Text style={{fontSize:30,fontWeight:"900",color:"#17181A",marginTop:12}}>Communities</Text>
  <TextInput placeholder="Search communities" placeholderTextColor="#92959C" style={{backgroundColor:"#fff",borderWidth:1,borderColor:"#E6E8EC",borderRadius:16,padding:14,marginVertical:18,fontSize:15}}/>
  {isLoading?<Text style={{color:"#74777D",padding:16}}>Loading communities…</Text>:null}
  {error?<Text style={{color:"#74777D",padding:16}}>Showing preview communities while the backend is unavailable.</Text>:null}
  {(rooms&&rooms.length?rooms.map(room=><CommunityCard key={room.id} name={room.name} subtitle={room.province_code?room.province_code+" · "+room.kind:"Community · "+room.kind} color="#6C4DFF"/>):[
   ["Music Lovers","128K members · Active now","#8B5CF6"],
   ["Anime & Manga","94K members · 2.1K online","#EC4899"],
   ["Gaming PH","61K members · 840 online","#0EA5E9"],
   ["Photography","37K members · 510 online","#10B981"]
  ].map(([name,subtitle,color])=><CommunityCard key={name} name={name} subtitle={subtitle} color={color}/>))}
 </Screen>;
}