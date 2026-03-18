import './style.scss';
import {recentTraderSummary, recentTradesHeaders} from "@/objects";
import {formatNumber} from "@/helpers";

const tableHeaders = recentTradesHeaders;
const recentTradeSummary = recentTraderSummary;

export default function DashboardRecentTrades() {
  return (
    <div className={'recent-trades-container component-container'}>
      <h1 className={'component-title'}>Recent Trades</h1>
      <div className={'trade-summary'}>
        {recentTradeSummary.map((summary) => {
          return (
            <div className={'summary-item'} key={summary.name}>
              <div className={'summary-label small-label'}>{summary.label}</div>
              <div className={'summary-value'}>{formatNumber(summary.value, summary.format)}</div>
            </div>
          )
        })}
      </div>
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