import { Button } from '@mui/material';
import React, { useEffect, useState } from 'react'
import Balance from './Components/Balance';
import Layout from './Layout/Layout';
import Spending from './Components/Spending';
import { useHttp } from './Hooks/http.hook';
import CardWallet from './Components/CardWallet';
import MyModal from './Components/MyModal/MyModal';
import FormAdd from './Components/FormAdd';

const Home = () => {

    const [visible, setVisible] = useState(false)
    const today = new Date(); // Создаем объект даты, представляющий текущее время
    const day = today.getDate(); // Получаем текущий день
    const month = today.getMonth();
    const dayIndex = today.getDay(); // Получаем индекс дня недели (от 0 до 6)
    const [barData, setBarData] = useState([])
    const {request} = useHttp()

    const dayNames = [
    "Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"
    ];
    
    const monthNames = [
        "January", "February", "March", "April", "May", "June",
        "July", "August", "September", "October", "November", "December"
    ];
      
      

    useEffect(() => {
        const userInfo = JSON.parse(localStorage.getItem("user"))
            request(
                "http://localhost:7777/users",
                "GET",
        ).then((res) => {
            let data = res.filter(item => item.userid === userInfo.userId)[0]
            setBarData(data?.wallets)
        }); 
    }, [])
    

  return (
    <Layout>
        <div className=' absolute w-[82%] top-[100px] left-[18%] p-[32px]'>
            <div className="top flex justify-between w-full items-center">
                <div className="info flex gap-[40px] items-center">
                    <span className='text-3xl font-semibold'>Overview</span>
                    <span className='text-[#54669C] text-xl'>{day} {monthNames[month]}, {dayNames[dayIndex]}</span>
                </div>
                <Button variant='cantained' sx={{backgroundColor: "#3BA0FF", fontWeight: "550" ,borderRadius: '1000px'}} onClick={() => setVisible(true)}>Add Widget</Button>
            </div>
            <div className="infos flex gap-4">
                <Balance info={barData}/>
                <Spending info={barData}/>
                <div className="walts flex flex-wrap gap-4">
                    {
                        barData.map(item => <CardWallet key={item.id} item={item}/>)
                    }
                </div>
            </div>

        </div>
        <MyModal visible={visible} setVisible={setVisible}>
            <FormAdd/>
        </MyModal>
    </Layout>
  )
}

export default Home