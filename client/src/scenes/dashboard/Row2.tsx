import DashboardBox from '@/components/DashboardBox'
import { useGetProductsQuery, useGetKpisQuery } from '@/state/api';
import React from 'react'
import BoxHeader from '@/components/BoxHeader';
import { ResponsiveContainer, LineChart,CartesianGrid,  XAxis, YAxis, Tooltip, Area, Line, Legend, AreaChart, BarChart, Bar, Pie, PieChart, Cell } from 'recharts' 
import {Typography, useTheme, Box} from '@mui/material'
import {useMemo} from 'react'
import FlexBetween from '@/components/FlexBetween';

type Props = {}

const Row2 = (props: Props) => {
  const {data:productData}= useGetProductsQuery()
  const {data: operationalData}= useGetKpisQuery()
  const {palette}= useTheme()
  const pieColors = [palette.primary[800], palette.primary[300]]
  const OperationalExpenses = useMemo(() => {
    return (
      operationalData && operationalData[0].monthlyData.map(({ month, operationalExpenses, nonOperationalExpenses }) => {
        return {
          name: month.substring(0, 3),
          "Operational Expenses": operationalExpenses,
          "Non-Operational Expenses": nonOperationalExpenses,
        };
      })
    );
  }, [operationalData]);

  const pieData = [
    { name: 'Group A', value: 400 },
    { name: 'Group B', value: 300 },
  ]
  return (
    <>
    <DashboardBox  gridArea="d">
    <BoxHeader 
        title='Non-Operational vs Operational expenses' 
        sideText='+4%'
      />
      <ResponsiveContainer width="100%" height="100%">
          <LineChart
            data={OperationalExpenses}
            margin={{
              top: 20,
              right: 0,
              left: -10,
              bottom: 55,
            }}
          >
            <CartesianGrid vertical={false} stroke={palette.grey[800]}/>
            <XAxis dataKey="name" tickLine={false} style={{fontSize:"15px"}}/>
            <YAxis yAxisId='left' orientation='left' axisLine={false} tickLine={false} style={{fontSize:"15px"}}  tickFormatter={(value) => Math.round(value)}/>
            <YAxis yAxisId='right' orientation='right' axisLine={false} tickLine={false} style={{fontSize:"15px"}} />
            <Tooltip />
            <Line yAxisId='left' type="monotone" dataKey="Non-Operational Expenses" stroke={palette.tertiary[500]}/>
            <Line yAxisId='right' type="monotone" dataKey="Operational Expenses" stroke={palette.primary.main} />
          </LineChart>
      </ResponsiveContainer>
    </DashboardBox>
    <DashboardBox  gridArea="e">
      <BoxHeader title='Campaigns and Targets' sideText='+4%'/>
      <FlexBetween mt="0.2 rem" gap="1.5rem" pr="1rem">
        <PieChart width={120} height={110} margin={{top: 0,right: -10, left: 10,bottom: 0,}}>
          <Pie
            stroke='none'
            data={pieData}
            innerRadius={18}
            outerRadius={38}
            paddingAngle={5}
            dataKey="value"
          >
            {pieData.map((entry, index) => (
              <Cell key={`cell-${index}`} fill={pieColors[index]} />
            ))}
          </Pie>
        </PieChart>
        
        <Box ml="-1rem" flexBasis="40%" textAlign="center">
          <Typography variant="h5">Target Sales</Typography>
          <Typography m="0.3rem 0.5rem" variant="h3" color={palette.primary[300]}>83</Typography>
          <Typography variant="h6">Finance Goals of the campaign</Typography>
        </Box>

        <Box ml="-1rem" flexBasis="40%" >
          <Typography variant="h5">Losses in revenue</Typography>
          <Typography variant="h6" >Losses are down 25%</Typography>
          <Typography mt ="0.4 rem" variant="h5">Profit Margin</Typography>
          <Typography mt ="0.4 rem" variant="h6">Margins are up by 30% from last month</Typography>
        </Box>
      </FlexBetween>

    </DashboardBox>
    <DashboardBox  gridArea="f"></DashboardBox>
    </>
  )
}

export default Row2