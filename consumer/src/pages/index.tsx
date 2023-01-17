import React from "react";
import dynamic from "next/dynamic";

const Header = dynamic(() => import("home/components/header"));

export default function Home() {
  return (
    <div>
      <Header />
    </div>
  );
}
