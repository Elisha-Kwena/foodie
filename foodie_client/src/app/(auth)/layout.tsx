import { ReactNode } from "react"
interface AuthlayoutProps{
    children:ReactNode
}

export default function AuthLayout({children}:AuthlayoutProps){
    return(
        <main className="w-full h-screen">
            {children}
        </main>
    )
}