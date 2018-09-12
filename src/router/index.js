import Vue from 'vue'
import Router from 'vue-router'

import Home from './../components/pages/Home.vue'
import LogIn from './../components/pages/LogIn.vue'
import Register from './../components/pages/Register.vue'
import ViewWindow from './../components/pages/ViewWindow.vue'
import PlayWindow from './../components/pages/PlayWindow.vue'
import Profile from './../components/pages/Profile.vue'
import Contact from './../components/pages/Contact.vue'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/login',
      name: 'login',
      component: LogIn
    },
    {
      path: '/register',
      name: 'register',
      component: Register
    },
/*
    {
      path: '/user/:id',
      name: 'profile',
      component: Profile
    },
    {
      path: '/instrument/:id/view',
      name: 'view',
      component: ViewWindow
    },
    {
      path: '/instrument/:id/play',
      name: 'play',
      component: PlayWindow
    },
*/
    {
      path: '/view',
      name: 'view',
      component: ViewWindow
    },
    {
      path: '/play',
      name: 'play',
      component: PlayWindow
    },
    {
      path: '/your-profile',
      name: 'your-profile',
      component: Profile
    },
    {
      path: '/contact',
      name: 'contact',
      component: Contact
    },
    {
      path: "*",
      redirect: {
        name: "home"
      },
    }
  ],
  mode: "history"
})
