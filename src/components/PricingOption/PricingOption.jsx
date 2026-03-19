import React, { use } from 'react';
import PriceCard from './PriceCard';

const PricingOption = ({ pricingPromise }) => {
    const pricingData = use(pricingPromise);
    console.log(pricingData)
  return <div className='mt-25'>
    <h2 className='text-5xl text-center underline underline-offset-auto text-emerald-600 font-bold mb-8'>Get our Membership</h2>
    <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 justify-between gap-10 w-10/12 mx-auto'>
        {
             pricingData.map(pricing => <PriceCard key={pricing.id} pricing={pricing}></PriceCard>)
    
        }
    </div>
  </div>;
};

export default PricingOption;