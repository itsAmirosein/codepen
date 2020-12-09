import React from "react";
import Content from "./Content";
import Header from "./Header";
import SidePanel from "./SidePanel";
import { CardData } from "./data/Cards";
import { useReducer } from "react";
import reducer from "./reducer";
import Context from "./context";


export default function Home() {
  const [state, dispatch] = useReducer(reducer, {
    currentData: CardData,
    filterData: CardData,
    suggested: [],
    isDetect: false,
    isSort: "",
  });

  return (
    <Context.Provider value={{ state, dispatch }}>
      <Header />
      <SidePanel />
      <Content />
    </Context.Provider>
  );
}
