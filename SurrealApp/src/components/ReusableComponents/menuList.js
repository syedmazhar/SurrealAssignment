import React from "react";
import ReactDOM from "react-dom";
import { ListGroup, ListGroupItem } from 'reactstrap';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

class MenuList extends React.Component {
    constructor(props) {
        super(props);
        this.menuItems = props.items;
        this.activeMenuItem = props.activeMenuItem;
    }

    render() {
        let listMenuItems = this.menuItems;
        let activeMenuItemId = this.activeMenuItem;
        return (
        <ListGroup>
            {listMenuItems.map(function(menuItem) {
                 return menuItem.id == activeMenuItemId ?  
                 <ListGroupItem className="menuItem activeMenuItem" tag="button" action>{menuItem.name}</ListGroupItem> : 
                 <Link to={menuItem.linksTo} style={{textDecoration:'none'}}>
                    <ListGroupItem className="menuItem" tag="button" action>{menuItem.name}</ListGroupItem>
                 </Link>
            })}
        </ListGroup>
        )
    }
} 

export default MenuList;

