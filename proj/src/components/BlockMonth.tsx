import * as React from 'react'
import * as moment from 'moment'

import BlockDate from './BlockDate'

export interface IProps {
  month: moment.Moment
  unitSize: number
  startDate: moment.Moment
  endDate: moment.Moment
  renderDate: (date: moment.Moment) => JSX.Element
}

export default class BlockMonth extends React.Component<IProps, void> {
  render() {
    const { month, unitSize, startDate, endDate, renderDate } = this.props

    const days = []
    const workingDate = moment(month > startDate ? month : startDate)
    let week = 0
    while (workingDate.month() === month.month() && workingDate < endDate) {
      days.push(
        <BlockDate
          key={workingDate.valueOf()}
          date={moment(workingDate)}
          week={ week }
          unitSize={unitSize}
          startDate={startDate}
          endDate={endDate}
          renderDate={renderDate} />
      )

      week = workingDate.week() !== moment(workingDate).add(1, 'day').week() ? week + 1 : week
      workingDate.add(1, 'day')
    }

    const style: React.CSSProperties = {
      marginLeft: (unitSize * -1) + 'px',
      height: (7 * unitSize) + 'px',
      width: ((week + 1) * unitSize) + 'px'
    }
    return (
      <div className="month-block" style={ style }>
        {days}
      </div>
    )
  }
}