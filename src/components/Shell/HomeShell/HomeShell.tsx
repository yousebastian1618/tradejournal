'use client'
import './style.scss';
import Sidebar from "@/components/Sidebar/Sidebar";
import MainPage from "@/components/MainPage/MainPage";
import {useState} from "react";
import {SidebarItems} from "@/objects";
import {SideBarItem} from "@/types/types";

export default function HomeShell() {

  const [currentPage, setCurrentPage] = useState(SidebarItems[0]);

  const selectCurrentPage = (item: SideBarItem) => {
    setCurrentPage(item);
  }

  return (
    <div className={'home-shell-container'}>
      <Sidebar currentPage={currentPage} onSelect={(i) => selectCurrentPage(i)}/>
      <MainPage currentPage={currentPage}/>
    </div>
  )
}