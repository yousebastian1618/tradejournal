import './style.scss';

import {StatItem} from "@/types/types";
import {formatTo} from "@/lib/helper";
import Icon from "@/components/Icon/Icon";

type Props = {
  item: StatItem
}

export default function NumberStat({ item }: Props) {
  return (
    <div className={'number-stat-container skeleton-background'}>
      <div className={'question-mark'}>
        <Icon name={'question-mark'} size={18} tooltip={item.description}/>
      </div>
      <div className={'stat-label'}>{item.label}</div>
      <div className={'stat-value'}>{formatTo(item.valueType, item.value)}</div>
    </div>
  )
}