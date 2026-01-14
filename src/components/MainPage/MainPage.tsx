'use client';
import './style.scss';
import {SidebarItems} from "@/objects";
import {usePathname} from "next/navigation";
import {ReactNode, useMemo} from "react";

type Props = {
  children: ReactNode;
}

export default function MainPage({ children }: Props) {
  const pathname = usePathname();

  const currentPageLabel = useMemo(() => {
    const normalizedPath = pathname === '/' ? '/dashboard' : pathname;
    const currentPage = SidebarItems.find(
      (item) =>
        normalizedPath === item.path ||
        normalizedPath.startsWith(`${item.path}/`)
    );
    return currentPage?.label ?? SidebarItems[0].label;
  }, [pathname]);

  return (
    <div className={'main-page'}>
      <div className={'main-page__header'}>
        <h1 className={'main-page__title'}>{currentPageLabel}</h1>
      </div>
      <div className={'main-page__content'}>
        {children}
      </div>
    </div>
  )
}
