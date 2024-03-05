'use client'
import Link from "next/link"
import logo from '@/public/assets/favicon.svg'
import folderchat from '@/public/assets/folderchat.png'
import Signup from '@/public/assets/signup.png'
import indexing from '@/public/assets/indexing.png'
import Web from '@/public/assets/web.png'
import file from '@/public/assets/files.png'
import github from '@/public/assets/github.png'
import confluence from '@/public/assets/confluence.png'
import drive from '@/public/assets/drive.png'
import checkIcon from '@/public/assets/Use_Checkmark.svg';
import Image from "next/image"
import { BackgroundGradient } from "@/components/ui/background-gradient"
import { TypewriterEffect } from "@/components/ui/typewriter-effect";
import { Spotlight } from "@/components/ui/Spotlight";
import { Card, CardContent } from "@/components/ui/card"
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { Button } from "@/components/ui/moving-border";
import { ImagesSlider } from "@/components/ui/images-slider";
import { FloatingNav } from "@/components/ui/floating-navbar";
import { BackgroundBeams } from '@/components/ui/background-beams'

export default function Home() {

  const navItems = [
    {
      name: "Features",
      link: "#features",
    },
    {
      name: "Pricing",
      link: "#pricing",
    },
    {
      name: "About",
      link: "#about",
    },
    {
      name: "Contact",
      link: "#contact",
    }
    
  ];

  const plans = [
    {
      name: 'Free',
      price: '$0',
      limits: [
        'Upto 3 PDFs',
        '5 MB / PDF',
        'Chat with 1 PDF at a time',
        '10 messages / month'
      ]
    },
    {
      name: 'Basic',
      price: '$5',
      limits: [
        'Upto 25 PDFs',
        '16 MB / PDF',
        'Chat with 1 PDF at a time',
        '500 messages / month'
      ]
    },
    {
      name: 'Enterprise',
      price: 'Contact Us',
      limits: [
        'Upto 25 PDF/DOCX/TXT/CSV per day',
        '32 MB / PDF',
        'Chat with 3 PDFs at a time',
        '1000 questions / month'
      ]
    }
  ];

  const caraouselImages = [
    Signup,
    indexing,
    folderchat,
  ]

  const images = [
    '/assets/signup.png',
    '/assets/indexing.png',
    '/assets/upload.png',
    '/assets/folderchat.png',
  ];

  return (
      <div className="flex flex-col min-h-[100dvh] bg-transparent text-white flex-wrap m-0 z-50">
        <FloatingNav navItems={navItems} className="text-white bg-black h-16"/>
        <header className="px-4 lg:px-6 h-14 flex items-center text-[#00dcc3] font-Inter">
          <Link className="flex items-center justify-center" href="#">
            <Image src={'/assets/favicon.svg'} alt="folder.chat" width={30} height={30}/>
          </Link>
          <nav className="ml-auto flex gap-4 sm:gap-6">
            <Link className="text-sm font-medium hover:underline underline-offset-4 duration-200" href="#feature">
              Features
            </Link>
            <Link className="text-sm font-medium hover:underline underline-offset-4 duration-200" href="#pricing">
              Pricing
            </Link>
            <Link className="text-sm font-medium hover:underline underline-offset-4 duration-200" href="#about">
              About
            </Link>
            <a className="text-sm font-medium hover:underline underline-offset-4 duration-200" href="mailto:info@hexonlabs.com">
              Contact
            </a>
          </nav>
        </header>
        <main className="flex-1">
          <section className="w-full py-5 md:py-8 lg:py-16 xl:py-24" id="about">
            <div className="container flex flex-col flex-wrap items-center justify-center space-y-12 px-4 md:px-6">
              <div className="text-center space-y-4">
                <Spotlight
                  className="-top-20 left-0 md:left-60 md:top-20"
                  fill="white"
                />
                <TypewriterEffect words={[{ text: 'Transform', className: "text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl/none text-[#00dcc3]" }, { text: 'Your', className: "text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl/none text-[#00dcc3]" }, { text: 'Documents', className: "text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl/none text-[#00dcc3]" }, { text: 'into', className: "text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl/none text-[#00dcc3]" }, { text: 'Conversations.', className: "text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl/none text-[#00dcc3]" }]} className="h-40"/>

                <p className="mx-auto max-w-[600px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
                  Chat with your internal documents. Collaborate with your team. Connect with your systems.
                </p>
              </div>
              <div className="mx-auto w-full space-y-2 flex flex-col justify-center items-center gap-4 flex-wrap" >
                <a href={'https://demo.folder.chat/auth/signup'} target="_blank">
                  <Button
                    className="rounded-[1.75rem] text-xl w-full font-[600]"
                  >Try For Free</Button></a>
              </div>
              <ImagesSlider images={images} className="h-[30rem] w-[80%]" />
            </div>
          </section>
          <section className="w-full py-5 md:py-8 lg:py-16 xl:py-24" id="feature">
            <div className="w-full flex justify-around items-center px-4 md:px-6 flex-wrap flex-col lg:flex-row text-center gap-6 lg:gap-0">
              <div className="w-full lg:w-1/2 space-y-10">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl xl:text-5xl/none text-[#00dcc3]">
                Connect and Collaborate
                </h2>
                <p className="max-w-full text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
                folder.chat revolutionizes communication by allowing you to chat directly within your internal documents or seamlessly connect with your existing systems to enable chat functionality.
                </p>
              </div>
              <div className="w-full lg:w-1/2">
                <Image
                  alt="Image"
                  className="m-auto rounded-md"
                  height={450}
                  src={'/assets/upload.png'}
                  width={450}
                />
              </div>
            </div>
          </section>
          <section className="w-full py-5 md:py-8 lg:py-10 xl:py-16">
            <div className="w-full flex lg:flex-row-reverse justify-around items-center px-4 md:px-6 flex-wrap flex-col text-center gap-6 lg:gap-0">
              <div className="w-full lg:w-1/2 space-y-10">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl xl:text-5xl/none text-[#00dcc3]">
                Seamless Integration
                </h2>
                <p className="max-w-full text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
                With folder.chat, you can bring chat directly into your existing workflow. Whether you&apos;re using Github, Confluence, Slack, or your own custom tools, folder.chat makes it easy to connect and collaborate.
                </p>
              </div>
              <div className="w-full lg:w-1/2">
                <Image
                  alt="Image"
                  className="m-auto"
                  height={400}
                  src={'/assets/connectors.png'}
                  width={400}
                />
              </div>
            </div>
          </section>
          <section className="w-full py-5 md:py-8 lg:py-16 xl:py-24">
            <div className="w-full flex justify-around items-center px-4 md:px-6 flex-wrap flex-col lg:flex-row text-center gap-6 lg:gap-0">
              <div className="w-full lg:w-1/2 space-y-10">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl xl:text-5xl/none text-[#00dcc3]">
                  Integrated Chat
                </h2>
                <p className="max-w-full text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
                Chat directly within your internal documents or seamlessly connect with your existing systems to enable chat functionality.
                </p>
              </div>
              <div className="w-full lg:w-1/2">
                <Image
                  alt="Image"
                  className="m-auto rounded-md"
                  height={450}
                  src={folderchat}
                  width={450}
                />
                
              </div>
            </div>
          </section>
          <section className="w-full py-5 md:py-8 lg:py-16 xl:py-24">
            <div className="w-full flex lg:flex-row-reverse justify-around items-center px-4 md:px-6 flex-wrap flex-col text-center gap-6 lg:gap-0">
              <div className="w-full lg:w-1/2 space-y-10">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl xl:text-5xl/none text-[#00dcc3]">
                  The Platform for Conversational Documents
                </h2>
                <p className="max-w-full text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
                  Folder.Chat allows you to turn your documents into conversations. Simply upload your files, and you can
                  start discussing the content with your team. No more switching between apps. The conversation is
                  integrated with the document.
                </p>
              </div>
              <div className="w-full lg:w-1/2 z-0">
                <div className="m-auto w-fit">
                <Image
                  alt="Image"
                  className="rounded-md z-50"
                  height={400}
                  src={'/assets/upload.png'}
                  width={400}
                />
                <Image
                  alt="Image"
                  className="-mt-10 ml-20 rounded-lg"
                  height={400}
                  src={folderchat}
                  width={400}
                />
                </div>
              </div>
            </div>
          </section>
          <section className="w-full py-5 md:py-8 lg:py-16 xl:py-24" id="pricing">
            <div className="w-full flex flex-col items-center justify-center gap-4 px-4 text-center md:px-6 space-y-5 flex-wrap">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Pricing</h2>
              <div className="w-full flex gap-10 justify-center items-center flex-wrap">
                {plans.map((plan, idx) => {
                  return <BackgroundGradient key={idx} className="lg:min-w-[28vw] min-w-[90vw] text-justify py-1 rounded-[22px] p-4 sm:p-10 bg-black space-y-8">
                  <div className="space-y-4">
                    <div className="overflow-hidden p-4 space-y-4">
                      <h2 className="w-fit px-2 py-1 bg-[#14B8A6] rounded-md text-xl">{plan.name}</h2>
                      <div>
                        <span className="text-3xl ">{plan.price}</span>
                        <span>{plan.name !== 'Enterprise' && '/ Month'}</span>
                      </div>
                      <div className="flex flex-col gap-2">
                        {plan?.limits?.map((limit, idx) => {
                          return <p key={idx} className='font-[500] text-[12px] leading-5 inline-flex items-center gap-2'>
                            <Image src={checkIcon} alt='check' width={30} height={30} />
                            <span>{limit}</span>
                          </p>
                        })}
                      </div>
                    </div>
                    <div className="w-full flex justify-center items-center">
                        <Button>Get Started</Button>                    
                    </div>
                  </div>
                  </BackgroundGradient>
                })}
              </div>

            </div>
          </section>

          
        </main>
        <footer className="flex flex-col gap-2 sm:flex-row py-6 w-full shrink-0 items-center px-4 md:px-6 border-t flex-wrap">
          <p className="text-xs">© 2024 Hexon Labs. All rights reserved.</p>
          <nav className="sm:ml-auto flex gap-4 sm:gap-6">
            <a className="text-xs hover:underline underline-offset-4" href="https://www.hexonlabs.com/terms-conditions" target="_blank">
              Terms of Service
            </a>
            <a className="text-xs hover:underline underline-offset-4" href="https://www.hexonlabs.com/privacy-policy" target="_blank">
              Privacy
            </a>
          </nav>
        </footer>
        <BackgroundBeams className="-z-10 fixed h-full w-full"/>
      </div>
      
      
  )
}