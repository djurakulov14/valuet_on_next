import { Button } from '@mui/material'
import React, { useEffect, useState } from 'react'
import { useForm } from 'react-hook-form'
import { FaRegUserCircle } from 'react-icons/fa'
import { IoIosLock } from 'react-icons/io'
import { IoEye, IoEyeOff } from 'react-icons/io5'
import { useHttp } from '../Hooks/http.hook'
import toast, { Toaster } from 'react-hot-toast'
import { useRouter } from 'next/router'

const RegisterForm = ({sign, setSign}) => {
    const [show, setShow] = useState(false)
    const {register, formState: {erros}, handleSubmit, watch} = useForm()
	const router = useRouter()
	const [data, setData] = useState([])
    const {request} = useHttp()
	const notify = (msg) => toast(msg);


    const submit = (data) => {
        let newUser = {
            "id": Math.random(),
            "login": data.login,
            "password": data.password,
            "fullName": data.fullName,
            "wallets": [
                {
                    "title": "bitcoin",
                    "id": Math.random(),
                    "balance": "0",
                    "transactions": []
                }
            ]
        }

        if(data.login && data.password && data.fullName) {
            request(
                "http://localhost:7777/users",
                "POST",
                JSON.stringify(newUser)
            ).then((res) => {
			    notify("succes")
                localStorage.setItem("user", JSON.stringify(res))
                router.push('/')
            })
        }

    }
        
	const handleShow = () => {
		setShow(!show)
	}

  	return (
		<form onSubmit={handleSubmit(submit)} className=' w-[40%] h-fit flex flex-col justify-between gap-[62px] pt-[80px] pb-[40px] px-[50px] items-center bg-custom-gradient loginBlock rounded-xl'>
			<h1 className='text-3xl font-bold'>Welcome!</h1>
			<div className="inp w-full flex flex-col gap-[25px]">
				<div className=" w-full py-[11px] px-[16px] flex gap-[10px] items-center bg-[#2E3558] rounded-lg" >
					<FaRegUserCircle size={30}/>
					<input {
						...register("fullName", {required: true})
					} 
                    required
					className=' w-full bg-transparent outline-0 text-[#616A8B]' placeholder='Full Name' type="text" />
				</div>
                <div className=" w-full py-[11px] px-[16px] flex gap-[10px] items-center bg-[#2E3558] rounded-lg" >
					<FaRegUserCircle size={30}/>
					<input {
						...register("login", {required: true})
					} 
                    required
					className=' w-full bg-transparent outline-0 text-[#616A8B]' placeholder='E-mail or login' type="text" />
				</div>
				<div className=" w-full py-[11px] px-[16px] flex gap-[10px] items-center bg-[#2E3558] rounded-lg" >
					<IoIosLock size={30}/>
					<input {
						...register("password", {required: true})
					} 
                    required
					className=' w-full bg-transparent outline-0 text-[#616A8B]' placeholder='Password' type={show ? "text" : "password"} />
					{
						show ? <IoEyeOff className=' cursor-pointer' size={30} onClick={handleShow}/> : <IoEye className=' cursor-pointer' size={30} onClick={handleShow}/>
					}
				</div>
			</div>
			<div className="btns flex gap-[32px]">
				<Button type='submit' variant="contained"  >Sing Up</Button>
				<Button onClick={() => setSign(!sign)} variant="contained" sx={{backgroundColor: 'gray'}}>Sing In</Button>
			</div>
			<span className='text-[#5FB2FF] underline decoration-solid'>Forgot your password?</span>
			<Toaster/>
		</form>
	);
}

export default RegisterForm