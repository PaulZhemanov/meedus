import React from "react";
import { Navigate, Route, Routes } from "react-router-dom";
import LoginScreen from "@screens/LoginScreen/LoginScreen";
import { ROUTES } from "@src/constants";
import AchievementsScreen from "@screens/AchievementsScreen";
import NameServiceScreen from "@screens/NameServiceScreen";
import AuctionScreen from "@screens/AuctionScreen";
// import MarketplaceScreen from "@screens/MarketplaceScreen";
import MarketplaceScreen from "@screens/MarketplaceScreen/MarketplaceScreen";


interface IProps {}

const App: React.FunctionComponent<IProps> = () => {
  return (
    <>
      <Routes>
        <Route path={ROUTES.ROOT} element={<AchievementsScreen />} />
        <Route path={ROUTES.ROOT} element={<MarketplaceScreen />} />
        <Route path={ROUTES.NAMESERVICE} element={<NameServiceScreen />} />
        <Route path={ROUTES.AUCTION} element={<AuctionScreen />} />
        {/* <Route path={ROUTES.PARTNERS} element={<PartnersScreen />} /> */}
        <Route path="*" element={<Navigate to={ROUTES.ROOT} />} />
      </Routes>
      <LoginScreen />
    </>
  );
};

export default App;
