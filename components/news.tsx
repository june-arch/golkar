import Image from "next/image";
import { NewsItem } from "../lib/types";

type Props = {
  payload : NewsItem;
}

export default function News ({payload} : Props){
    let date = new Date(payload.createdAt);
    let formatDate = date.toLocaleString('id-ID', {day:'numeric',month:'short',year: 'numeric', hour:'2-digit', minute:'2-digit'});
    return(
        <figure className='flex flex-col basis-1/4 bg-yellow-300 rounded-xl m-2 hover:drop-shadow-lg transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-105 duration-300'>
            <Image src={payload.image} alt='berita-1' height='60' width='100%' layout="responsive" className='bg-cover rounded-t-xl'/>
            <div className='flex flex-col p-4 h-44'>
              <div className='text-lg'>{payload.title}</div>
              <p className='text-sm line-clamp-4 '>{payload.description}</p>
              <p className="pt-2 text-right">Selengkapnya</p>
            </div>
            <div className='flex justify-between border-t-2 border-t-white p-4'>
              <p>{payload.tags.map((value) => '#' + value)}</p>
              <div className='flex flex-col'>
                <div className='text-sm'>{payload.author}</div>
                <p className='text-sm'>{formatDate}</p>
              </div>
            </div>
        </figure>
    )
}