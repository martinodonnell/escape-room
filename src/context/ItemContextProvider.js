import React, { createContext } from "react";

export const ItemContext = createContext();

export default class ItemContextProvider extends React.Component {
  state = {
    items: "hello",
  };

  setC(newItem) {
    this.setState({ items: "hellosdsds" });

    console.log("hsdsdlksdkjh");
  }

  render() {
    return (
      <ItemContext.Provider
        value={{
          ...this.state,
          setC: this.setC,
        }}
      >
        {this.props.children}
      </ItemContext.Provider>
    );
  }
}
