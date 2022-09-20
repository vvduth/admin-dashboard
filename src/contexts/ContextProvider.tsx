import React, {
  createContext,
  FC,
  PropsWithChildren,
  useContext,
  useState,
} from "react";

export interface AppContextInterface {
  currentColor: string;
  currentMode: any;
  activeMenu: any;
  screenSize: any;
  setScreenSize: any;
  handleClick: any;
  isClicked: any;
  initialState: any;
  setIsClicked: any;
  setActiveMenu: any;
  setCurrentColor: any;
  setCurrentMode: any;
  setMode: any;
  setColor: any;
  themeSettings: any;
  setThemeSettings: any;
}

const StateContext = createContext<AppContextInterface | null>(null);

export interface isClickedInterface {
  chat: boolean;
  cart: boolean;
  userProfile: boolean;
  notification: boolean;
}

const initialState: isClickedInterface = {
  chat: false,
  cart: false,
  userProfile: false,
  notification: false,
};

export const ContextProvider: FC<PropsWithChildren> = ({ children }) => {
  const [screenSize, setScreenSize] = useState(undefined);
  const [currentColor, setCurrentColor] = useState("#03C9D7");
  const [currentMode, setCurrentMode] = useState("Light");
  const [themeSettings, setThemeSettings] = useState(false);
  const [activeMenu, setActiveMenu] = useState(true);
  const [isClicked, setIsClicked] = useState<isClickedInterface>(initialState);

  const setMode = (e: any) => {
    setCurrentMode(e.target.value);
    localStorage.setItem("themeMode", e.target.value);
  };

  const setColor = (color: string) => {
    setCurrentColor(color);
    localStorage.setItem("colorMode", color);
  };

  const handleClick = (clicked: any) =>
    setIsClicked({ ...initialState, [clicked]: true });

  return (
    // eslint-disable-next-line react/jsx-no-constructed-context-values
    <StateContext.Provider
      value={{
        currentColor,
        currentMode,
        activeMenu,
        screenSize,
        setScreenSize,
        handleClick,
        isClicked,
        initialState,
        setIsClicked,
        setActiveMenu,
        setCurrentColor,
        setCurrentMode,
        setMode,
        setColor,
        themeSettings,
        setThemeSettings,
      }}
    >
      {children}
    </StateContext.Provider>
  );
};

export const useStateContext = () => useContext(StateContext);
