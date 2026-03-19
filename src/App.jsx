import { Suspense } from 'react';
import './App.css'
import Navbar from './components/Navbar/Navbar';
import PricingOption from './components/PricingOption/PricingOption';
import Charts from './components/Charts/Charts';

const pricingPromise = fetch("pricingData.json").then(res => res.json());
const usageDataPromise = fetch(".././public/Charts/usageData.json").then(res => res.json());
const featureDataPromise = fetch(".././public/Charts/FeatureData.json").then(res => res.json());
const dailyUserPromise = fetch(".././public/Charts/DailyUser.json").then(res => res.json());


function App() {

  return (
    <>
      <Navbar></Navbar>
      <Charts
        dailyUserPromise={dailyUserPromise}
        usageDataPromise={usageDataPromise}
        featureDataPromise={featureDataPromise}
      ></Charts>
      <Suspense
        fallback={<span className="loading loading-dots loading-xl"></span>}
      >
        <PricingOption pricingPromise={pricingPromise}></PricingOption>
      </Suspense>
    </>
  );
}

export default App
