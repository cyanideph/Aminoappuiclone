import "../global.css";
import {Stack} from "expo-router";
import {SafeAreaProvider} from "react-native-safe-area-context";
import {QueryClient,QueryClientProvider} from "@tanstack/react-query";
import {StatusBar} from "expo-status-bar";
import {useTheme,ThemeProvider} from "../src/theme";
const queryClient=new QueryClient();
function AppShell(){const {isDark}=useTheme();return <><StatusBar style={isDark?"light":"dark"}/><Stack screenOptions={{headerShown:false}}/></>;}
export default function RootLayout(){return <SafeAreaProvider><QueryClientProvider client={queryClient}><ThemeProvider><AppShell/></ThemeProvider></QueryClientProvider></SafeAreaProvider>;}