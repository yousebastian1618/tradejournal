import Image from "next/image";
import {SidebarItems} from "@/objects";
import {SidebarItem} from "@/types/types";
import './style.scss';

type props = {
  currentPage: SidebarItem;
  handleClick: (item: SidebarItem) => void;
}

export default function NavBar({ currentPage, handleClick } : props) {
  return (
    <div className={'sidebar-container'}>
      <div className={'sidebar-container__top'}>
        <div className={'logo-container'}>
          <div className={'logo-container__image-container'}>
            <Image className={'image'}
                   src={'/trade-journal-logo.png'}
                   alt={'logo'}
                   fill
                   draggable={false}
            />
          </div>
          <span className={'logo-container__title'}>TradeJournal</span>
        </div>
        <div className={'sidebar-list'}>
          {SidebarItems.map((item) => {
            return (
              <div key={item.label}
                   className={`sidebar-list__item ${currentPage.path === item.path ? 'selected-background' : 'hovering-background'}`}
                   onClick={() => handleClick(item)}
              >
                <span className={'item-label'}>{item.label}</span>
              </div>
            )
          })}
        </div>
      </div>
      <div className={'sidebar-container__bottom'}>

      </div>
    </div>
  )
}