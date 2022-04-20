import type { GetStaticProps, NextPage } from 'next'
import Head from 'next/head'

import Card from '../components/card'
import News from '../components/news'
import { NavItem, VideoItem, NewsItem, CardIdiom } from '../lib/types'
import { contentOne, contentTwo, contentBerita, contentVideo } from '../lib/data'
import dynamic from 'next/dynamic'
import Navbar from '../components/navbar'
import Image from 'next/image'
import TimeAgo from 'javascript-time-ago'

import en from 'javascript-time-ago/locale/en.json'
import id from 'javascript-time-ago/locale/id.json'
import Link from 'next/link'

TimeAgo.addDefaultLocale(en)
TimeAgo.addLocale(id)

type Props = {
  navItem: NavItem;
  videoItem: VideoItem[];
  newsItem: NewsItem[];
  cardIdiom: CardIdiom[];
}

const Home: NextPage<Props> = ({ navItem, videoItem, newsItem, cardIdiom }) => {
  const Player = dynamic(() => import('../components/video'))
  const Maps = dynamic(() => import('../components/maps'))
  return (
    <div className="flex flex-col">
      <Head>
        <title>Golkar Sarolangun</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/icon-golkar.ico" />
      </Head>

      <main className="flex flex-col">
        <div className='2xl:hidden z-50 sticky top-0'>
          <Navbar nav-items={navItem['nav-items']} />
        </div>
        <section className='w-full h-[52vh] sm:h-[72vh] md:h-[86vh] lg:h-[90vh] xl:h-[110vh] bg-golkar 2xl:bg-cover bg-contain bg-no-repeat 2xl:bg-center 2xl:bg-fixed z-10'>
          <div className='hidden 2xl:block mt-6 z-50'>
            <Navbar nav-items={navItem['nav-items']} />
          </div>
          <section className='flex flex-col py-10 px-10'>
            <div className='flex flex-row justify-around'>
              <div className="basis-1/2 font-sans sm:mt-12">
                <span className='text-center text-2xl sm:text-3xl md:text-5xl lg:text-7xl xl:text-9xl'>
                  <h1>Golkar Sarolangun</h1>
                </span>
		<span className="text-center text-xs sm:text-md 2xl:text-2xl mt-6 sm:font-bold cursor-pointer">
                <Link href='#'><button className="w-full h-10 px-3 text-gray-100 transition-colors duration-150 bg-gray-700 rounded-lg focus:shadow-outline hover:bg-gray-800">
		Bergabung Menjadi Anggota
		</button></Link>
		</span>
              </div>
              <div className='basis-1/2'></div>
            </div>
            <div className='flex flex-col self-center mt-24 sm:mt-64 md:mt-80 lg:mt-96 xl:mt-[50vh] 2xl:mt-48 xs:mt-48'>
              <div className='flex w-72 self-center'>
                <div className='bg-local w-full'><Image src={contentOne['image-kita-satu']} alt='kita-satu' height='25' width='100%' layout='responsive' objectFit='contain' className="-z-10" /></div>
              </div>
              <p className='text-center text-xs sm:text-sm w-[35vh] xs:w-[40vh] sm:w-[50vh] mt-5'>
                {contentOne.description}
              </p>
            </div>
          </section>
        </section>

        <section className='xl:bg-golkar-grey bg-contain bg-no-repeat bg-center xl:h-[450px] bg-none w-full p-0 m-0 sm:px-10 mt-10 z-0'>
          <div className='bg-white bg-opacity-75'>
            <div className='grid grid-cols-1 sm:grid-cols-1 md:grid-cols-1 lg:grid-cols-1 xl:grid-cols-2 gap-0 p-2 sm:p-0'>
              {cardIdiom.map((item, i) => <Card key={i} payload={item} index={i} />)}
            </div>
          </div>
        </section>

        <section className='flex flex-col sm:p-10'>
          <div className='text-left text-2xl sm:text-3xl md:text4xl lg:text-5xl pl-4 xl:mt-10'>Berita</div>
          <div className='text-right text-md lg:text-xl text-cyan-400 pr-4 my-5'>Lihat Semua</div>
          <div className='grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-4 gap-5 p-2'>
            {newsItem.map((value, i) => <News key={i} payload={value} />)}
          </div>
        </section>

        <section className='2xl:p-20'>
          <div className='2xl:bg-golkar-video 2xl:h-[1000px] bg-contain bg-center md:flex md:flex-col md:items-center md:self-center'>
            <div className='text-center text-2xl sm:text-3xl md:text4xl lg:text-5xl 2xl:pt-20 pb-10'>
              <div className='sm:mt-10'>Mars & Hymne</div>
              <div className=''>Partai Golkar</div>
            </div>
            <div className='flex flex-col xl:flex-row p-4 2xl:px-36'>
              {videoItem.map((value, i) => <Player key={i} payload={value} />)}
            </div>
          </div>
        </section>

        <section className='flex flex-col 2xl:px-20 py-10'>
          <div className='text-center text-2xl sm:text-3xl md:text4xl lg:text-5xl'>
            <div className='mb-10'>Hubungi Kami</div>
          </div>
          <div id="map" className='h-[50vh] lg:h-[60vh]'>
            <Maps />
          </div>
          <div className='flex flex-col md:flex-row lg:mt-10 md:p-20 mt-2 p-4 w-full'>
            <div className='basis-1/2 flex flex-row lg:justify-around justify-evenly lg:px-5 py-2'>
              <div className='cursor-pointer'>
                <Link href='https://www.facebook.com/mpogolkarsarolangun'>
                  <a>
                    <div className='h-12 w-12 md:h-16 md:w-16 lg:h-24 lg:w-24'>
                      <Image src="/facebook.svg" className='bg-cover rounded-full' alt='fb' height='100' width='100' objectFit='contain' />
                    </div>
                  </a>
                </Link>
              </div>
              <div className=' cursor-pointer '>
                <Link href='#'>
                  <a>
                    <div className='h-12 w-12 md:h-16 md:w-16 lg:h-24 lg:w-24'><Image src="/youtube.svg" className='bg-cover rounded-full' alt='yt' height='100' width='100' objectFit='contain' /></div>
                  </a>
                </Link>
              </div>
              <div className=' cursor-pointer'>
                <Link href='https://www.instagram.com/golkar.sarolangun'>
                  <a>
                    <div className='h-12 w-12 md:h-16 md:w-16 lg:h-24 lg:w-24'><Image src="/instagram.svg" className='bg-cover rounded-full' alt='ig' height='100' width='100' objectFit='contain' /></div>
                  </a>
                </Link>
              </div>
            </div>
            <div className='basis-1/2 justify-center self-center md:pl-20 p-4'>
              <div className=' cursor-pointer'>
                <Link href="https://wa.me/081379693637?text=Hello Saya ingin bertanya ?">
                  <a>
                    <div className='flex flex-row bg-slate-200 rounded-full w-[34vh] sm:w-[26vh] md:w-[36vh] lg:w-[47vh] hover:drop-shadow-lg'>
                      <div className='h-12 w-12 md:h-16 md:w-16 lg:h-24 lg:w-24'><Image src="/whatsapp.svg" className='bg-cover rounded-full' alt='wa' height='100' width='100' objectFit='contain' /></div>
                      <div className='ml-4 text-sm sm:text-xl md:text-3xl lg:text-5xl self-center'>
                        081379693637
                      </div>
                    </div>
                  </a>
                </Link>
              </div>
            </div>
          </div>
        </section>

      </main>

      <footer className='flex justify-center bg-footer bg-cover bg-center h-20'>
        <hr className='my-5 border-t-1' />
        <div className='self-center'>© 2022 Partai Golkar Sarolangun, All right reserved.</div>
      </footer>
    </div>
  )
}

export const getStaticProps: GetStaticProps<Props> = async () => {
  const navItem = contentOne;
  const videoItem = contentVideo;
  const cardIdiom = contentTwo;
  const newsItem = contentBerita;
  return {
    props: {
      navItem,
      videoItem,
      cardIdiom,
      newsItem
    }
  };
};

export default Home
