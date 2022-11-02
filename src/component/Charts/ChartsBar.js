import "../Charts/Chartsbar.css";

export const ChartsBar = (props) => {
    let barFillHeight="0%"

    if(props.maxvalue >0){
        barFillHeight=Math.round((props.value/props.maxvalue)*100)+ '%'
    }
  return (
    <div className="charts-bar">
      <div className="chartbar-inner">
        <div className="charts-fill" style={{height:barFillHeight}}></div>
      </div>
      <div className="chart-bar-label">{props.label}</div>
    </div>
  );
};
