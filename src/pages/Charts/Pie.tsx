import React from "react";

import { pieChartData } from "../../data/dummy";
import { Header } from "../../components";
import {
  AccumulationChartComponent,
  AccumulationSeriesCollectionDirective,
  AccumulationSeriesDirective,
  Inject,
  AccumulationLegend,
  PieSeries,
  AccumulationTooltip,
  IAccLoadedEventArgs,
  AccumulationTheme,
  AccumulationDataLabel,
} from "@syncfusion/ej2-react-charts";
import { AppContextInterface, useStateContext } from "../../contexts/ContextProvider";

export let data1: any[] = [
  { x: "Chrome", y: 37, text: "37%" },
  { x: "UC Browser", y: 17, text: "17%" },
  { x: "iPhone", y: 19, text: "19%" },
  { x: "Others", y: 4, text: "4%" },
  { x: "Opera", y: 11, text: "11%" },
  { x: "Android", y: 12, text: "12%" },
];

const Pie = () => {
  const { currentMode} = useStateContext( ) as AppContextInterface ;
  return (
    <div className="m-4 md:m-10 mt-24 p-10 bg-white dark:text-yellow-300 dark:bg-secondary-dark-bg rounded-3xl">
      <Header category="Pie Chart" title="Mobile Browser Statistics" />
      <AccumulationChartComponent
        id="pie-chart"
        title="Mobile Browser Statistics"
        legendSettings={{ visible: false }}
        
        background={currentMode === "Dark" ? "rgb(253 224 71 / var(--tw-text-opacity))" : "#fff"}
        enableSmartLabels={true}
        enableAnimation={false}
        center={{ x: "50%", y: "50%" }}
        tooltip={{ enable: true, format: "${point.x} : <b>${point.y}%</b>" }}
      >
        <Inject
          services={[
            AccumulationLegend,
            PieSeries,
            AccumulationTooltip,
            AccumulationDataLabel,
          ]}
        />

        <AccumulationSeriesCollectionDirective>
          <AccumulationSeriesDirective
            dataSource={data1}
            name="Browser"
            xName="x"
            yName="y"
            explode={true}
            explodeOffset="10%"
            explodeIndex={0}
            dataLabel={{
              visible: true,
              position: "Inside",
              name: "text",
              font: {
                fontWeight: "600",
              },
            }}
            radius="70%"
          ></AccumulationSeriesDirective>
        </AccumulationSeriesCollectionDirective>
      </AccumulationChartComponent>
    </div>
  );
};

export default Pie;
