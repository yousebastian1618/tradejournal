'use client';
import './style.scss';
import {useState} from "react";

const dayNames = ['Sun', 'Mon', 'Tue', 'Wed', 'Thur', 'Fri', 'Sat']

export default function Calendar() {

  const [activeDate, setActiveDate] = useState(() => new Date());

  return (
    <div className={'calendar-container'}>
    </div>
  )
}