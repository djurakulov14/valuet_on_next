import { Button } from '@mui/material';
import React, { useEffect, useLayoutEffect, useState } from 'react';
import { useForm } from 'react-hook-form';
import { FaRegUserCircle } from "react-icons/fa";
import { IoIosLock } from "react-icons/io";
import { IoEyeOff } from "react-icons/io5";
import { IoEye } from "react-icons/io5";
import { useHttp } from '../Hooks/http.hook';
import toast, { Toaster } from 'react-hot-toast';
import { useRouter } from 'next/router';

function LoginForm({sign, setSign}) {
	const [show, setShow] = useState(false)
    const {register, formState: {erros}, handleSubmit, watch} = useForm()
	const router = useRouter()
	const [users, setUsers] = useState([])
	const {request} = useHttp()
	const nameRegex = /^[А-Яа-яA-Za-z\s-]+$/; // Имя, Фамилия, Отчество: только буквы и пробелы
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/; // Email: базовая проверка
	const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*])[A-Za-z\d!@#$%^&*]{8,}$/;

	useEffect(() => {
        request(
			"http://localhost:7777/users",
			"GET",
		).then((res) => {
			setUsers(res);
		});
    }, [])

	const notify = (msg) => toast(msg);


    const submit = (data) => {

		let user = users.filter(item => item.login === data.login && item.password === data.password)
		if(user.length != 0) {
			notify("succes")
			localStorage.setItem("user", JSON.stringify(user[0]))
			router.push('/')
			console.log("sd");
			
		} else {
			notify("incorrect details")
			console.log("sd");
s
			
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
						...register("login", {required: true})
					} 
					required
					error={ erros?.login ? "Fill the input correctly" : ''}
					className=' w-full bg-transparent outline-0' placeholder='E-mail' type="text" />
				</div>
				<div className=" w-full py-[11px] px-[16px] flex gap-[10px] items-center bg-[#2E3558] rounded-lg" >
					<IoIosLock size={30}/>
					<input {
						...register("password", {required: true})
					} 
					required
					error={ erros?.password ? "Fill the input correctly" : ''}
					className=' w-full bg-transparent outline-0' placeholder='Password' type={show ? "text" : "password"} />
					{
						show ? <IoEyeOff className=' cursor-pointer' size={30} onClick={handleShow}/> : <IoEye className=' cursor-pointer' size={30} onClick={handleShow}/>
					}
				</div>
			</div>
			<div className="btns flex gap-[32px]">
				<Button onClick={() => setSign(!sign)} variant="contained" sx={{backgroundColor: 'gray'}} >Sing Up</Button>
				<Button type='submit' variant="contained">Sing In</Button>
			</div>
			<span className='text-[#5FB2FF] underline decoration-solid'>Forgot your password?</span>
			<Toaster/>
		</form>
	);
}

export default LoginForm;
