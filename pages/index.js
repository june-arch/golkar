import Head from 'next/head'
import Card from './component/card'
import News from './component/news'
import Video from './component/video'
import Maps from './component/maps'
import { contentOne, contentTwo, contentBerita, contentVideo } from './utils/data'

const Home = ({contentOne, contentTwo, contentBerita, contentVideo}) => {
  
  return (
    <div className="flex flex-col">
      
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="flex flex-col">
         <section className='w-full h-screen bg-golkar bg-cover bg-center'>
          <nav className='flex flex-row py-10 px-6'>
              <div className='basis-1/12 flex justify-end self-center'>
                <span className='inset-y-0 right-0 border-r-2 border-white px-2'>
                  <img src='logo.png' alt='logo-golkar' className='bg-local w-14 h-14 mr-5'/>
                </span> 
              </div>
              <ol className='basis-1/2 flex flex-row justify-around uppercase font-sans text-slate-700 self-center'>
                {contentOne['nav-items'].map((value,i) => <li key={i}>{value}</li>)}
              </ol>
              <div className='basis-1/2 flex justify-around self-center'>
                <div className="xl:w-96 self-center">
                    <div className="flex flex-row w-full rounded">
                      <input type="search" className="form-control flex-auto min-w-0 block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none" placeholder="Search" aria-label="Search" aria-describedby="button-addon2" />
                      <span className="input-group-text flex items-center px-3 py-1.5 text-base font-normal text-gray-700 text-center whitespace-nowrap rounded" id="basic-addon2">
                        <svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="search" className="w-4" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
                          <path fill="currentColor" d="M505 442.7L405.3 343c-4.5-4.5-10.6-7-17-7H372c27.6-35.3 44-79.7 44-128C416 93.1 322.9 0 208 0S0 93.1 0 208s93.1 208 208 208c48.3 0 92.7-16.4 128-44v16.3c0 6.4 2.5 12.5 7 17l99.7 99.7c9.4 9.4 24.6 9.4 33.9 0l28.3-28.3c9.4-9.4 9.4-24.6.1-34zM208 336c-70.7 0-128-57.2-128-128 0-70.7 57.2-128 128-128 70.7 0 128 57.2 128 128 0 70.7-57.2 128-128 128z"></path>
                        </svg>
                      </span>
                    </div>
                  </div>
              </div>
            </nav>
            <section className='flex flex-col py-10 px-10'>
              <div className='flex flex-row justify-around'>
                <div className="basis-1/2 font-sans">
                  <span className='text-center text-9xl'>
                    <h1>Golkar</h1>
                    <h1>Sarolangun</h1>
                  </span>
                  <span>
                    <a href='#'><h2 className="text-center text-xl mt-6 font-bold">Bergabung Menjadi Anggota</h2></a>
                  </span>
                </div>
                <div className='basis-1/2'></div>
              </div>
              <div className='flex flex-col self-center mt-56'>
                <div className='flex w-72 self-center'>
                  <img src={contentOne['image-kita-satu']} alt='kita-satu' className='bg-local w-full'/>
                </div>
                <p className='text-center w-[500px] mt-5'>
                  {contentOne.description}
                </p>
              </div>
            </section>
        </section>

        <section className='relative bg-contain bg-no-repeat bg-center h-[600px] w-[1800px] m-10'>
          <img className='absolute inset-0 mx-auto opacity-25 -z-10' src='/bg-golkar-grey.png' width="485" height="485" alt='bg'/>
          <div className='grid grid-cols-2 place-content-stretch rounded-2xl self-center'>
            {contentTwo.map((item,i) => <Card key={i} payload={item} index={i}/>)}
          </div>
        </section>

        <section className='flex flex-col p-10'>
          <div className='text-left text-5xl pl-4'>Berita</div>
          <div className='text-right text-xl text-cyan-400 pr-4'>Lihat Semua</div>
          <div className='flex justify-between items-stretch'>
            {contentBerita.map((value, i) => <News key={i} payload={value} />)}
          </div>
        </section>

        <section className='flex flex-col pt-20 px-20'>
          <div className='bg-golkar-video h-[1000px] bg-contain bg-center'>
            <div className='text-center text-5xl pt-20 pb-10'>
              <div className='mt-10'>Mars & Hymne</div>
              <div className=''>Partai Golkar</div>
            </div>
            <div className='flex justify-center px-28 py-10'>
              {contentVideo.map((value, i) => <Video key={i} payload={value} />)}
            </div>
          </div>
        </section>

        <section className='flex flex-col pt-20 px-20'>
          <div className='text-center text-5xl'>
            <div className='mt-10'>Hubungi Kami</div>
          </div>
          <div id="map" className='h-[600px]'>
            <Maps />
          </div>
          <div className='flex flex-row mt-10 p-10 w-full'>
            <div className='basis-1/2 flex justify-around'>
              <img src="./facebook.png" className='h-24 w-24' alt='fb'/>
              <img src="./youtube.png" className='h-24 w-24' alt='yt'/>
              <img src="./instagram.png" className='h-24 w-24' alt='ig'/>
            </div>
            <div className='basis-1/2 justify-center pl-20'>
              <div className='flex flex-row bg-slate-400 rounded-full w-[470px] hover:drop-shadow-lg'>
                <img src="./whatsapp.png" className='h-24 w-24' alt='wa'/>
                <div className='ml-4 text-5xl self-center'>
                  085155338389
                </div>
              </div>
            </div>
          </div>
        </section>

      </main>
      <footer className='flex justify-center bg-footer bg-cover bg-center h-20'>
        <hr className='my-5 border-t-1'/>
        <div className='self-center'>© 2022 Partai Golkar Sarolangun, All right reserved.</div>
      </footer>
    </div>
  )
}

Home.getInitialProps = async function () {
  // Call an external API endpoint to get posts.
  // You can use any data fetching library
  for (const element of contentBerita) {
    element.createdAt = element.createdAt.toString()
  }
  // By returning { props: { posts } }, the Blog component
  // will receive `posts` as a prop at build time
  return {
    contentOne, 
    contentTwo, 
    contentBerita, 
    contentVideo
  }
}

export default Home;