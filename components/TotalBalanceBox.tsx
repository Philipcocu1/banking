
import AnimatedCounter from './AnimatedCounter';
import DoughnutChart from './DoughnutChart';




const TotalBalanceBox = ({
    accounts=[],totalBanks,totalCurrentBalance
}:TotalBalanceBoxProps) => {
  return (
    <section className='total-balance'>
    <div className='total-balance-chart'>
        <DoughnutChart accounts={accounts}/>

    </div>

    <div className='flex flex-col gap-6'>
        <h2 className='header-2'>
        Bank Accounts: {totalBanks} 

        </h2>


        <div className='flex flex-col gap-2'>
        <p className='total-balance-label'>Total Curent Balance:</p>

        <div className='total-balance-amount flex-center 
        gap-2'> 

        <AnimatedCounter amount={totalCurrentBalance}/>
            {/* {formatAmount(totalCurrentBalance)} */}
            {/* &#8358;{totalCurrentBalance} */}
            {/* &#8358;{formatAmount(totalCurrentBalance)} */}

        </div>
        </div>
         
    </div>
    
    </section>
  )
}

export default TotalBalanceBox


// import React from 'react'

// const TotalBalanceBox = ({
//          accounts=[],totalBanks,totalCurrentBalance
//      }:TotalBalanceBoxProps) => {

// const TotalBalanceBox = () => {
//   return (
//     <section className='total-balance'>
// //     <div className='total-balance-chart'>
// //         {/* Total Balance Chart */}

// //     </div>

// //     <div className='flex flex-col gap-6'>
// //         <h2 className='header-2'>
// //         {totalBanks} Bank Accounts

// //         </h2>

// //     </div>
    
// //     </section>
//   )
// }

// export default TotalBalanceBox