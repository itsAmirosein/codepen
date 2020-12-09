import React from "react";
import Main from "./Main";
import * as sc from "./styles/content";
import { Route, Switch } from "react-router-dom";
import Technologies from "./Technologies";
import PostPreview from "./PostPreview";
import MyFollowers from './MyFollowers'

export default function Content() {
 
  return (
    <sc.ContentWrapper>
      <Switch>
        <Route path="/" exact>
          <Main />
        </Route>
        <Route path="/technologies">
          <Technologies />
        </Route>
        <Route path="/post/:id?">
          <PostPreview />
        </Route>
        <Route path='/followers-management'>
            <MyFollowers />
        </Route>
      </Switch>
    </sc.ContentWrapper>
  );
}
