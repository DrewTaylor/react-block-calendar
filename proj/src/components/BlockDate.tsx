import * as React from 'react'
import * as moment from 'moment'

import BlockDate from './BlockDate'

export interface IProps {
  date: moment.Moment
  week: number
  unitSize: number
  startDate: moment.Moment
  endDate: moment.Moment
  renderDate: (date: moment.Moment) => JSX.Element
}

export default class BlockMonth extends React.Component<IProps, void> {

  render() {
    const { date, week, unitSize, renderDate } = this.props

    const style: React.CSSProperties = {
      height: unitSize + 'px',
      lineHeight: unitSize + 'px',
      width: unitSize + 'px',
      top: (date.day() * unitSize) + 'px',
      left: (week * unitSize) + 'px',
    }
    return (
      <div className={ 'date-block date-block--day-' + date.day() } style={style}>
        { this.props.renderDate(date) }
      </div>
    )
  }
}