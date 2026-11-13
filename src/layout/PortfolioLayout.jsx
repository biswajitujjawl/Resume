import { Outlet } from "react-router-dom";
import PortfolioHeader from "../components/header/PortfolioHeader";
const PortfolioLayout = () => {
    return (
        <div className="container mx-auto">
            <div className="flex lg:flex-col w-full">
                <div className="w-full">
                    <PortfolioHeader />

                    {/* Page Content */}
                    <div className="lg:pt-8 md:pt-8  mt-5">
                        <Outlet />
                    </div>
                </div>
            </div>
        </div>
    );
}
export default PortfolioLayout;