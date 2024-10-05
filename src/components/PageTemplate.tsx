import React from "react";
import NavigationBar from "./Navigation/NavigationBar";
import Footer from "./Footer";

interface PageTemplateProps {
  children: React.ReactNode;
}

function PageTemplate({ children }: PageTemplateProps) {
  return (
    <>
      <NavigationBar></NavigationBar>
      {children}
      <Footer></Footer>
    </>
  );
}

export default PageTemplate;
