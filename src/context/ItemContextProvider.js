import React, { createContext } from "react";

export const ItemContext = createContext();

export default class ItemContextProvider extends React.Component {
  state = {
    items: {
      key1: true,
    },
  };

  render() {
    return (
      <ItemContext.Provider
        value={{
          ...this.state,
        }}
      >
        {this.props.children}
      </ItemContext.Provider>
    );
  }
}
