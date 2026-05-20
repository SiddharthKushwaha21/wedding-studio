"use client";

import { usePathname } from "next/navigation";

type LayoutClientProps = {
  children: React.ReactNode;
};

export default function LayoutClient({
  children,
}: LayoutClientProps) {
  const pathname = usePathname();

  const isGalleryPage = pathname === "/gallery";

  // Gallery page par sirf <main> show hoga
  if (isGalleryPage) {
    const childrenArray = Array.isArray(children)
      ? children
      : [children];

    return <>{childrenArray[1]}</>;
  }

  return <>{children}</>;
}