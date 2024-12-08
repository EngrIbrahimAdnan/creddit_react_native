import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import ResturantList from "../../components/ResturantList/ResturantList";
import MenuList from "../../components/MenuList";
import DishPage from "../../pages/DishPage";
import ROUTES from "../../constants/routes";
const Stack = createNativeStackNavigator();

const HomeNavigation = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen name={ROUTES.RESTAURANTLIST} component={ResturantList} />
      <Stack.Screen name={ROUTES.MENUITEMS} component={MenuList} />
      <Stack.Screen name={ROUTES.DISHINFO} component={DishPage} />
    </Stack.Navigator>
  );
};

export default HomeNavigation;
