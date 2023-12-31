import React, { useEffect, useState } from 'react'
import { GrProjects } from 'react-icons/gr';
import { NavLink } from 'react-router-dom';
import Testimonals from './Testimonals';
import Projects from './Projects';
import MainPhoto from '../assets/logo.jpeg'
import Button from '../Components/Button';
import { BsInstagram } from 'react-icons/bs';
import { FiGithub } from 'react-icons/fi';
import { FaFacebookSquare } from 'react-icons/fa';
const Home = () => {
    const time = new Date().toLocaleTimeString();
    const [cTime, SetCTime] = useState(time);
    const UpdateTime = () => {
        const time = new Date().toLocaleTimeString();
        SetCTime(time)

    }
    // useEffect(() => {
    //     const interval = setInterval(() => {
    //         SetTime(new Date())
    //     }, 1000)

    // })
    setInterval(UpdateTime, 1000)
    var i = 0;




    const Loader = () => {
        i++;
        console.log(i);

    }
    setInterval(Loader, 100);

    return (
        <div className='pt-24 w-screen flex justify-center h-full pb-10 bg-primary dark:bg-bg-dark'>
            {/* intro */}
            <div className='flex flex-col w-full items-center '>
                <div className='absolute text-xs text-text-secondary dark:text-text-tertiary top-52 left-0 -rotate-90'>{time}</div>
                <div className='flex flex-col absolute lg:text-lg text-text-secondary dark:text-text-tertiary top-32 right-5 l:right-10  gap-10 '>
                    <a href="https://www.instagram.com/poudelsanchit/" target='_blank'><BsInstagram className='cursor-pointer' /></a>
                    <a href="https://www.facebook.com/snchtpdl12/" target='_blank'><FaFacebookSquare className='cursor-pointer' /></a>
                    <a href="https://github.com/poudelsanchit/" target='_blank'><FiGithub className='cursor-pointer' /></a>
                </div>

                <div className='flex w-4/5 flex-col items-center md:flex-row'>
                    <div className="flex flex-row gap-5 w-4/5 md:order-2">
                        <img src={MainPhoto} alt="" className='rounded-md w-4/5' />
                    </div>
                    <div className='w-full md:order-1'>
                        <div className="text-3xl w-full pt-5 md:text-5xl text-box dark:text-white">Hi,<br /> I'm Sanchit Poudel</div>
                        <div className='flex flex-row w-full gap-3 pt-5'>
                            <div className='pt-1'>
                                <div className='flex flex-col items-center'>
                                    <div className=' w-4 h-4 rounded-full bg-button-hover'></div>
                                    <div className='block w-0.5 h-12 bg-button-hover'></div>
                                </div>
                                <div className='flex flex-col items-center'>
                                    <div className=' w-4 h-4 rounded-full bg-button-hover'></div>
                                    <div className='block w-0.5 h-12 bg-button-hover'></div>
                                </div>
                                <div className='flex flex-col items-center'>
                                    <div className=' w-4 h-4 rounded-full bg-button-hover'></div>
                                </div>
                            </div>
                            <div className='w-full'>
                                <div className="flex  justify-start  text w-4/5 text-text-secondary dark:text-text-tertiary">Software Engineer </div>

                                <div className="flex  justify-start text w-4/5 pt-10 text-text-secondary dark:text-text-tertiary">Frontend Developer </div>
                                <div className="flex  justify-start text w-4/5 pt-10 text-text-secondary  dark:text-text-tertiary">Problem Solver </div>
                            </div>


                        </div>
                        <div className="see-my-works w-4/5 pt-5">
                            <NavLink to={'/projects'}>
                                <Button button_text={'see my works'} />
                            </NavLink>

                        </div>

                    </div>

                </div>





                {/* about */}
                <div className='pt-32 flex flex-col justify-center  w-4/5 '>
                    <div className='flex flex-col items-center text-xs text-text-secondary dark:text-text-tertiary md:items-start '>Let me introduce myself</div>
                    <div className='flex flex-col items-center text-4xl w-full  justify-center font-Montserrat font-bold pt-2 md:justify-start md:items-start text-box dark:text-primary'>ABOUT ME</div>
                    <div className='gap-5 md:flex'>
                        <div className='md:w-6/7'>
                            <div className='flex flex-col items-start  text-text-secondary dark:text-text-tertiary text-sm  pt-3'>I'm a Frontend Developer currently studying software enginnering in Nepal. </div>
                            <div className='text-text-secondary dark:text-text-tertiary text-sm  pt-3'>Fast forward to 2023 and I’ve tried it all, from HTML/CSS to React,Tailwind. Everything I have done, small or big, has been a vital stepping stone for where I am today</div>
                        </div>

                        <div className=" flex flex-col w-full items-center pt-5">
                            <NavLink to={'/about'}><button className='w-max px-16 py-3 border-bg-secondary2 bg-bg-secondary2 dark:bg-none  border-solid border-2 rounded-md hover:bg-button-hover'>
                                <p className='text-white'>Read more   </p>

                            </button></NavLink>
                        </div>
                    </div>


                    {/*
                    <div className='text-text-tertiary text-sm  pt-3'>What excites me most about working in software development is being able to design and create things that have purpose and solve real problems. Leaning into customer research and insight, finding the right problems to solve, delivering that value as quickly as possible, learning from it and then iterating and improving that value over time is the key to great design. </div> */}
                </div>
                <Projects />

                <Testimonals />

                <div className=' flex flex-col bg-box w-11/12  lg:w-2/5 mt-36 items-center rounded-lg p-5 gap-2'>
                    <div className='text-sm text-text-tertiary'>Have a  project in mind?</div>
                    <div className='text-2xl font-extrabold text-text-tertiary'>Let me help you</div>
                    <NavLink to={'/contact'}>
                        <Button button_text={'Contact Me'} />
                    </NavLink>
                </div>
                <br />
            </div>



        </div >
    )
}

export default Home