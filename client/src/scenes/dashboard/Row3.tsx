import DashboardBox from '@/components/DashboardBox'
import { DataGrid, GridCellParams } from '@mui/x-data-grid';
import { useGetKpisQuery, useGetProductsQuery, useGetTransactionsQuery } from '@/state/api'
import  { useMemo } from 'react'
import BoxHeader from '@/components/BoxHeader';
import { useTheme, Typography  } from '@mui/material'
import Box from '@mui/material/Box'
import FlexBetween from '@/components/FlexBetween';
import { Pie, PieChart, Cell } from 'recharts';

const Row3 = () => {
  const {data: kpiData} = useGetKpisQuery()
  const {data: productData}= useGetProductsQuery()
  const {data: transactionData}= useGetTransactionsQuery()
  const {palette} = useTheme()
  const pieColors = [palette.primary[800], palette.primary[300]]

  const productColumns = [
    {
      field: '_id', // target the _id field and sort the column by product ids
      headerName: "id",
      flex:1,
    },
    {
      field: 'expense',
      headerName: "Expense",
      flex:0.5,
      renderCell:(params:GridCellParams)=>`$${params.value}`,
    },
    {
      field: 'price',
      headerName: "Price",
      flex:0.5,
      renderCell:(params:GridCellParams)=>`$${params.value}`,
    },
  ]
  const transactionColumns = [
    {
      field: '_id', // target the _id field and sort the column by product ids
      headerName: "id",
      flex:1,
    },
    {
      field: 'amount',
      headerName: "Amount",
      flex:0.5,
      renderCell:(params:GridCellParams)=>`$${params.value}`,
    },
    {
      field: 'buyer',
      headerName: "Buyer",
      flex:0.5,
    },
    {
      field: "productIds",
      headerName: "Count",
      flex: 0.1,
      renderCell: (params: GridCellParams) =>
        (params.value as Array<string>).length,// calculates the length of the value property within params. It seems that params.value is expected to be an array of strings (product IDs), and the rendered cell will display the count or length of that array.
    },
  ]
const pieChartData = useMemo(()=>{
  if (kpiData){
    const totalExpenses= kpiData[0].totalExpenses;
    //Object.entries converts an object into array consisting of enumerable property [key, value] pairs of the object 
    //iterate over each element and transform it to the data structure which piechart requires
    return Object.entries(kpiData[0].expensesByCategory).map(
      ([key, value])=>{
        return[
          // represent highlighted part
          {
            name:key,
            value:value,
          },
          // represent un-highlighted part
          {
            name: `${key} of Total`,
            value: totalExpenses - value,
          }
        ]
      }
    )
  }
}, [kpiData]);

  return (
    <>
    <DashboardBox  gridArea="g">
      <BoxHeader title='List of Products' sideText={`${productData?.length} products`}/>
      {/* use box to style DataGrid . &. is to target the child component*/}
      <Box mt='0.5rem' p='0 0.5rem' height="75%" 
      sx={{"& .MuiDataGrid-root" : {color: palette.grey[300], border:'none'},
          "& .MuiDataGrid-cell" : {borderBottom:`1px solid ${palette.grey[800]} !important`},
          "& .MuiDataGrid-columnHeaders" : {borderBottom:`1px solid ${palette.grey[800]} !important`},
      }}>
        <DataGrid 
          columnHeaderHeight={25} 
          rowHeight={35} 
          hideFooter={true}
          rows={productData||[]} 
          columns={productColumns}/>
      </Box>
    </DashboardBox>
    <DashboardBox  gridArea="h">
    <BoxHeader title='Recent Orders' sideText={`${transactionData?.length} latest transactions`}/>
      {/* use box to style DataGrid . &. is to target the child component*/}
      <Box mt='1rem' p='0 0.5rem' height="80%" 
      sx={{"& .MuiDataGrid-root" : {color: palette.grey[300], border:'none'},
          "& .MuiDataGrid-cell" : {borderBottom:`1px solid ${palette.grey[800]} !important`},
          "& .MuiDataGrid-columnHeaders" : {borderBottom:`1px solid ${palette.grey[800]} !important`}
      }}>
        <DataGrid 
          columnHeaderHeight={25} 
          rowHeight={35} 
          hideFooter={true}
          rows={transactionData||[]} 
          columns={transactionColumns}/>
      </Box>
    </DashboardBox>
    <DashboardBox  gridArea="i">
      <BoxHeader title="Expense Breakdown By Category" sideText="+4%" />
      <FlexBetween mt="0.5rem" gap="0.5rem" p="0 1rem" textAlign="center">
        {pieChartData?.map((data,i) =>(
          <Box key ={`${data[0].name}-${i}`}>
            <PieChart width={110} height={100} margin={{top: 0,right: -10, left: 10,bottom: 0,}}>
              <Pie
                stroke='none'
                data={data}
                innerRadius={18}
                outerRadius={35}
                paddingAngle={5}
                dataKey="value"
              >
                {data.map((entry, index) => (
                  <Cell key={`cell-${index}`} fill={pieColors[index]} />
                ))}
              </Pie>
            </PieChart>
            <Typography variant='h5'>{data[0].name}</Typography>
          </Box>
        ))}
      </FlexBetween>
    </DashboardBox>
    <DashboardBox  gridArea="j">
      <BoxHeader title="Overall Summary an Explanation Data" sideText="+4%" />
      <Box height='15px'margin= '1.25rem 1rem 0.4rem 1rem' bgcolor={palette.primary[800]} borderRadius="1rem">
        <Box height='15px' width='40%' bgcolor={palette.primary[600]} borderRadius="1rem" >
        </Box>
      </Box>
      <Typography margin='0 1rem'  variant='h6'>
        The curious cat chased the bouncing ball through the garden, leaping over the colorful flowers and playfully swatting at the fluttering butterflies. Its sleek fur shimmered in the sunlight as it gracefully pounced and twirled, displaying its agile movements. The garden echoed with the sound of chirping birds and rustling leaves, creating a symphony of nature's melodies.
      </Typography>
    </DashboardBox>
    </>
  )
}

export default Row3