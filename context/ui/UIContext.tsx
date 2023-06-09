import { createContext } from 'react'

interface ContextProps{
     sidemenuOpen : boolean;
     isAddingEntry: boolean;

     //Methods
     openSideMenu:() => void;
     closeSideMenu:() => void;
     setisAddingEntry: ( isAdding: boolean ) => void

}

export const UIContext = createContext({} as ContextProps);