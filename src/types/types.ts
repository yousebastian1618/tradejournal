export type SidebarItem = {
  label: string;
  icon: string;
  path: string;
}

export type CalendarDayCell = {
  date: Date;
  isCurrentMonth: boolean;
  isToday: boolean;
}