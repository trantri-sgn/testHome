import React from "react";


export interface LayoutProps {
  children: React.ReactNode;
}

export default function MainLayout({ children }: LayoutProps): JSX.Element {
  return (
    <div >
      <header></header>
      {children}
      <footer ></footer>
    </div>
  );
}
