import { Container } from '@/components/ui/Container'
import Image from 'next/image'

import Champion from '@/public/badges/champion.svg'
import Gold3 from '@/public/badges/gold3.svg'
import Silver3 from '@/public/badges/silver3.svg'
import Diamond2 from '@/public/badges/diamond2.svg'
import { TabsContainer } from '@/components/TabsContainer'

export default function Dashboard() {
  return (
    <main className="w-full mt-12 max-sm:mt-6 flex justify-center items-center ">
      <div className="max-w-7xl flex h-screen w-full flex-col gap-6 max-sm:gap-3 ">
        <Container className="justify-between items-center max-xl:flex-col  ">
          <div className="flex items-center justify-start gap-6 max-xl:w-full ">
            <div>
              <Image
                src="https://github.com/revogabe.png"
                alt=""
                width={300}
                height={300}
                className="w-24 h-24 min-w-max rounded-xl max-sm:w-16 max-sm:h-16"
              />
            </div>
            <div className="flex flex-col items-start gap-3 justify-center">
              <div>
                <h1 className="text-2xl max-sm:text-xl">Daniel Gabriel</h1>
                <p className="text-sm text-base-11">Desenvolvedor Full-stack</p>
              </div>
              <div className="flex gap-2 ">
                <button className="px-3 py-1 text-xs text-base-12 rounded-full bg-base-4 font-normal">
                  #CARAMBA
                </button>
                <button className="px-3 py-1 text-xs text-base-12 rounded-full bg-base-4 font-normal">
                  #MANEIRO
                </button>
                <button className="px-3 py-1 text-xs text-base-12 rounded-full bg-base-4 font-normal">
                  #BOADEMAIS
                </button>
              </div>
            </div>
          </div>
          <div className="max-xl:hidden">
            <Container className="gap-0 w-full p-2 overflow-x-hidden ">
              <Image
                src={Champion}
                alt=""
                width={300}
                height={300}
                className="w-24 h-24 max-sm:w-16 max-sm:h-16 "
              />
              <Image
                src={Diamond2}
                alt=""
                width={300}
                height={300}
                className="w-24 h-24 max-sm:w-16 max-sm:h-16"
              />
              <Image
                src={Gold3}
                alt=""
                width={300}
                height={300}
                className="w-24 h-24 max-sm:w-16 max-sm:h-16"
              />
              <Image
                src={Silver3}
                alt=""
                width={300}
                height={300}
                className="w-24 h-24 max-sm:w-16 max-sm:h-16"
              />
            </Container>
          </div>
        </Container>
        <div className="flex w-full gap-6 max-sm:gap-3 items-center justify-between">
          <Container className="h-48 p-0 overflow-hidden">
            <Image
              src="https://images.unsplash.com/photo-1496449903678-68ddcb189a24?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80"
              alt=""
              className="object-cover w-full"
              width={300}
              height={300}
            />
          </Container>
          <Container className="h-48 p-0 overflow-hidden">
            <Image
              src="https://images.unsplash.com/photo-1496449903678-68ddcb189a24?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80"
              alt=""
              className="object-cover w-full"
              width={300}
              height={300}
            />
          </Container>
          <Container className="h-48 p-0 overflow-hidden max-lg:hidden">
            <Image
              src="https://images.unsplash.com/photo-1496449903678-68ddcb189a24?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80"
              alt=""
              className="object-cover w-full"
              width={300}
              height={300}
            />
          </Container>
        </div>
        <div className="w-full h-full flex items-center max-lg:flex-col justify-between gap-6 pb-8">
          <TabsContainer />
          <Container className="flex-1 px-24 h-full">
            <h1>Table</h1>
          </Container>
        </div>
      </div>
    </main>
  )
}
