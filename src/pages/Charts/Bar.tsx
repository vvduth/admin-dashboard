import React from "react";
import {
  ChartComponent,
  SeriesCollectionDirective,
  SeriesDirective,
  Inject,
  Legend,
  Category,
  Tooltip,
  ColumnSeries,
  DataLabel,
} from "@syncfusion/ej2-react-charts";

import {
  barCustomSeries,
  barPrimaryXAxis,
  barPrimaryYAxis,
} from "../../data/dummy";
import { Header } from "../../components";
import {
  AppContextInterface,
  useStateContext,
} from "../../contexts/ContextProvider";

const Bar = () => {
  const { currentMode } = useStateContext() as AppContextInterface;
  return (
    <div className="m-4 md:m-10 mt-24 p-10 bg-white dark:bg-secondary-dark-bg rounded-3xl">
      <Header category="Bar Chart" title="Olympic Medal Counts - RIO" />
      <div className="w-full">
        <ChartComponent
          
          id="bar-chart"
          height="420px"
          primaryXAxis={barPrimaryXAxis as any}
          primaryYAxis={barPrimaryYAxis as any}
          chartArea={{ border: { width: 0 } }}
          background={currentMode === "Dark" ? "#33373E" : "#fff"}
          tooltip={{ enable: true }}
        >
           <Inject services={[ColumnSeries, Legend, Tooltip, Category, DataLabel]} />
          <SeriesCollectionDirective>
            {/* eslint-disable-next-line react/jsx-props-no-spreading */}
            {barCustomSeries.map((item, index) => (
              <SeriesDirective key={index} {...item} />
            ))}
          </SeriesCollectionDirective>
        </ChartComponent>
      </div>
    </div>
  );
};

export default Bar;
