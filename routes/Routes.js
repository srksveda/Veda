import React from 'react'
import { Router, Scene } from 'react-native-router-flux'
import Login from '../screens/Login'
import Home from '../screens/Home'
import Profile from '../screens/Profile'
import Notifications from '../screens/Notifications'
import ClassRoom from '../screens/ClassRoom'
import Assignment from '../screens/Assignment'
import UserSettings from '../screens/UserSettings'
import Reset from '../screens/Reset'
import FacultyAttendance from '../screens/FacultyAttendance'
import FacultyHome from '../screens/FacultyAttendance'
import FacultyMarks from '../screens/FacultyAttendance'


const Routes = () => (
   <Router>
      <Scene key = "root">
         <Scene key = "login" component = {Login} hideNavBar={true} type="replace"/>
         <Scene key = "home" component = {Home} hideNavBar={true} initial = {true} type="replace"/>
         <Scene key = "profile" component = {Profile} hideNavBar={true}/> 
         <Scene key = "notification" component = {Notifications} hideNavBar={true}/> 
         <Scene key = "classroom" component = {ClassRoom} hideNavBar={true} />
         <Scene key = "assignment" component = {Assignment} hideNavBar={true} />
         <Scene key = "usersettings" component = {UserSettings} hideNavBar={true} />
         <Scene key = "facultyattendance" component = {FacultyAttendance} hideNavBar={true} />
         <Scene key = "facultyhome" component = {FacultyHome} hideNavBar={true} />
         <Scene key = "facultymarks" component = {FacultyMarks} hideNavBar={true} />
      </Scene>
   </Router>
)
export default Routes