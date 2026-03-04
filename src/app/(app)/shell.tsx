import { ReactNode } from "react";
import MainPage from "@/app/(app)/MainPage";
import Sidebar from "@/components/Sidebar/Sidebar";
import './styleShell.scss';

type props = {
  children: ReactNode;
}

export default function AppShell({ children }: props) {
  return (
    <div className={'app-shell-container'}>
      <Sidebar />
      <MainPage>
        {children}
      </MainPage>
    </div>
  )
}