import { VectorMap } from "@react-jvectormap/core";
import { worldMill } from "@react-jvectormap/world";
import React from "react";
import { colorScale, countries, missingCountries } from "./Countries";

function WorldMap() {
  return (
    <div  className="h-[300px] md:h-[400px] mt-12">
      <VectorMap
        map={worldMill}
        zoomOnScroll={false}
        containerStyle={{
          width: "100%",
          height: "100%",
        }}
        backgroundColor="#ffecef"
        markers={missingCountries}
        markerStyle={{
          initial: {
            fill: "red",
          },
        }}
        series={{
          regions: [
            {
              scale: colorScale,
              values: countries,
              min: 0,
              max: 100,
            },
          ],
        }}
        // onRegionTipShow={function reginalTip(event, label, code) {
        //   return label.html(`
        //           <div style="background-color: black; border-radius: 6px; min-height: 50px; width: 125px; color: white; padding-left: 16px">
        //             <p>
        //             <b>
        //             ${label.html()}
        //             </b>
        //             </p>
        //             <p>
        //             ${countries[code]}
        //             </p>
        //             </div>`);
        // }}
        onMarkerTipShow={function markerTip(event, label, code) {
          return label.html(`
                  <div style="background-color: black; border-radius: 6px; min-height: 50px; width: fit; color: white !important; padding-left: 24px">
                    <p style="color: white !important;">
                      <b>
                      ${label.html()}
                      </b>
                    </p>
                    </div>`);
        }}
      />
    </div>
  );
}

export default WorldMap;