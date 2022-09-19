import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { FiSettings } from "react-icons/fi";
import { Position, TooltipComponent } from "@syncfusion/ej2-react-popups";

import "./App.css";

function App() {
  const activeMenu = true;
  return (
    <div>
      <BrowserRouter>
        <div className="flex relative dark:bg-main-dark-bg">
          <div className="fixed right-4 bottom-4" style={{ zIndex: "1000" }}>
            <TooltipComponent content="Settings" position="TopLeft">
              <button
                className="text-3xl p-3 hover:drop-shadow-xl hover:bg-light-gray text-white"
                style={{ background: "blue", borderRadius: "50%" }}
              >
                <FiSettings />
              </button>
            </TooltipComponent>
          </div>
          {activeMenu ? (
            <div className="w-72 fixed sidebar dark:bg-secondary-dark-bg bg-white">
              Side Bar
            </div>
          ) : (
            <div className="w-0 dark:bg-secondary-dark-bg">Sidebar = 0</div>
          )}
          <div
            className={`dark:bg-main-bg bg-main-bg main-h-screen w-full ${
              activeMenu ? "md:ml-72" : "flex-2"
            }`}
          >
            <div className="fixed md:static bg-main-bg dark:bg-main-dark-bg navbar w-full">
              NavBar
            </div>
          </div>
          <div>
            <Routes>
              <Route path="/" element="Ecommerce" />
              <Route path="/ecommerce" element="Ecommerce" />

              {/*Pages */}
              <Route path="/orders" element="Orders" />
              <Route path="/employees" element="Employees" />
              <Route path="/customers" element="Customers" />

              <Route path="/kanban" element="kanban" />
              <Route path="/editor" element="editor" />
              <Route path="/orders" element="Orders" />
              <Route path="/color-picker" element="Calendar" />

              {/* Charts */}
              <Route path="/line" element="Line" />
              <Route path="/area" element="Area" />
              <Route path="/bar" element="Bar" />
              <Route path="/pie" element="Pie" />
              <Route path="/financial" element="financial" />
              <Route path="/color-mapping" element="ColorMap" />
              <Route path="/pyramid" element="Pyramid" />

              <Route path="/line" element="Line" />
              <Route path="/stacked" element="Stacked" />
            </Routes>
          </div>
        </div>
      </BrowserRouter>
    </div>
  );
}

export default App;
