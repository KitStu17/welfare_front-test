import React, {useState} from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import LoginPage from './pages/LoginPage.js';
import MainPage from './pages/MainPage.js';
import EditUserPage from './pages/EditUserPage.js';
import RecommendPage from './pages/RecommendPage';
import BookmarkPage from './pages/BookmarkPage';
import SignupPage from './pages/SignupPage.js';
import { faBookmark, faHouse, faRightToBracket, faThumbsUp, faUser } from "@fortawesome/free-solid-svg-icons";
import {FontAwesomeIcon} from '@fortawesome/react-native-fontawesome';

const Tab = createBottomTabNavigator();

const App = () => {
  const [token, setToken] = useState(null);

  return (
    <NavigationContainer>
      <Tab.Navigator>
        <Tab.Screen
          name="Home"
          children={props => (
            <MainPage {...props} token={token} setToken={setToken} />
          )}
          options={{
            headerShown: false,
            tabBarIcon: () => <FontAwesomeIcon icon={faHouse} />,
          }}
        />
        <Tab.Screen
          name="Recommend"
          children={props => (
            <RecommendPage {...props} token={token} setToken={setToken} />
          )}
          options={{
            headerShown: false,
            tabBarIcon: () => <FontAwesomeIcon icon={faThumbsUp} />,
          }}
        />
        <Tab.Screen
          name="Bookmark"
          children={props => (
            <BookmarkPage {...props} token={token} setToken={setToken} />
          )}
          options={{
            headerShown: false,
            tabBarIcon: () => <FontAwesomeIcon icon={faBookmark} />,
          }}
        />
        {token ? (
          <Tab.Screen
            name="Profile"
            children={props => (
              <EditUserPage {...props} token={token} setToken={setToken} />
            )}
            options={{
              headerShown: false,
              tabBarIcon: () => <FontAwesomeIcon icon={faUser} />,
            }}
          />
        ) : (
          <Tab.Screen
            name="Login"
            children={props => (
              <LoginPage {...props} token={token} setToken={setToken} />
            )}
            options={{
              headerShown: false,
              tabBarIcon: () => <FontAwesomeIcon icon={faRightToBracket} />,
            }}
          />
        )}
        <Tab.Screen
          name="Signup"
          children={props => (
            <SignupPage {...props} token={token} setToken={setToken} />
          )}
          options={{
            headerShown: false,
            tabBarButton: () => null,
            tabBarVisible: false,
          }}
        />
      </Tab.Navigator>
    </NavigationContainer>
  );
};

export default App;
