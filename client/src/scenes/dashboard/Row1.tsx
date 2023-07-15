import DashboardBox from '@/components/DashboardBox'
import { useGetKpisQuery } from '@/state/api'
import {useMemo} from 'react'
import { ResponsiveContainer, LineChart,CartesianGrid,  XAxis, YAxis, Tooltip, Area, Line, Legend, AreaChart, BarChart, Bar } from 'recharts'
import BoxHeader from '@/components/BoxHeader'


const Row1 = () => {

    const {data} = useGetKpisQuery()
    
    const revenue = useMemo(() => {
      return (
        data && data[0].monthlyData.map(({ month, revenue}) => {
          return {
            name: month.substring(0, 3),
            revenue: revenue,
          };
        })
      );
    }, [data]);

    const revenueExpenses = useMemo(() => {
      return (
        data && data[0].monthlyData.map(({ month, revenue, expenses }) => {
          return {
            name: month.substring(0, 3),
            revenue: revenue,
            expenses: expenses,
          };
        })
      );
    }, [data]);
    
    const revenueProfit =useMemo(() => {
      return(
        data && data[0].monthlyData.map(({ month, revenue, expenses }) => {
          return {
            name: month.substring(0, 3),
            revenue: revenue,
            profit: (revenue-expenses).toFixed(2),
          };
        })

      )
    },[data])
  return (
    <>
    <DashboardBox  gridArea="a" >
      <BoxHeader 
        title='Revenue and Expenses' 
        subtitle='top line represents revenue, bottom line represents expenses' 
        sideText='+4%'
        />
      <ResponsiveContainer width="100%" height="100%">
          <AreaChart
            width={500}
            height={400}
            data={revenueExpenses}
            margin={{
              top: 15,
              right: 25,
              left: -10,
              bottom: 60,
            }}
          >
            <defs>
              <linearGradient id='colorRevenue' x1='0' y1='0' x2='0' y2='1'> 
                <stop
                  offset='5%'
                  stopColor={'#12EFC8'}
                  stopOpacity={0.5}
                />
                <stop
                  offset='95%'
                  stopColor={'#12EFC8'}
                  stopOpacity={0}
                />
              </linearGradient>
              <linearGradient id='colorExpenses' x1='0' y1='0' x2='0' y2='1'> 
                <stop
                  offset='5%'
                  stopColor={'#F0B455'}
                  stopOpacity={0.5}
                />
                <stop
                  offset='95%'
                  stopColor={'#F0B455'}
                  stopOpacity={0}
                />
              </linearGradient>
            </defs>
            <XAxis dataKey="name" tickLine={false} style={{fontSize:"12px"}}/>
            <YAxis axisLine={{strokeWidth:'0'}} tickLine={false} style={{fontSize:"12px"}} domain={[8000,23000]}/>
            <Tooltip />
            <Area type="monotone" dataKey="revenue" stroke={'#12EFC8'} dot={true} fillOpacity={1} fill="url(#colorRevenue)" />
            <Area type="monotone" dataKey="expenses" stroke={'#F0B455'} dot={true} fillOpacity={1} fill="url(#colorExpenses)" />
          </AreaChart>
      </ResponsiveContainer>
    </DashboardBox>
      
    <DashboardBox  gridArea="b" >
      <BoxHeader 
        title='Profit and Revenue' 
        subtitle='top line represents revenue, bottom line represents expenses' 
        sideText='+4%'
      />
      <ResponsiveContainer width="100%" height="100%">
          <LineChart
            width ={500}
            height={400}
            data={revenueProfit}
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
            <Legend height={20} wrapperStyle={{
              margin: '0 0 10px 0'
            }}/>
            <Line yAxisId='left' type="monotone" dataKey="profit" stroke={'#8884D8'}/>
            <Line yAxisId='right' type="monotone" dataKey="revenue" stroke={'#12EFC8'} />
          </LineChart>
      </ResponsiveContainer>
    </DashboardBox>

    <DashboardBox  gridArea="c" >
      <BoxHeader 
        title='Revenue month and month' 
        subtitle='graph representing monthly revenue' 
        sideText='+4%'
      />
      <ResponsiveContainer width="100%" height="100%">
          <BarChart
            width={500}
            height={300}
            data={revenue}
            margin={{
              top: 17,
              right: 15,
              left: -5,
              bottom: 58,
            }}
          >
            <CartesianGrid vertical={false} stroke={'#48494e'} />
            <defs>
              <linearGradient id='colorRevenue' x1='0' y1='0' x2='0' y2='1'> 
                <stop
                  offset='5%'
                  stopColor={'#F0B455'}
                  stopOpacity={0.5}
                />
                <stop
                  offset='95%'
                  stopColor={'#F0B455'}
                  stopOpacity={0}
                />
              </linearGradient>
            </defs>
            <XAxis dataKey="name" axisLine={false} tickLine={false} style={{fontSize:'12px'}}/>
            <YAxis axisLine={false} tickLine={false} style={{fontSize:'12px'}}/>
            <Tooltip />
            <Legend />
            <Bar dataKey="revenue" fill="url(#colorRevenue)" />
          </BarChart>
      </ResponsiveContainer>
    </DashboardBox>
    </>
  )
}

export default Row1