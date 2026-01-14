'use client';
import Sidebar from "@/components/Sidebar/Sidebar";
import {SidebarItems} from "@/objects";
import {SideBarItem} from "@/types/types";
import {usePathname, useRouter} from "next/navigation";
import {useMemo} from "react";

export default function SidebarNavigation() {
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
    );
  }, [pathname]);

  const handleSelect = (item: SideBarItem) => {
    if (pathname !== item.path) {
      router.push(item.path);
    }
  };

  return (
    <Sidebar currentPage={currentPage} onSelect={handleSelect}/>
  );
}
