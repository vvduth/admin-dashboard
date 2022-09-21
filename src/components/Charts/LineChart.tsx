import React from 'react';
import { ChartComponent, SeriesCollectionDirective, SeriesDirective, Inject, LineSeries, DateTime, Legend, Tooltip } from '@syncfusion/ej2-react-charts';

import { lineCustomSeries, LinePrimaryXAxis, LinePrimaryYAxis } from '../../data/dummy';
import { AppContextInterface, useStateContext } from '../../contexts/ContextProvider';

const LineChart = () => {

  const {currentMode } = useStateContext() as AppContextInterface ;
  return (
    <ChartComponent
      id="line-chart" 
      height="420px"
      primaryXAxis={LinePrimaryXAxis as any}
      primaryYAxis={LinePrimaryYAxis as any}
      chartArea= {{border: {width: 0 }}}
      background={currentMode === 'Dark' ? '#33373E' : '#fff'}
      tooltip={{enable: true }}
    >
      <Inject services={[LineSeries , DateTime, Legend, Tooltip]} />
      <SeriesCollectionDirective>
          {
            lineCustomSeries.map((item: any , index: number) => (
              <SeriesDirective key ={index} {...item}/> 
            ))
          }
        </SeriesCollectionDirective> 
    </ChartComponent>
  )
}

export default LineChart
