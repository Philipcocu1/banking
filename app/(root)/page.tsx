
import Headerbox from '@/components/HeaderBox'
import TotalBalanceBox from '@/components/TotalBalanceBox'
import RightSidebar from '@/components/RightSidebar';
import React from 'react'












const Home = () => {
const logginIn={firstName: "Smith", lastName:"Ronaldo",email:"ronaldo@gmail.com"};

  return (
    <section className='home'>
   <div className='home-content'>
  <header className='home-header'>
      <Headerbox 
      type='greeting'
      title="Welcome"
      user={logginIn?.firstName || "Guest"}
      subtext="Access and Manage your account and transaction efficiently"
      />
     <TotalBalanceBox
     accounts={[]}
     totalBanks={1}
     totalCurrentBalance={25000.00}
/>
  </header>

  
Recent Transactions

   </div>
  <RightSidebar
  
  user={logginIn}
  transactions={[]}
  banks={[{},{}]}
  
  />
       
    </section>
  )
}

export default Home