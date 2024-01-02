"use client"

import {useConvexAuth} from "convex/react"

const MainLayout = ({children}:{children: React.ReactNode}) => {
    const[isAuthenticated, isLoading] = useConvexAuth();
    return ( 
        <div>
            {children}
        </div>
     );
}
 
export default MainLayout;