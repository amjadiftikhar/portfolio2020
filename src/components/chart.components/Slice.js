import React from "react";

// getting pieData, id, colors and arc as props
export const Slice = ({pieData, id, colors, arc}) => {     

    return ( 
        <g className="this" key={id} data-testid='slice'>
            {/* creating colored arc for each element */}
            <path  d={arc(pieData)} fill={colors(id)} />
            {/* generating text for each skill */}
            <text
                textAnchor="middle"
                alignmentBaseline="middle"
                transform={`translate(${arc.centroid(pieData)})`}  
                fill="white"
                fontWeight="bolder"
                fontSize="12" >
                {pieData.data.tool}
            </text>
        </g>
    )
}