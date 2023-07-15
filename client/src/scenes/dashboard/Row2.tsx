import DashboardBox from '@/components/DashboardBox'
import { useGetProductsQuery, useGetKpisQuery } from '@/state/api';
import { ResponsiveContainer, LineChart,CartesianGrid,  XAxis, YAxis, ZAxis, Tooltip, Line,
    Pie, PieChart, Cell, Scatter, ScatterChart } from 'recharts' 
import {Typography, Box} from '@mui/material'
import {useMemo} from 'react'
import FlexBetween from '@/components/FlexBetween';
import BoxHeader from '@/components/BoxHeader';

const Row2 = () => {
  const {data:productData}= useGetProductsQuery()
  const {data: operationalData}= useGetKpisQuery()

  const pieColors = ['#076050', '#71F5DE']
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

  const productExpenseData = useMemo(() => {
    return (
      productData && productData.map(({ _id, price, expense}) => {
        return {
          "_id": _id,
          "price": price,
          "expense": expense,
        };
      })
    );
  }, [productData]);

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
            <CartesianGrid vertical={false} stroke={'#48494e'}/>
            <XAxis dataKey="name" tickLine={false} style={{fontSize:"12px"}}/>
            <YAxis yAxisId='left' orientation='left' axisLine={false} tickLine={false} style={{fontSize:"12px"}}  />
            <YAxis yAxisId='right' orientation='right' axisLine={false} tickLine={false} style={{fontSize:"12px"}} />
            <Tooltip />
            <Line yAxisId='left' type="monotone" dataKey="Non-Operational Expenses" stroke={'#12EFC8'}/>
            <Line yAxisId='right' type="monotone" dataKey="Operational Expenses" stroke={'#8884D8'} />
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
          <Typography m="0.3rem 0.5rem" variant="h3" color={'#71F5DE'}>83</Typography>
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
    <DashboardBox  gridArea="f">
    <BoxHeader title='Products prices and expenses' sideText='+4%'/>
    <ResponsiveContainer width="100%" height="100%">
        <ScatterChart
          margin={{
            top: 20,
            right: 20,
            bottom: 40,
            left: -10,
          }}
        >
          <CartesianGrid stroke={'#48494e'}/>
          <XAxis type="number" dataKey="price" name="price" axisLine={false}
             tickLine={false} style={{fontSize: "15px"}} tickFormatter={(v)=>`$${v}`}/>
          <YAxis type="number" dataKey="expense" name="expense"  axisLine={false}
             tickLine={false} style={{fontSize: "15px"}} tickFormatter={(v)=>`$${v}`}/>
          <ZAxis type="number" range ={[20]}/> 
          {/* z axis changes the size of the dots */}
          <Tooltip formatter={(v)=>`$${v}`} />
          <Scatter name="Product expense ratio" data={productExpenseData} fill={'#8884D8'} />
        </ScatterChart>
      </ResponsiveContainer>
    </DashboardBox>
    </>
  )
}

export default Row2