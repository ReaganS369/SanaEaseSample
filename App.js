const Stack = createNativeStackNavigator();
import * as React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { useFonts } from "expo-font";
import Loginsignup from "./screens/Loginsignup";
import Frame from "./components/Frame";
import Frame1 from "./components/Frame1";
import Frame2 from "./components/Frame2";
import Frame3 from "./components/Frame3";
import Frame4 from "./components/Frame4";
import Frame5 from "./components/Frame5";
import Frame6 from "./components/Frame6";
import Frame7 from "./components/Frame7";
import Frame8 from "./components/Frame8";
import Frame9 from "./components/Frame9";
import TermsAndConditions from "./screens/TermsAndConditions";
import LoginsignupOTP from "./screens/LoginsignupOTP";
import CustomerProfileHistry from "./screens/CustomerProfileHistry";
import CustomerProfile from "./screens/CustomerProfile";
import CustomerNotification from "./screens/CustomerNotification";
import SellerCustomerProfile from "./screens/SellerCustomerProfile";
import SellerCustomerLongPress from "./screens/SellerCustomerLongPress";
import SellerCustomer from "./screens/SellerCustomer";
import SellerCustomer1 from "./screens/SellerCustomer1";
import SellerCustomerFilter from "./screens/SellerCustomerFilter";
import SellerItemFilter from "./screens/SellerItemFilter";
import SellerQR from "./screens/SellerQR";
import SellerQR1 from "./screens/SellerQR1";
import Setting from "./screens/Setting";
import SellerProfile from "./screens/SellerProfile";
import SellerNotificationPressed from "./screens/SellerNotificationPressed";
import SellerNotification from "./screens/SellerNotification";
import SellerTopUp from "./screens/SellerTopUp";
import SellerAddCollection from "./screens/SellerAddCollection";
import SellerAddNewItemitemVarie from "./screens/SellerAddNewItemitemVarie";
import SellerAdd from "./screens/SellerAdd";
import SellerAdd1 from "./screens/SellerAdd1";
import SellerDaskboardWithReqz from "./screens/SellerDaskboardWithReqz";
import CustomerCart from "./screens/CustomerCart";
import CustomersSellerFilter from "./screens/CustomersSellerFilter";
import CustomersSellerFilter1 from "./screens/CustomersSellerFilter1";
import CustomerSellerPagePruchase from "./screens/CustomerSellerPagePruchase";
import CustomerSellerProfile from "./screens/CustomerSellerProfile";
import CustomerSearvhCustomer from "./screens/CustomerSearvhCustomer";
import CustomerDaskboard from "./screens/CustomerDaskboard";
import CustomerDaskboard1 from "./screens/CustomerDaskboard1";
import SellerDaskboard from "./screens/SellerDaskboard";
import SellerCartConfirm from "./screens/SellerCartConfirm";
import SellerCartConfirm1 from "./screens/SellerCartConfirm1";
import SellerCustomerProductRefund from "./screens/SellerCustomerProductRefund";
import SellerCart from "./screens/SellerCart";
import More from "./components/More";
import Frame10 from "./screens/Frame10";
import SellerDaskboardItemsUnhide from "./screens/SellerDaskboardItemsUnhide";
import SellerDaskboardItemsUnhide1 from "./screens/SellerDaskboardItemsUnhide1";
import SellerDaskboardItemUnhide from "./screens/SellerDaskboardItemUnhide";
import LaunchScreen from "./screens/LaunchScreen";
import LoginsignupOTP1 from "./screens/LoginsignupOTP1";
import Loginsignup1 from "./screens/Loginsignup1";
import SellerRegister from "./screens/SellerRegister";

import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { View, Text, Pressable, TouchableOpacity } from "react-native";

import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

const Tab = createBottomTabNavigator();
function BottomTabsRoot({ navigation }) {
  const [bottomTabItemsNormal] = React.useState([
    <Frame8 />,
    <Frame6 />,
    <Frame4 />,
    <Frame2 />,
    <Frame />,
  ]);
  const [bottomTabItemsActive] = React.useState([
    <Frame9 />,
    <Frame7 />,
    <Frame5 />,
    <Frame3 />,
    <Frame1 />,
  ]);
  return (
    <Tab.Navigator
      screenOptions={{ headerShown: false }}
      tabBar={({ state, descriptors, navigation }) => {
        const activeIndex = state.index;
        return (
          <View
            style={{
              borderTopLeftRadius: 16,
              borderTopRightRadius: 16,
              backgroundColor: "#fff",
              borderStyle: "solid",
              borderColor: "rgba(0, 0, 0, 0.5)",
              borderTopWidth: 1,
              width: 375,
              flexDirection: "row",
              alignItems: "center",
              justifyContent: "space-between",
              paddingHorizontal: 16,
              paddingVertical: 8,
              height: 72,
            }}
          >
            {bottomTabItemsNormal.map((item, index) => {
              const isFocused = state.index === index;
              return (
                <Pressable
                  key={index}
                  onPress={() => {
                    navigation.navigate({
                      name: state.routes[index].name,
                      merge: true,
                    });
                  }}
                >
                  {activeIndex === index
                    ? bottomTabItemsActive[index] || item
                    : item}
                </Pressable>
              );
            })}
          </View>
        );
      }}
    >
      <Tab.Screen
        name="SellerDaskboard"
        component={SellerDaskboard}
        options={{ headerShown: false }}
      />
      <Tab.Screen
        name="SellerNotification"
        component={SellerNotification}
        options={{ headerShown: false }}
      />
      <Tab.Screen
        name="SellerQR1"
        component={SellerQR1}
        options={{ headerShown: false }}
      />
      <Tab.Screen
        name="SellerCustomer"
        component={SellerCustomer}
        options={{ headerShown: false }}
      />
      <Tab.Screen
        name="SellerProfile"
        component={SellerProfile}
        options={{ headerShown: false }}
      />
    </Tab.Navigator>
  );
}

