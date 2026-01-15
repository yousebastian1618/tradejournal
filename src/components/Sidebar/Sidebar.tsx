'use client'
import './style.scss';
import Image from "next/image";
import {SidebarItems} from "@/objects";
import Icon from "@/components/Icon/Icon";
import {SideBarItem} from "@/types/types";

type Props = {
  currentPage: SideBarItem;
  onSelect: (item: SideBarItem) => void;
};

export default function Sidebar({ currentPage, onSelect }: Props) {

  return (
    <div className={'sidebar-container skeleton-background'}
         style={{ width: '12%'}}
    >
      <div className={'sidebar-top'}>
        <div className={'logo-container'}>
          <div className={'image-container'}>
            <Image
              className={'logo'}
              src={"/trade-journal-logo.png"}
              alt={'logo'}
              fill
              draggable={false}
            />
          </div>
          <span className={'logo-title'}>Trade Journal</span>
        </div>
        <div className={'items'}>
          {SidebarItems.map((item) => {
            return (
              <div className={`item ${currentPage.path === item.path ? 'selected-background' : 'hovering-background'}`}
                   key={item.path}
                   onClick={() => onSelect(item)}
              >
                <Icon name={item.icon} />
                <span className={'item-label'}>{item.label}</span>
              </div>
            )
          })}
        </div>
      </div>
    </div>
  )
}
