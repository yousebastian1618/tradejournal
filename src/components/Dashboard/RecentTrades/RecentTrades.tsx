import './style.scss';
import {recentTradesHeaders} from "@/objects";

const tableHeaders = recentTradesHeaders;


export default function DashboardRecentTrades() {
  return (
    <div className={'recent-trades-container component-container'}>
      <h1 className={'component-title'}>Recent Trades</h1>
      <div className={'table-container'}>
        <table className={'table'}>
          <thead>
            <tr>
              {tableHeaders.map((header) => {
                return (
                  <th key={header}>{header}</th>
                )
              })}
            </tr>
          </thead>
          <tbody>
          </tbody>
        </table>
      </div>
    </div>
  )
}