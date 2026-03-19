import React, { use } from 'react';
import FeatureData from './FeatureData';
import DailyUser from './DailyUser';
import UsageData from './UsageData';


const Charts = ({ usageDataPromise, featureDataPromise, dailyUserPromise }) => {
  const usageData = use(usageDataPromise);
  const featureData = use(featureDataPromise);
  const dailyUser = use(dailyUserPromise);

  return (
    <div className="w-10/12 mx-auto mt-20 grid grid-cols-2 wra gap-10 justify-center">
      <UsageData usageData={usageData}></UsageData>
      <DailyUser dailyUser={dailyUser}></DailyUser>
      <FeatureData featureData={featureData}></FeatureData>
    </div>
  );
};

export default Charts;