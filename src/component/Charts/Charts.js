import "../Charts/Charts.css"
import { ChartsBar } from "./ChartsBar"

export const Charts=(props)=>{
    const dataPointsValues =props.datapoints.map(dataPoint=> dataPoint.value);
    const totalMaximum=Math.max(...dataPointsValues)
    return(
    <div className="charts">
        {props.datapoints.map((datapoint)=>(<ChartsBar 
         key={datapoint.label}
         value={datapoint.value}
         maxvalue={totalMaximum}
        label={datapoint.label}
        />))}

    </div>
    )
}

