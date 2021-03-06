import React, { Component } from "react";
import { createStackNavigator } from "react-navigation";
import { Provider } from "react-redux";
import store from "./client/store/store";
import Home from "./client/components/Home";
import LoginForm from "./client/components/LoginForm";
import SignUpForm from "./client/components/SignUpForm";
import CameraView from "./client/components/CameraView";
import CameraViewCollaboration from "./client/components/CameraViewCollaboration";
import UserProfile from "./client/components/UserProfile";
import EditUserProfile from "./client/components/EditUserProfile";
import ArtFeed from "./client/components/ArtFeed";
import ArtPostForm from "./client/components/ArtPostForm";
import SingleArtView from "./client/components/SingleArtView";
import SingleArtItem from "./client/components/SingleArtItem";

const RootNavigator = createStackNavigator({
  Main: {
    screen: Home,
    navigationOptions: ({ navigation }) => ({
      header: null,
      title: `DropAR`
    })
  },
  CameraViewCollaboration: {
    screen: CameraViewCollaboration,
    navigationOptions: ({ navigation }) => ({
      header: null,
      title: `DropAR`
    })
  },
  LoginForm: {
    screen: LoginForm,
    navigationOptions: ({ navigation }) => ({
      header: null
    })
  },
  SignUpForm: {
    screen: SignUpForm,
    navigationOptions: ({ navigation }) => ({
      header: null
    })
  },
  CameraView: {
    screen: CameraView,
    navigationOptions: ({ navigation }) => ({
      header: null
    })
  },
  UserProfile: {
    screen: UserProfile,
    navigationOptions: ({ navigation }) => ({
      header: null
    })
  },
  EditUserProfile: {
    screen: EditUserProfile,
    navigationOptions: ({ navigation }) => ({
      header: null
    })
  },
  ArtFeed: {
    screen: ArtFeed,
    navigationOptions: ({ navigation }) => ({
      gesturesEnabled: false,
      headerLeft: null,
      title: "EXPLORE",
      headerStyle: {
        backgroundColor: "#ff5858",
        borderBottomColor: "transparent"
      },
      headerTitleStyle: {
        color: "#FFF",
        fontWeight: "800",
        fontSize: 24
      }
    })
  },
  ArtPostForm: {
    screen: ArtPostForm,
    navigationOptions: ({ navigation }) => ({
      header: null
    })
  },
  SingleArtView: {
    screen: SingleArtView,
    navigationOptions: ({ navigation }) => ({
      header: null
    })
  },
  SingleArtItem: {
    screen: SingleArtItem,
    navigationOptions: ({ navigation }) => ({
      header: null
    })
  }
});

export default class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <RootNavigator />
      </Provider>
    );
  }
}
