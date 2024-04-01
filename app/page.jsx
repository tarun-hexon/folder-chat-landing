'use client'
import folderchat from '@/public/assets/folderchat.png'
import checkIcon from '@/public/assets/Use_Checkmark.svg';
import Link from 'next/link';
import Image from "next/image"
import { BackgroundGradient } from "@/components/ui/background-gradient"
import { TypewriterEffect } from "@/components/ui/typewriter-effect";
import { Spotlight } from "@/components/ui/Spotlight";
import { Button } from "@/components/ui/button";
import { BorderButton } from "@/components/ui/moving-border";
import { ImagesSlider } from "@/components/ui/images-slider";
import { FloatingNav } from "@/components/ui/floating-navbar";
import { BackgroundBeams } from '@/components/ui/background-beams'
import { cn } from "@/lib/utils"
import { ArrowRight } from 'lucide-react';
import StarCanvas from '@/components/ui/Stars';



export default function Home() {


  const navItems = [
    {
      name: "Features",
      link: "#features",
    },
    {
      name: "Pricing",
      link: "/pricing",
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
      name: 'Free Plan',
      price: 'Free',
      limits: [
        'Up to 3 documents per folder; maximum of 3 folders per user.',
        'Maximum of 10MB per file.',
        '.pdf only; no integration with data connectors.',
        'Up to 1,000 messages per month across folders.'
      ]
    },
    {
      name: 'Starter Plan',
      price: '$10/user/month, $100 annually.',
      limits: [
        'Up to 5 documents per folder; maximum of 10 folders per user.',
        'Maximum of 25MB per file.',
        '.pdf only; Includes GitHub and Google Drive integrations.',
        'Up to 1,000 messages per folder per month.'
      ]
    },
    {
      name: 'Enterprise Plan',
      price: 'Contact Us',
      limits: [
        'Option for self-hosting with a custom LLM on your own cloud infrastructure.',
        'No document and folder limits',
        'No file size limit.',
        'Integrations include everything in Starter + Slack, Jira, and Confluence.',
        'Unlimited messaging.',
        'API access to folders.',
        'Finetuned Embedding Model',
        'Finetuned LLM Model',
        'Custom Chunking Strategy'
      ]
    }
  ];

  const images = [
    '/assets/signup-new.png',
    '/assets/indexing.png',
    '/assets/upload-new.png',
    '/assets/folderchat-new.png',
    '/assets/githubSS.png',
  ];

  return (
      <div className="flex flex-col min-h-[100dvh] bg-transparent text-white flex-wrap m-0 z-50">
        <FloatingNav navItems={navItems} className="text-white bg-zinc-800 h-16 hidden sm:flex"/>
        
        <main className="flex-1 lg:mt-10 mt-16 space-y-10">
          <section className="w-full py-5 md:py-8 lg:py-12 xl:py-20" id="about">
            <div className="container flex flex-col flex-wrap items-center justify-center space-y-12 px-4 md:px-6">
              <div className="text-center space-y-4">
                <Spotlight
                  className="-top-20 left-0 md:left-60 md:top-20"
                  fill="white"
                />
                <TypewriterEffect words={[{ text: 'Transform', className: "text-4xl font-bold sm:text-5xl md:text-6xl/none text-[#ffffff]" }, { text: 'your', className: "text-4xl font-bold sm:text-5xl md:text-6xl/none text-[#ffffff]" }, { text: 'Documents', className: "text-4xl font-bold sm:text-5xl md:text-6xl/none text-[#ffffff]" }, { text: 'into', className: "text-4xl font-bold sm:text-5xl md:text-6xl/none text-[#ffffff]" }, { text: 'Conversations.', className: "text-4xl font-bold sm:text-5xl md:text-6xl/none text-[#ffffff]" }]} className="h-40 md:h-48 lg:h-40"/>

                <p className="mx-auto max-w-[600px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
                  Chat with your internal documents. Collaborate with your team. Connect with your systems.
                </p>
              </div>
              
              <div className="mx-auto w-full space-y-2 flex flex-col justify-center items-center gap-4 flex-wrap" >
                <a href={'https://demo.folder.chat/auth/signup'} target="_blank">
                  <BorderButton
                    className="rounded-[1.75rem] text-xl w-full font-[600] space-x-2"
                    duration={4000}
                  ><span>Try for Free</span> <ArrowRight /></BorderButton></a>
              </div>
              {/* <div className='bg-white rounded-tl-[1.5rem] rounded-br-[1.5rem]'>
                <Image 
                src={'/assets/Aws.png'}
                alt="Aws Marketplace"
                className="m-auto rounded-md"
                height={200}
                width={200}
                />
              </div> */}
              <ImagesSlider
                images={images}
                className={cn('lg:h-[24rem] lg:w-[50rem] sm:h-[22rem] sm:w-[32rem] md:w-[36rem] h-[11rem] w-80')}
              />
              
            </div>
          </section>
          <section className="w-full py-5 md:py-8 lg:py-16 xl:py-2" id="features">
            <div className="w-full flex justify-around items-center px-4 md:px-6 flex-wrap flex-col lg:flex-row text-center gap-6 lg:gap-2">
              <div className="w-full lg:w-[40%] space-y-10">
                <h2 className="text-3xl font-bold sm:text-4xl xl:text-5xl/none text-[#ffffff]">
                Connect and Collaborate
                </h2>
                <p className="max-w-full text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
                Folder.Chat revolutionizes communication by allowing you to chat directly within your internal documents or seamlessly connect with your existing systems to enable chat functionality.
                </p>
              </div>
              <div className="w-fit lg:w-1/2 z-0">
                <div className="sm:m-auto lg:m-0 w-fit">
                <Image
                  alt="Image"
                  className="rounded-md z-50 lg:w-full lg:h-full w-72 h-40"
                  height={400}
                  src={'/assets/indexing.png'}
                  width={400}
                />
                <Image
                  alt="Image"
                  className="lg:-mt-24 lg:ml-24 rounded-lg w-72 h-40 lg:w-full lg:h-full -mt-14 ml-8"
                  height={450}
                  src={'/assets/folderchat-new.png'}
                  width={400}
                />
                </div>
              </div>
            </div>
          </section>
          <section className="w-full py-5 md:py-8 lg:py-16 xl:py-24">
            <div className="w-full flex lg:flex-row-reverse justify-around items-center px-4 md:px-6 flex-wrap flex-col text-center gap-6 lg:gap-0">
              <div className="w-full lg:w-[40%] space-y-10">
                <h2 className="text-3xl font-bold sm:text-4xl xl:text-5xl/none text-[#ffffff]">
                Seamless Integration
                </h2>
                <p className="max-w-full text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
                With folder.chat, you can bring chat directly into your existing workflow. Whether you&apos;re using Github, Jira, Slack, or your own custom tools, folder.chat makes it easy to connect and collaborate.
                </p>
              </div>
              <div className="w-full lg:w-1/2">
                <Image
                  alt="Image"
                  className="m-auto"
                  height={400}
                  src={'/assets/integrations.png'}
                  width={400}
                />
              </div>
            </div>
          </section>
          <section className="w-full py-5 md:py-8 lg:py-16 xl:py-24">
            <div className="w-full flex justify-around items-center px-4 md:px-6 flex-wrap flex-col lg:flex-row text-center gap-6 lg:gap-0">
              <div className="w-full lg:w-[40%] space-y-10">
                <h2 className="text-3xl font-bold sm:text-4xl xl:text-5xl/none text-[#ffffff]">
                  Integrated Chat
                </h2>
                <p className="max-w-full text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
                Chat directly within your internal documents or seamlessly connect with your datasources to enable chat functionality.
                </p>
              </div>
              <div className="w-full lg:w-1/2">
                <Image
                  alt="Image"
                  className="m-auto rounded-md"
                  height={500}
                  src={'/assets/githubSS.png'}
                  width={580}
                />
              </div>
            </div>
          </section>
          <section className="w-full py-5 md:py-8 lg:py-16 xl:py-24">
            <div className="w-full flex lg:flex-row-reverse justify-around items-center px-4 md:px-6 flex-wrap flex-col text-center gap-6 lg:gap-0">
              <div className="w-full lg:w-[40%] space-y-10">
                <h2 className="text-3xl font-bold sm:text-4xl xl:text-5xl/none text-[#ffffff]">
                  The Platform for Conversational Documents
                </h2>
                <p className="max-w-full text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
                  Folder.Chat allows you to turn your documents into conversations. Simply upload your files, and you can
                  start discussing the content with your team. No more switching between apps. The conversation is
                  integrated with the document.
                </p>
              </div>
              <div className="w-fit lg:w-1/2 z-0">
                <div className="sm:m-auto lg:m-0 w-fit">
                <Image
                  alt="Image"
                  className="rounded-md z-50 lg:w-full lg:h-full w-72 h-40"
                  height={400}
                  src={'/assets/upload-new.png'}
                  width={400}
                />
                <Image
                  alt="Image"
                  className="lg:-mt-24 lg:ml-24 rounded-lg w-72 h-40 lg:w-full lg:h-full -mt-14 ml-8"
                  height={450}
                  src={'/assets/webSS.png'}
                  width={400}
                />
                </div>
              </div>
            </div>
          </section>
          
        </main>
        
        
      </div>
      
      
  )
}