const App = () => {
  const [hideSplashScreen, setHideSplashScreen] = React.useState(false);

  const [fontsLoaded, error] = useFonts({
    "OpenSans-Regular": require("./assets/fonts/OpenSans-Regular.ttf"),
    "OpenSans-SemiBold": require("./assets/fonts/OpenSans-SemiBold.ttf"),
    "OpenSans-Bold": require("./assets/fonts/OpenSans-Bold.ttf"),
    "Roboto-Regular": require("./assets/fonts/Roboto-Regular.ttf"),
  });

  React.useEffect(() => {
    setTimeout(() => {
      setHideSplashScreen(true);
    }, 2000);
  }, []);

  if (!fontsLoaded && !error) {
    return null;
  }

  return (
    <>
      <NavigationContainer>
        {hideSplashScreen ? (
          <Stack.Navigator
            initialRouteName="Loginsignup"
            screenOptions={{ headerShown: false }}
          >
            <Stack.Screen name="BottomTabsRoot" component={BottomTabsRoot} />
            <Stack.Screen
              name="Loginsignup"
              component={Loginsignup}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="Frame"
              component={Frame}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="Frame1"
              component={Frame1}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="Frame2"
              component={Frame2}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="Frame3"
              component={Frame3}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="Frame4"
              component={Frame4}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="Frame5"
              component={Frame5}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="Frame6"
              component={Frame6}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="Frame7"
              component={Frame7}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="Frame8"
              component={Frame8}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="Frame9"
              component={Frame9}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="TermsAndConditions"
              component={TermsAndConditions}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="LoginsignupOTP"
              component={LoginsignupOTP}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="CustomerProfileHistry"
              component={CustomerProfileHistry}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="CustomerProfile"
              component={CustomerProfile}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="CustomerNotification"
              component={CustomerNotification}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="SellerCustomerProfile"
              component={SellerCustomerProfile}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="SellerCustomerLongPress"
              component={SellerCustomerLongPress}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="SellerCustomer1"
              component={SellerCustomer1}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="SellerCustomerFilter"
              component={SellerCustomerFilter}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="SellerItemFilter"
              component={SellerItemFilter}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="SellerQR"
              component={SellerQR}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="Setting"
              component={Setting}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="SellerNotificationPressed"
              component={SellerNotificationPressed}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="SellerTopUp"
              component={SellerTopUp}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="SellerAddCollection"
              component={SellerAddCollection}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="SellerAddNewItemitemVarie"
              component={SellerAddNewItemitemVarie}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="SellerAdd"
              component={SellerAdd}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="SellerAdd1"
              component={SellerAdd1}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="SellerDaskboardWithReqz"
              component={SellerDaskboardWithReqz}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="CustomerCart"
              component={CustomerCart}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="CustomersSellerFilter"
              component={CustomersSellerFilter}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="CustomersSellerFilter1"
              component={CustomersSellerFilter1}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="CustomerSellerPagePruchase"
              component={CustomerSellerPagePruchase}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="CustomerSellerProfile"
              component={CustomerSellerProfile}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="CustomerSearvhCustomer"
              component={CustomerSearvhCustomer}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="CustomerDaskboard"
              component={CustomerDaskboard}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="CustomerDaskboard1"
              component={CustomerDaskboard1}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="SellerCartConfirm"
              component={SellerCartConfirm}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="SellerCartConfirm1"
              component={SellerCartConfirm1}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="SellerCustomerProductRefund"
              component={SellerCustomerProductRefund}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="SellerCart"
              component={SellerCart}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="More"
              component={More}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="Frame10"
              component={Frame10}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="SellerDaskboardItemsUnhide"
              component={SellerDaskboardItemsUnhide}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="SellerDaskboardItemsUnhide1"
              component={SellerDaskboardItemsUnhide1}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="SellerDaskboardItemUnhide"
              component={SellerDaskboardItemUnhide}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="LaunchScreen"
              component={LaunchScreen}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="LoginsignupOTP1"
              component={LoginsignupOTP1}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="Loginsignup1"
              component={Loginsignup1}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="SellerRegister"
              component={SellerRegister}
              options={{ headerShown: false }}
            />
          </Stack.Navigator>
        ) : (
          <LaunchScreen />
        )}
      </NavigationContainer>
    </>
  );
};
export default App;
