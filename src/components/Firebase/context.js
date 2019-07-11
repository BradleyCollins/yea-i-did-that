import React from "react";

const FirebaseContext = React.createContext(null);

export const withFirebase = Compnent => props => (
  <FirebaseContext.Consumer>
    {firebase => <Compnent {...props} firebase={firebase} />}
  </FirebaseContext.Consumer>
);

export default FirebaseContext;
