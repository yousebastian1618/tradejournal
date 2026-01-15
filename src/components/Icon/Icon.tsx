'use client'
import './style.scss';
import {IconMap} from "@/objects";
import {useLayoutEffect, useRef, useState} from "react";

type Props = {
  name: string;
  size?: number;
  tooltip?: string;
}

export default function Icon({ name, size=24, tooltip }: Props) {

  const [hovering, setHovering] = useState(false);
  const [tooltipOffset, setTooltipOffset] = useState(0);
  const tooltipRef = useRef<HTMLSpanElement | null>(null);

  useLayoutEffect(() => {
    if (!hovering || !tooltipRef.current) {
      setTooltipOffset(0);
      return;
    }

    const safePadding = 12;
    const rect = tooltipRef.current.getBoundingClientRect();
    const overflowLeft = safePadding - rect.left;
    const overflowRight = rect.right - (window.innerWidth - safePadding);

    if (overflowLeft > 0) {
      setTooltipOffset(overflowLeft);
    } else if (overflowRight > 0) {
      setTooltipOffset(-overflowRight);
    } else {
      setTooltipOffset(0);
    }
  }, [hovering]);

  const IconComponent = IconMap[name];
  if (!IconComponent) return null;
  return (
    <div className={'icon-container'}
         onMouseEnter={() => setHovering(true)}
         onMouseLeave={() => setHovering(false)}
    >
      <IconComponent name={name} size={size}/>
      {hovering && tooltip && (
        <span
          ref={tooltipRef}
          className={'tooltip'}
          style={{ transform: `translateX(calc(-50% + ${tooltipOffset}px))` }}
        >
          {tooltip}
        </span>
      )}
    </div>
  )
}
