import React from 'react';
import Marquee from "@/components/ui/marquee";
import { OrganisationLogos } from "@/lib/data";

const Section4 = () => {
  return (
    <div className='p-5 '>
      <div>
        <h2>Partner with us</h2>
      </div>
      <div className='mt-4'>
        <p>
          Many of our activities at CompSoc wouldn’t be possible without the support we receive from our wonderful partners. We are eternally grateful for their support over the years.
        </p>
      </div>
      <div className='h-40 mt-4'>
        <Marquee pauseOnHover className="[--duration:30s]">
          {OrganisationLogos.map((logo) => (
            <img key={logo} src={logo} className="h-20" alt="Organisation Logo"/>
          ))}
        </Marquee>
        <Marquee pauseOnHover reverse className="[--duration:30s]">
          {OrganisationLogos.map((logo) => (
            <img key={logo} src={logo} className="h-20" alt="Organisation Logo"/>
          ))}
        </Marquee>
      </div>
    </div>
  );
}

export default Section4;
