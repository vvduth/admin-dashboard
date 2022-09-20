import React from "react";
import {
  GridComponent,
  ColumnsDirective,
  ColumnDirective,
  Resize,
  Sort,
  ContextMenu,
  Filter,
  Page,
  ExcelExport,
  PdfExport,
  Edit,
  Inject,
} from "@syncfusion/ej2-react-grids";

import { ordersData, contextMenuItems, ordersGrid } from "../data/dummy";
import { Header } from "../components";

export interface OrderGridItemType1 {
  headerText: string;
  template: any;
  textAlign: string;
  width: any;
  field?: string;
}

export interface OrderGridItemType2 {
  field: string;
  headerText: string;
  width: any;
  editType: string;
  textAlign: string;
}

export type OrderGridItemGeneral = OrderGridItemType1 | OrderGridItemType2;

const Orders = () => {
  return (
    <div className="m-2 md:m-10 p-2 md:p-10 bg-white rounded-3xl">
      <Header category="Pages" title="Orders" />
      <GridComponent id="gridcomp" dataSource={ordersData} allowPaging allowSorting>
        <ColumnsDirective>
          {ordersGrid.map((item: any, i: number) => (
            <ColumnDirective key={i} {...item} />
          ))}
        </ColumnsDirective>
        <Inject
          services={[
            Resize,
            Edit,
            PdfExport,
            Sort,
            ContextMenu,
            Filter,
            Page,
            ExcelExport,
            Edit,
          ]}
        />
      </GridComponent>
    </div>
  );
};

export default Orders;
