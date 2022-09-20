import React, {FC} from 'react'

import { ChartComponent, SeriesCollectionDirective, SeriesDirective, Inject, Legend, Category, StackingColumnSeries, Tooltip } from '@syncfusion/ej2-react-charts';

import { stackedCustomSeries, stackedPrimaryXAxis, stackedPrimaryYAxis } from '../../data/dummy';
import { useStateContext } from '../../contexts/ContextProvider';


export interface StackDataSeriesInteface { 
  dataSource: any,
  xName: any,
  yName: any,
  name: any,
  type: string,
  background: string,

}

interface StackedProps  {
  height: string, 
  width: string , 
  
}
const Stacked: FC<StackedProps> = ({height,width}) => {
  return (
    <ChartComponent
      width={width} 
      height={height}
      primaryXAxis={stackedPrimaryXAxis as any}
      primaryYAxis={stackedPrimaryYAxis as any}
      id ="charts"
      chartArea={{border: {width: 0}}}
      tooltip={{enable: true}}
      legendSettings={{background: 'white'}}
    >
      <Inject 
        services={[Legend, Category, StackingColumnSeries, Tooltip]}
      /> 
      <SeriesCollectionDirective >
        {stackedCustomSeries.map((item:StackDataSeriesInteface, i:number) => (
          <SeriesDirective key={i} {...item}/> 
        ))}
      </SeriesCollectionDirective>
    </ChartComponent>
  )
}

export default Stacked
