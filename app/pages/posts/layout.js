import React from "react";

export default function RootLayout({ children }) {
  return (
    <div>
      <h2>Print on every page of posts</h2>
      {children}
    </div>
  );
}
