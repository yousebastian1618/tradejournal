'use client'
import {SidebarItems} from "@/objects";
import {usePathname, useRouter} from "next/navigation";
import {useMemo} from "react";
import {SidebarItem} from "@/types/types";
import NavBar from "@/components/Sidebar/NavBar";

export default function Sidebar() {

  const router = useRouter();
  const pathname = usePathname();

  const currentPage = useMemo(() => {
    const normalizedPath = pathname === '/' ? '/dashboard' : pathname;
    return (
      SidebarItems.find(
        (item) =>
          normalizedPath === item.path ||
          normalizedPath.startsWith(`${item.path}/`)
      ) ?? SidebarItems[0]
    )
  }, [pathname]);

  const handleClick = (item: SidebarItem) => {
    if (pathname !== item.path) {
      router.push(item.path);
    }
  }

  return (
    <NavBar currentPage={currentPage} handleClick={handleClick} />
  )
}