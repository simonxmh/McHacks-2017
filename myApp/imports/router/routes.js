import Home from '../ui/pages/Home.jsx';
import About from '../ui/pages/About.jsx';
import NotFound from '../ui/pages/NotFound.jsx';
import StudentChat from '../ui/pages/StudentChat.jsx';
import CounsellorChat from '../ui/pages/CounsellorChat.jsx';

const routes = [
  {
    path: '/',
    component: Home
  },
  {
    path: '/about',
    component: About
  }, {
    path: '*',
    component: NotFound
  }, {
    path: '/StudentChat',
    component: StudentChat
  }, {
    path: '/CounsellorChat',
    component: CounsellorChat
  }
];

export default routes;
