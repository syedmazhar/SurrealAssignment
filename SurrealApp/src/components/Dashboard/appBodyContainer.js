import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import './appBodyContainer.scss';
import * as ROUTES from '../../constants/routes';
import SideNav from "../SideNav/sideNav";

//Import pages
import EventsPage from "../Events/eventsPage";
import HomePage from '../Home/homePage';
import FriendsPage from '../Friends/friendsPage';
import DiscussionPage from '../Discussion/discussionPage';
import VideosPage from '../Videos/videosPage';
import PhotosPage from '../Photos/photosPage';
import FilesPage from '../Files/filesPage';

// Each logical "route" has two components, one for the sidebar and one for the main area. 
// We want to render both of them in different places when the path matches the current URL.
const routes = [
    {
        path: '/',
        exact: true,
        sidebar: () => <div><SideNav activeMenuItemId={101}/></div>,
        main: () => <div><HomePage/></div>
    },
    {
      path: ROUTES.HOME,
      exact: true,
      sidebar: () => <div><SideNav activeMenuItemId={101}/></div>,
      main: () => <div><HomePage/></div>
    },
    {
        path: ROUTES.DISCUSSION,
        sidebar: () => <div><SideNav  activeMenuItemId={102}/></div>,
        main: () => <div><DiscussionPage/></div>
    },
    {
      path: ROUTES.FRIENDS,
      sidebar: () => <div><SideNav  activeMenuItemId={103}/></div>,
      main: () => <div><FriendsPage/></div>
    },
    {
      path: ROUTES.EVENTS,
      sidebar: () => <div><SideNav  activeMenuItemId={104}/></div>,
      main: () => <div><EventsPage/></div>
    },
    {
        path: ROUTES.VIDEOS,
        sidebar: () => <div><SideNav  activeMenuItemId={105}/></div>,
        main: () => <div><VideosPage/></div>
    },
    {
        path: ROUTES.PHOTOS,
        sidebar: () => <div><SideNav  activeMenuItemId={106}/></div>,
        main: () => <div><PhotosPage/></div>
    },
    {
        path: ROUTES.FILES,
        sidebar: () => <div><SideNav  activeMenuItemId={107}/></div>,
        main: () => <div><FilesPage/></div>
    }
];

class AppBodyContainer extends React.Component {
    constructor(props) {
		super(props);
		this.state = {
			items:[]
		};
    }
    
  render(){
      return (
        <Router>
            <div className="sidebar col-3 dbSideNav">
                {routes.map((route, index) => (
                    // You can render a <Route> in as many places as you want in your app. It will render along
                    // with any other <Route>s that also match the URL.  So, a sidebar or breadcrumbs or anything else
                    // that requires you to render multiple things in multiple places at the same URL is nothing 
                    // more than multiple <Route>s.
                    <Route key={index} path={route.path} exact={route.exact} component={route.sidebar}/>
                ))}
            </div>
            <main className="main  col-9 dbMainContainer">
                {routes.map((route, index) => (
                    // Render more <Route>s with the same paths as above, but different components this time.
                    <Route key={index} path={route.path} exact={route.exact} component={route.main}/>
                ))}
            </main>
        </Router>
      );
    } 
};

export default AppBodyContainer;
