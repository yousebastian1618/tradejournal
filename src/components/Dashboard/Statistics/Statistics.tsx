'use client';
import './style.scss';
import {formatNumber} from "@/helpers";
import {sampleDashboardStatisticsKeyStats, sampleDashboardStatisticsRestStats, sampleDashboardStatisticsTimeStats} from "@/objects";
import {useState} from "react";

const keyStats = sampleDashboardStatisticsKeyStats;
const restStats = sampleDashboardStatisticsRestStats;
const timeStats = sampleDashboardStatisticsTimeStats;

export default function DashboardStatistics() {

  const [stats, setStats] = useState('keyStats');

  return (
    <div className={'dashboard-statistics component-container'}>
      <div className={'dashboard-statistics-header'}>
        <h1 className={'component-title'}>Statics</h1>
        <span className={'stats-toggle'}>
          <span className={stats === 'keyStats' ? 'selected' : ''} onClick={() => setStats('keyStats')}>
            Key Stats
          </span>
          <span className={stats === 'allStats' ? 'selected' : ''} onClick={() => setStats('allStats')}>
            All Stats
          </span>
        </span>
      </div>
      <div className={'statistics'}>
        {keyStats.map((item) =>
          <div className={'statistics-item'} key={item.name}>
            <h3 className={'statistics-value'}>{formatNumber(item.value, item.format)}</h3>
            <p className={'small-label'}>{item.label}</p>
          </div>
        )}
      </div>
      {stats === 'allStats' ? (
        <>
          <div className={'statistics'}>
            {restStats.map((item) =>
              <div className={'statistics-item'} key={item.name}>
                <h3 className={'statistics-value'}>{formatNumber(item.value, item.format)}</h3>
                <p className={'small-label'}>{item.label}</p>
              </div>
            )}
          </div>
          <div className={'statistics'}>
            {timeStats.map((item) =>
              <div className={'statistics-item'} key={item.name}>
                <h3 className={'statistics-value'}>{formatNumber(item.value, item.format)}</h3>
                <p className={'small-label'}>{item.label}</p>
              </div>
            )}
          </div>
        </>
      ) : <></>}

    </div>
  )
}