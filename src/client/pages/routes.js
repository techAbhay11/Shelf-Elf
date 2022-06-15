
import Home from './Home';
import About from './About';
import Posts from './Posts';
import Post from './components/Post';
import Search from './Search';
import CreatePost from './CreatePost';
import LogIn from './LogIn';
import SignUp from './SignUp';
import Profile from './Profile';

const routes = [
  {
    path: '/',
    component: Home,
    exact: true
  },
  {
    path: '/about',
    component: About
  },
  {
    path: '/posts/:post_id',
    component: Post
  },
  {
    path: '/posts',
    component: Posts
  },
  {
    path: '/search',
    component: Search
  },
  {
    path: '/login',
    component: LogIn
  },
  {
    path: '/signup',
    component: SignUp
  },
  {
    path: '/profile',
    component: Profile
  },
  {
    path: '/createpost',
    component: CreatePost
  }
];

export default routes;
