"use client"; // Error components must be Client Components

import React, { useEffect } from "react";

const Error = ({ error }) => {
  useEffect(() => {
    console.log(error);
  }, [error]);
  return (
    <div>
      <h1>{error.message}</h1>
    </div>
  );
};

export default Error;
