import React, { FC } from 'react'

import { SparklineComponent, Inject, SparklineTooltip } from '@syncfusion/ej2-react-charts';


interface PropsType {
  currentColor: any,
  id: any,
  type: any,
  height: any,
  width: any,
  data: any,
  color: any,
}
const SparkLine:FC<PropsType> = ({currentColor, id, type, height, width, data, color}) => {
  return (
    <SparklineComponent
      id={id} 
      height={height}
      width={width}
      lineWidth={1}
      valueType="Numeric"
      fill={color} 
      border = {{color: currentColor, width:2}}
      xName="x"
      yName='yval'
      dataSource={data}
      type={type}
      tooltipSettings={{
        visible:true, 
        format: '${x} : data ${yval}',
        trackLineSettings: {
          visible: true 
        }
      }}
    >
      <Inject services={[SparklineTooltip]} /> 
    </SparklineComponent>
  )
}

export default SparkLine
