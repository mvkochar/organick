import React from 'react'
import classes from './ColorsItem.module.css'

type ColorsItemProps = {
    colorValue: string
}

const ColorsItem = ({colorValue}:ColorsItemProps) => {
  return (
    <div>
        <div className={classes.color_rect} style={{backgroundColor: colorValue}}></div>
        <div className={classes.color_value}>{colorValue}</div>
    </div>
  )
}

export default ColorsItem