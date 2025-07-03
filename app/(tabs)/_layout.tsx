import AntDesign from '@expo/vector-icons/AntDesign';
import MaterialCommunityIcons from '@expo/vector-icons/MaterialCommunityIcons';
import { Tabs } from "expo-router";

export default function RootLayout() {
  return <Tabs screenOptions={{tabBarActiveTintColor:'coral'}}>
    <Tabs.Screen name="index" options={{title: 'Home' , tabBarIcon:({color, focused})=>{
     return focused?<MaterialCommunityIcons name="home-circle" size={24} color={color}/>:<MaterialCommunityIcons name="home-circle-outline" size={24} color={color} />}
    ,}}/>
    <Tabs.Screen name="login" options={{title: 'Login', tabBarIcon:({color})=>{
      return <AntDesign name="login" size={24} color={color} />
    },}}/>
  </Tabs>;
}
