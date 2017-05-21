import * as React from 'react'
import * as moment from 'moment'

import BlockMonth from './BlockMonth'

export interface IProps {
  unitSize: number
  startDate: moment.Moment
  endDate: moment.Moment
  renderDate: (date: moment.Moment) => JSX.Element
}

export default class BlockCalendarDisplay extends React.Component<IProps, void> {
  render() {
    const { unitSize, startDate, endDate, renderDate } = this.props

    const months = []
    const workingDate = moment(startDate).date(1)
    while(workingDate < endDate){
      months.push(
        <BlockMonth
          key={workingDate.valueOf()}
          unitSize={ unitSize }
          month={ moment(workingDate) }
          startDate={ startDate }
          endDate={ endDate }
          renderDate={renderDate} />
      )
      workingDate.add(1, 'month')
    }

    const style: React.CSSProperties = {
      paddingLeft: unitSize + 'px'
    }

    return (
      <div className="calendar-block" style={ style }>
        { months }
      </div>
    )
  }
}