import {
  Settings,
  House,
  Calendar,
  ChartCandlestick,
  ChartLine,
  Notebook,
  type LucideIcon,
} from 'lucide-react';
import {SideBarItem} from "@/types/types";

export const IconMap: Record<string, LucideIcon> = {
  "settings": Settings,
  'house': House,
  'calendar': Calendar,
  'chart-candlestick': ChartCandlestick,
  'chart-line': ChartLine,
  'notebook': Notebook
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
