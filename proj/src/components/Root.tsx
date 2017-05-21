import * as React from 'react'
import * as moment from 'moment'

import BlockCalendarDisplay from './BlockCalendarDisplay'

export interface IProps {
}

export class Root extends React.Component<IProps, void> {
  
  handleOnClick = (date: moment.Moment) => () => {
    console.log('selected' + date.toDate())
  }

  renderDate = (date: moment.Moment) => {
    return (
      <div onClick={this.handleOnClick(date)}>
        {date.date()}
      </div>
    )
  }

  render() {
    return (
      <div>
        <h1>
          Calendar display
        </h1>
        <BlockCalendarDisplay
          unitSize={30}
          startDate={moment().add(-5, 'days')}
          endDate={moment().add(1, 'year')}
          renderDate={this.renderDate} />
      </div>
    )
  }
}