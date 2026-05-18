import Link from "next/link";
import React from "react";

const LogoLinkBtn = ({ href, children }) => {
  return <Link href={href}>{children}</Link>;
};

export default LogoLinkBtn;
