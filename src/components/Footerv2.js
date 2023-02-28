import React from 'react';

function Footerv2() {
  return (
    <div className="restaurant-info row">
      <div className="locations col-md-6 col-sm-12">
        <h4>LOCATIONS</h4>
        <div className="location-1">
          <h5>
            1208 S. Standard Ave,
            <br />
            Santa Ana, CA &#8212; 92707
          </h5>
        </div>
        <div className="location-2">
          <h5>
          3174 W Lincoln Ave Ste 104
            <br />
            Anaheim, CA &#8212; 92801
          </h5>
        </div>
      </div>

      <div className="hours col-md-6 col-sm-12">
        <h4>HOURS</h4>
        <div className="weekdays">
          <h5>
            Santa Ana &#8212; Monday - Sunday
            <br />
            6:00am - 9:00pm
          </h5>
        </div>
        <div className="weekdays">
          <h5>
            Anaheim &#8212; Monday - Sunday
            <br />
            5:00am - 8:00pm
          </h5>
        </div>

        <div className="weekends">
          <h5>
            CONTACT US
            <br />
            714-547-8265
          </h5>
        </div>
      </div>
    </div>
  )
}

export default Footerv2;
