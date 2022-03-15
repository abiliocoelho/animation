import { createNativeStackNavigator } from "@react-navigation/native-stack";

const { Navigator, Screen } = createNativeStackNavigator();

import { Welcome } from "../pages/Welcome";
import { SignIn } from "../pages/SignIn";

declare global {
  namespace ReactNavigation {
    interface RootParamList {
      signin: undefined;
      welcome: undefined;
    }
  }
}

export function Routes() {
  return (
    <Navigator
      screenOptions={{
        headerShown: false,
      }}
    >
      <Screen name="welcome" component={Welcome} />
      <Screen name="signin" component={SignIn} />
    </Navigator>
  );
}
