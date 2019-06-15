// @flow

import React from "react";
import { createStackNavigator } from "react-navigation";
import SignInScreen from "../screens/SignInScreen";

const AuthStack = createStackNavigator({
  SignIn: SignInScreen
});

export { AuthStack };