import React from 'react'
import AuthScreen from './AuthScreen'
import HomeScreen from './HomeScreen'

const isAuth = false

const HomePage = () => {

  return <>{isAuth ? <HomeScreen /> : <AuthScreen />}</>;
  
}

export default HomePage
