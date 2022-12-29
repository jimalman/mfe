import { mount } from "dashboard/DashboardApp";
import React, { useRef, useEffect } from "react";

// the dashboard app component is created in Vue
export default () => {
  const ref = useRef(null);

  useEffect(() => {
    mount(ref.current);
  }, []);

  return <div ref={ref} />;
};
