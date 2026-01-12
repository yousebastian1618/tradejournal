import './style.scss';
import {SideBarItem} from "@/types/types";

type Props = {
  currentPage: SideBarItem
}

export default function MainPage({ currentPage }: Props) {
  return (
    <div className={'main-page'}>
      <span>{currentPage.label}</span>
    </div>
  )
}