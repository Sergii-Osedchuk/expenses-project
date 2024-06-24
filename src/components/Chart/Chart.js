import ChartBar from './ChartBar';
import './Chart.css';

const Chart = ({dataPoints}) => {
  const expensesValueArray = dataPoints.map(dataPoint => dataPoint.value);
  const totalMax = Math.max(...expensesValueArray);

  return (
    <div className='chart'>
      {dataPoints.map(dataPoint => 
        <ChartBar 
          key={dataPoint.label}
          value={dataPoint.value} 
          maxValue={totalMax} 
          label={dataPoint.label}
        />
      )}
    </div>
  )
}

export default Chart;