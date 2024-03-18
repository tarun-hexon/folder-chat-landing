'use client'

import React from 'react'
import Link from 'next/link';
import { BackgroundGradient } from "@/components/ui/background-gradient"
import checkIcon from '@/public/assets/Use_Checkmark.svg';
import { Button } from "@/components/ui/button";
import Image from "next/image"


const Pricing = () => {


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


  return (
    <div className="flex flex-col min-h-[100dvh] bg-transparent text-white flex-wrap m-0 z-50">
      {/* <header className="px-4 lg:px-6 h-14 flex items-center text-[#00dcc3]">
          <Link className="flex items-center justify-center" href="/">
            <Image src={'/assets/favicon.svg'} alt="folder.chat" width={30} height={30}/>
          </Link>
          <nav className="ml-auto flex gap-4 sm:gap-6">
            <Link className="text-sm font-medium hover:underline underline-offset-4 duration-200" href="/">
              Home
            </Link>
            
            <a className="text-sm font-medium hover:underline underline-offset-4 duration-200" href="mailto:info@hexonlabs.com">
              Contact
            </a>
          </nav>
      </header> */}
    <section className="w-full py-5 md:py-8 lg:py-16 xl:py-16 h-full text-center space-y-10 text-white" id="pricing">
            <div className="w-full flex flex-col items-center justify-center gap-4 px-4 text-center md:px-6 space-y-5 flex-wrap">
              <h2 className="text-3xl font-bold sm:text-4xl md:text-5xl">Pricing</h2>
              <p className='text-center text-sm lg:w-[60%] py-5 w-[80%]'>Our pricing plans are designed to offer great value for your money, with options to suit businesses of all sizes. Explore our straightforward pricing tiers to find the perfect fit for your needs.</p>
              <div className="w-full flex gap-10 justify-center items-center flex-wrap">
                {plans.map((plan, idx) => {
                  return <BackgroundGradient key={idx} className="lg:max-w-[22rem] max-w-[24rem] h-fit text-justify py-1 rounded-[22px] sm:p-10 bg-black flex flex-col justify-between px-0">
                    <div className="overflow-hidden space-y-8 w-full p-4 lg:p-0">
                      <h2 className="w-fit font-[600] px-2 py-1 rounded-md text-2xl">{plan.name}</h2>
                      <Button variant={'outline'} className="text-black">{plan.name === 'Enterprise Plan' ? <a href="mailto:info@hexonlabs.com">Contact Us</a> : 'Get Started'}</Button> 
                      <div className="flex flex-col gap-4 min-h-fit lg:h-[22rem]">
                        {plan?.limits?.map((limit, idx) => {
                          return <p key={idx} className='font-[500] text-[12px] inline-flex items-center gap-2'>
                            <Image src={checkIcon} alt='check' width={30} height={30} />
                            <span className="w-full">{limit}</span>
                          </p>
                        })}
                        {plan.name !== 'Enterprise Plan' && 
                        <p className='font-[500] text-[12px] leading-5 inline-flex items-center gap-2'>
                            <Image src={checkIcon} alt='check' width={30} height={30} />
                            <span className="w-full">{plan.price}</span>
                          </p>}
                      </div>
                      
                    </div>
                  </BackgroundGradient>
                })}
              </div>

            </div>
            
    </section>
    </div>
  )
}

export default Pricing