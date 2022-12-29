import { mount } from "auth/AuthApp";
import React, { useRef, useEffect } from "react";
import { useHistory } from "react-router-dom"; // update the browser history

export default ({ onSignIn }) => {
  const ref = useRef(null);
  const history = useHistory();

  const onSignInCopy = onSignIn;

  useEffect(() => {
    const { onParentNavigate } = mount(ref.current, {
      initialPath: history.location.pathname,
      onNavigate: ({ pathname: nextPathname }) => {
        const { pathname } = history.location;
        if (pathname !== nextPathname) {
          history.push(nextPathname);
        }
      },
      //onSignIn: () => {
      //  console.log("user signed in");
      //  console.log("onsignincopy", onSignInCopy);
      //  onSignIn();
      //},
      onSignIn,
    });

    history.listen(onParentNavigate);
  }, []);

  return <div ref={ref} />;
};
