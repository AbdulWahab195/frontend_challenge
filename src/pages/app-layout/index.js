import React from 'react';
import { Outlet } from "react-router-dom";

export default function AppLayout(props) {
  return (
    <div>
      <Outlet />
    </div>
  );
}