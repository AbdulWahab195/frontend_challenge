import React from "react";
import { useRoutes } from "react-router-dom";
import NewsPage from "../pages/news-page";


function Index(props) {
  return useRoutes([
    {
        path: "/",
        element: <NewsPage />,
    },
  ]);
}

export default Index;
