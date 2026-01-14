import {StatItem} from "@/types/types";

type Props = {
  item: StatItem
}

export default function NumberStat({ item }: Props) {
  return (
    <div className={'number-stat-container skeleton-background'}>
      <span>{item.label}</span>
      <span>{item.value}</span>
    </div>
  )
}