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
  Inject, Search, Toolbar
} from "@syncfusion/ej2-react-grids";

import { employeesData, contextMenuItems, employeesGrid } from "../data/dummy";
import { Header } from "../components";

const Employees = () => {
  return (
    <div className="m-2 md:m-10 p-2 md:p-10 bg-white rounded-3xl">
      <Header category="Pages" title="Employees" />
      <GridComponent  dataSource={employeesData} allowPaging
       allowSorting
       width="auto"
       toolbar={['Search']}>
        <ColumnsDirective>
          {employeesGrid.map((item: any, i: number) => (
            <ColumnDirective key={i} {...item} />
          ))}
        </ColumnsDirective>
        <Inject
          services={[
            Page, Search, Toolbar
          ]}
        />
      </GridComponent>
    </div>
  )
}

export default Employees
