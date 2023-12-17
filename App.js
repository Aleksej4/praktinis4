import { AdsScreen } from "./screens/adsScreen";
import { createStackNavigator } from "@react-navigation/stack";
import { NavigationContainer } from "@react-navigation/native"
import { DataContextProvider } from "./adsData/DataContext";
import { AdScreen } from "./screens/adScreen";
import { CustomHeaderButton } from "./components/headerCustomButton";
import { ProfileScreen } from "./screens/profileScreen";
import { CreateAd } from "./screens/createAd";
import { UpdateAd } from "./screens/updateAd";
import { LogInScreen } from "./screens/logInScreen";
import { RegisterScreen } from "./screens/registerScreen";

const Stack = createStackNavigator();

export default function App() {
  return (
    <DataContextProvider>
      <NavigationContainer>
        <Stack.Navigator initialRouteName='LogInScreen' screenOptions={({ navigation }) => ({
            headerRight: () => <CustomHeaderButton navigation={navigation} />})}>
          <Stack.Screen name="LogInScreen" component={LogInScreen} options={{headerShown: false}}/>
          <Stack.Screen name="RegisterScreen" component={RegisterScreen} options={{headerShown: false}}/>
          <Stack.Screen name="AdsScreen" component={AdsScreen} options={{title: "Auto Ads"}}/>
          <Stack.Screen name="AdScreen" component={AdScreen} options={{title: "Auto"}}/>
          <Stack.Screen name="ProfileScreen" component={ProfileScreen} options={{title: "Profile"}}/>
          <Stack.Screen name="CreateAd" component={CreateAd} options={{title: "New Ad"}}/>
          <Stack.Screen name="UpdateAd" component={UpdateAd} options={{title: "Edit Ad"}}/>
        </Stack.Navigator>
      </NavigationContainer>
    </DataContextProvider>
  );
}