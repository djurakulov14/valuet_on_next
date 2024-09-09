import { useRouter } from 'next/router'
import React, { useEffect, useState } from 'react'
import { useForm } from 'react-hook-form'
import { useHttp } from '../Hooks/http.hook'
import toast, { Toaster } from 'react-hot-toast'
import { FaRegUserCircle } from 'react-icons/fa'
import { IoIosLock } from 'react-icons/io'
import { IoEye, IoEyeOff } from 'react-icons/io5'
import { Button } from '@mui/material'

const FormAdd = () => {

    const [show, setShow] = useState(false)
    const [user, setUser] = useState({})
    const {register, formState: {erros}, handleSubmit, watch} = useForm()
	const router = useRouter()
	const [data, setData] = useState([])
    const {request} = useHttp()
	const notify = (msg) => toast(msg);

    useEffect(() => {
        setUser(JSON.parse(localStorage.getItem("user")))
    }, [])
    
    
    
    const submit = (data) => {
      let newWallet = {
        title: data.title,
        balance: data.balance,
        transactions:[],
        id: Math.random()
      }

      request('http://localhost:7777/users?userId=' + user.userId, "POST", data)
    }

    const handleShow = () => {
        setShow(!show)
    }

  return (
<form onSubmit={handleSubmit(submit)} className=' w-[100%] h-fit flex flex-col justify-between gap-[62px] pt-[80px] pb-[40px] px-[50px] items-center bg-custom-gradient loginBlock rounded-xl'>
			<h1 className='text-3xl font-bold'>Welcome!</h1>
			<div className="inp w-full flex flex-col gap-[25px]">
				<div className=" w-full py-[11px] px-[16px] flex gap-[10px] items-center bg-[#2E3558] rounded-lg" >
					<FaRegUserCircle size={30}/>
					<input {
						...register("title", {required: true})
					} 
                    required
					className=' w-full bg-transparent outline-0 text-[#616A8B]' placeholder='Card title' type="text" />
				</div>
                <div className=" w-full py-[11px] px-[16px] flex gap-[10px] items-center bg-[#2E3558] rounded-lg" >
					<FaRegUserCircle size={30}/>
					<input {
						...register("balance", {required: true})
					} 
                    required
					className=' w-full bg-transparent outline-0 text-[#616A8B]' placeholder='Balance' type="number" />
				</div>
			</div>
			<Button type='submit' variant="contained"  >Sing Up</Button>
			<Toaster/>
		</form>
  )
}

export default FormAdd