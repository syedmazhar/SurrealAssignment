import React from "react";
import ReactDOM from "react-dom";
import { ListGroup, ListGroupItem } from 'reactstrap';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import * as ROUTES from '../../constants/routes';
import MenuList from "../ReusableComponents/menuList";

class SideNav extends React.Component {
    constructor(props) {
        super(props);
        this.activeMenuItemId = props.activeMenuItemId;
		this.state = {
			NavigationMenuList: [
				{ id:101,    name:'Home',       linksTo:ROUTES.HOME          },
				{ id:102,    name:'Discussion', linksTo:ROUTES.DISCUSSION    },
                { id:103,    name:'Friends',    linksTo:ROUTES.FRIENDS       },
                { id:104,    name:'Events',     linksTo:ROUTES.EVENTS        },
                { id:105,    name:'Videos',     linksTo:ROUTES.VIDEOS        },
                { id:106,    name:'Photos',     linksTo:ROUTES.PHOTOS        },
                { id:107,    name:'Files',      linksTo:ROUTES.FILES         }
            ],
            FavoritesMenuList:[
                { id:201,    name:'Railway Deals',       linksTo:'/' },
				{ id:202,    name:'Hockey Guys UK',      linksTo:'/' },
                { id:203,    name:'Basketball UK',       linksTo:'/' },
                { id:204,    name:'Wintersports',        linksTo:'/' },
                { id:205,    name:'Ha! The best Jokes',  linksTo:'/' },
                { id:206,    name:'8Gag',                linksTo:'/' },
                { id:207,    name:'Mentors',             linksTo:'/' }
            ]
		};
    }

    render() {
        let navMenu = this.state.NavigationMenuList;
        let favMenu = this.state.FavoritesMenuList;
        let activeMenu = this.activeMenuItemId;
        
        return (
            <div className="leftPaneContainer">   
                    <div className="menuContainer">
                        <div className="grayHeadingContainer">MENU</div>
                        <div><MenuList items={navMenu} activeMenuItem={activeMenu} /></div>
                    </div>
                    <div className="menuContainer">
                        <div className="grayHeadingContainer">YOUR FAVORITES</div>
                        <div><MenuList items={favMenu} activeMenuItem={activeMenu} /></div> 
                    </div>
            </div>
        )
    }
} 

export default SideNav;

