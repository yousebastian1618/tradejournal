import {SidebarItem} from "@/types/types";


export const SidebarItems: SidebarItem[] = [
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

export const sampleDashboardStatisticsKeyStats = [
  {
    name: 'cumulativeReturn',
    label: 'Cumulative Return',
    format: 'currency',
    value: 301243
  },
  {
    name: 'profitFactor',
    label: 'Profit Factor',
    format: 'double',
    value: 1.49
  },
  {
    name: 'averageReturn',
    label: 'Average Return',
    format: 'double',
    value: 3.03
  },
  {
    name: 'winRate',
    label: 'Win Rate',
    format: 'percentage',
    value: 0.667
  }
]

export const sampleDashboardStatisticsRestStats = [
  {
    name: 'numberOfTrades',
    label: 'Number of Trades',
    format: 'number',
    value: 35
  },
  {
    name: 'numberOfWins',
    label: 'Number of Wins',
    format: 'number',
    value: 20
  },
  {
    name: 'numberOfLosses',
    label: 'Number of Losses',
    format: 'number',
    value: 15
  },
  {
    name: 'averageWin',
    label: 'Average Win',
    format: 'currency',
    value: 13.77
  },
  {
    name: 'averageLosses',
    label: 'Average Losses',
    format: 'currency',
    value: 18.43
  }
]

export const sampleDashboardStatisticsTimeStats = [
  {
    name: 'averageHoldTime',
    label: 'Average Hold Time',
    format: 'time',
    value: 5999
  },
  {
    name: 'winnersAverageHoldTime',
    label: 'Winners Average Hold Time',
    format: 'time',
    value: 5999
  },
  {
    name: 'losersAverageHoldTime',
    label: 'Losers Average Hold Time',
    format: 'time',
    value: 2543
  }
]

export const recentTradesHeaders = [
  'Entry Date',
  'Entry Time',
  'Side',
  'Ticker/Type',
  'Quantity',
  'P&L'
]



// cumulative return
// profit factor
// average return
// win rate

// month returns

// recent trades

// total return
// profit factor
// average return
// win rate