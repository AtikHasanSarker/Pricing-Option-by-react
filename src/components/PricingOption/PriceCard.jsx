import React from 'react';

const PriceCard = ({ pricing }) => {
    const {name, price, billing, features} = pricing;
  return (
    <div>
      <div className="card w-full bg-base-100 shadow-sm flex flex-col justify-between h-full">
        <div className="card-body">
          <div className="flex justify-between">
            <h2 className="text-2xl font-bold">{name}</h2>
            <span>${price}</span>
          </div>
          <div>{billing}</div>
          <ul className="mt-6 flex flex-col gap-2 text-xs">
            {
                features.map(feature => 
                    <li>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="size-4 me-2 inline-block text-success"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          d="M5 13l4 4L19 7"
                        />
                      </svg>
                      <span>{feature}</span>
                    </li>
                )

            }
          </ul>
          <div className="mt-6">
            <button className="btn btn-primary btn-block">Subscribe</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PriceCard;