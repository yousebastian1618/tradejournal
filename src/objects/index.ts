import {
  Settings,
  House,
  Calendar,
  ChartCandlestick,
  ChartLine,
  Notebook,
  CircleQuestionMark,
  type LucideIcon,
} from 'lucide-react';
import {SideBarItem, StatItem} from "@/types/types";

export const IconMap: Record<string, LucideIcon> = {
  "settings": Settings,
  'house': House,
  'calendar': Calendar,
  'chart-candlestick': ChartCandlestick,
  'chart-line': ChartLine,
  'notebook': Notebook,
  'question-mark': CircleQuestionMark
}

export const SidebarItems: SideBarItem[] = [
  {
    icon: 'house',
    label: 'Dashboard',
    path: '/dashboard'
  },
  {
    icon: 'calendar',
    label: 'Calendar',
    path: '/calendar'
  },
  {
    icon: 'chart-candlestick',
    label: 'Trades',
    path: '/trades'
  },
  {
    icon: 'chart-line',
    label: 'Analysis',
    path: '/analysis'
  },
  {
    icon: 'notebook',
    label: 'Journal',
    path: '/journal'
  }
]

export const CalendarStatsItems: StatItem[] = [
  {
    name: 'totalReturn',
    label: 'Total Return',
    description: 'The total profit/loss across all filtered trades.',
    value: 1000,
    valueType: 'dollar'
  },
  {
    name: 'profitFactor',
    label: 'Profit Factor',
    description: 'A profit factor above 1.0 means your winning trades outweigh your losing trades.\n' +
      'For example, 2.0 means you make $2 for every $1 lost.',
    value: 1.49,
    valueType: ''
  },
  {
    name: 'averageReturn',
    label: 'Average Return',
    description: 'Calculated as total profit/loss divided by the total number of trades.',
    value: 3.03,
    valueType: 'dollar'
  },
  {
    name: 'winRate',
    label: 'Win Rate',
    description: 'Calculated as number of winning trades divided by total number of trades.',
    value: 0.67,
    valueType: 'rate'
  }
]