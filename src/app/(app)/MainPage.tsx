'use client';
import {ReactNode, useMemo} from "react"
import {usePathname} from "next/navigation";
import {SidebarItems} from "@/objects";
import './styleMainPage.scss';

type props = {
  children: ReactNode;
}

export default function MainPage({ children }: props) {
  const pathname = usePathname();

  const currentPageLabel = useMemo(() => {
    const normalizedPath = pathname === '/' ? '/dashboard' : pathname;
    const currentPage = SidebarItems.find(
      (item) => normalizedPath === item.path || normalizedPath.startsWith(`${item.path}/`)
    )
    return currentPage?.label ?? SidebarItems[0].label;
  }, [pathname])

  return (
    <div className={'main-page'}>
      <div className={'main-page__header'}>
        <h1 className={'title'}>{currentPageLabel}</h1>
      </div>
      <div className={'main-page__content'}>
        {children}
      </div>
    </div>
  )
}