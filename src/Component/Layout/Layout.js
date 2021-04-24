import React from "react";
import { Route, Switch } from "react-router";
import Adhoc from '../Adhoc/Adhoc';
import Navigation from '../Navigation/Navigation';
import HomePage from '../HomePage/Homepage';
import Posts from '../Posts/Posts';
import Newposts from '../NewPost/NewPost';
import EditPost from '../EditPost/EditPost';
const layout =()=>{
    return(
        <Adhoc>
        <Navigation/>
        <Switch>
            <Route path="/"  exact component={HomePage}/>
            <Route path="/post" exact component={Posts}/>
            <Route path="/post/edit/:i"exact component={EditPost}/>
            <Route path="/post/new" exact component={Newposts}/>
        </Switch>
        </Adhoc>
    )
}

export default layout;