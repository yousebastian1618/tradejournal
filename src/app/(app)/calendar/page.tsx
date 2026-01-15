import './style.scss';
import Calendar from "@/components/Calendar/Calendar";
import {CalendarStatsItems} from "@/objects";
import NumberStat from "@/components/Stats/NumberStat/NumberStat";

export default function CalendarPage() {
  return (
    <div className={'calendar-container'}>
      <div className={'calendar-stats skeleton-background'}>
        <span className={'subtitle'}>Stats</span>
        <div className={'calendar-stat-items'}>
          {CalendarStatsItems.map((item) => {
            return (
              <div className={'calendar-stat-item'} key={item.name}>
                <NumberStat item={item} />
              </div>
            )
          })}
        </div>
      </div>
      <div className={'calendar'}>
        <Calendar />
      </div>
    </div>
  );
}
