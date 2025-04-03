import { Header } from "@/components/header";
import { Outlet, useLocation } from "react-router-dom";

export function AppLayout() {
    const location = useLocation();
    const isHomePage = location.pathname === "/";

    return (
        <div className="flex min-h-screen flex-col antialiased">
            <Header />
            <div className={`${isHomePage ? "bg-[var(--base-background)]" : "bg-[var(--base-white)]"
                } flex flex-1 flex-col gap-4 px-44 py-16`}>
                <Outlet />
            </div>
        </div>
    );
}