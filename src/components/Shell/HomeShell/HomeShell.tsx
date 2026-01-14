import './style.scss';
import SidebarNavigation from "@/components/Sidebar/SidebarNavigation";
import MainPage from "@/components/MainPage/MainPage";
import {ReactNode} from "react";

type Props = {
  children: ReactNode;
};

export default function HomeShell({ children }: Props) {
  return (
    <div className={'home-shell-container'}>
      <SidebarNavigation />
      <MainPage>
        {children}
      </MainPage>
    </div>
  )
}
