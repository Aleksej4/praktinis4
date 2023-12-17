import { TouchableHighlight} from "react-native-gesture-handler";
import { Image } from "react-native";

export const CustomHeaderButton = ({navigation}) => (
    <TouchableHighlight onPress={() => {navigation.navigate('ProfileScreen')}} style={{ marginRight: 20, borderRadius: 15 }}>
        <Image source={require('../assets/profile.jpg')} style={{ width: 30, height: 30}}/>
    </TouchableHighlight>
)