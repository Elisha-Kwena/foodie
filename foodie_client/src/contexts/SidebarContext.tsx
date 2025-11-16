"use client"
import {createContext,useContext,ReactNode,useState} from 'react'

interface SidebarContextProps{
    isOpen:boolean;
    toggleSidebar:()=> void
}

const SidebarContext = createContext<SidebarContextProps>({
    isOpen:true,
    toggleSidebar:()=>{}
})

interface SidebarProviderProps{
    children:ReactNode
}

export function SidebarProvider({children}:SidebarProviderProps){
    const [isOpen,setIsOpen] = useState<boolean>(true)
    const toggleSidebar = () => {
        setIsOpen((prev) => !prev)
    }

    return (
        <SidebarContext.Provider value={{isOpen,toggleSidebar}}>
            {children}
        </SidebarContext.Provider>
    )
}

export function useSidebar(): SidebarContextProps {
  const context = useContext(SidebarContext);
  if (!context) {
    throw new Error('useSidebar must be used within a SidebarProvider');
  }
  return context;
}