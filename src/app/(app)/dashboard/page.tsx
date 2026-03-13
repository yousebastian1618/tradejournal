import DashboardStatistics from "@/components/Dashboard/Statistics/Statistics";
import DashboardRecentTrades from "@/components/Dashboard/RecentTrades/RecentTrades";
import './style.scss';

export default function DashboardPage() {
  return (
    <div className={'dashboard'}>
      <DashboardStatistics />
      <DashboardRecentTrades />
    </div>
  )
}
