import DashboardBox from '@/components/DashboardBox'
import FlexBetween from '@/components/FlexBetween'
import { useGetKpisQuery } from '@/state/api'
import { Box, Button, Typography } from '@mui/material'
import  { useMemo, useState } from 'react'
import { CartesianGrid, Label, Legend, Line, LineChart, ResponsiveContainer, Tooltip, XAxis, YAxis } from 'recharts'
import regression, {DataPoint} from 'regression';


const Predictions = () => {
const [isPredictions, setIsPredictions] = useState(false)
const {data: kpiData}= useGetKpisQuery()

const formattedData =useMemo(()=>{
    if(!kpiData) return [];
    //format data into array format and insert Array<DataPoint> for regression.js to work
    const monthData = kpiData[0].monthlyData
    
    //array format
    const formatted: Array <DataPoint> = monthData.map(({revenue}, i:number)=>{
        return [i,revenue ]
    });

    const regressionLine = regression.linear(formatted) //linear formula can only take in array
   
    return monthData.map(({month, revenue}, i:number) => {
        return{
            name:month,
            "Actual Revenue": revenue,
            "Regression Line": regressionLine.points[i][1],
            "Predicted Revenue": regressionLine.predict(i+12)[1]
        }
    }) // i represents the month, [1] is the revenue value. (i+12) is 12 months later

},[kpiData])

  

  return (
    <DashboardBox width='%100' height='%100' p='1rem' overflow='hidden'>
        <FlexBetween m='1rem 2.5rem' gap="1rem" >
            <Box>
                <Typography variant='h3'>Renvenue and Predictions</Typography>
                <Typography variant='h6'>Charted revenue and predicted revenue based on simple linear regression model</Typography>
            </Box>
            <Button 
                onClick={()=> setIsPredictions(!isPredictions)} 
                sx={{ color:'#242427', backgroundColor:'#6b6d74', boxShadow: "0.1rem 0.1rem 0.1rem 0.1rem rgba(0,0,0,.9)", }} >
              Show Predicted revenue  
            </Button>
        </FlexBetween>
        <ResponsiveContainer width="100%" height={700}>
          <LineChart
            data={formattedData}
            margin={{
              top: 20,
              right: 75,
              left: 20,
              bottom: 80,
            }}
          >
            <CartesianGrid strokeDasharray="3 3" stroke={'#48494e'}/>
            <XAxis dataKey="name" tickLine={false} style={{fontSize:"15px"}}>
                <Label offset={-5} position={'insideBottom'}>Month</Label>
            </XAxis>
            <YAxis domain={[12000, 26000]} axisLine={{strokeWidth: '0'}} tickLine={false} style={{fontSize:"15px"}}  >
                <Label offset={-5} position={'insideLeft'} angle={-90}>revenue in USD</Label>
            </YAxis>
            <Tooltip />
            <Legend verticalAlign='top'/>
            {/* dot plot */}
            <Line type="monotone" dataKey="Actual Revenue" stroke='#12efc8' strokeWidth={0} dot={{strokeWidth:5}}/>
            {/* linear line */}
            <Line  type="monotone" dataKey="Regression Line" stroke="#8884d8" dot={false}/>
            {isPredictions && (
                <Line  strokeDasharray={"5 5"} dataKey="Predicted Revenue" stroke='#f2b455' dot={false}/>
            )}
          </LineChart>
      </ResponsiveContainer>
    </DashboardBox>
  )
}

export default Predictions