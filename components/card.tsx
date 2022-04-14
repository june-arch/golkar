
import Image from 'next/image'
import { CardIdiom } from '../lib/types';

type Props = {
    payload : CardIdiom;
    index : number;
}

export default function Card({payload, index} : Props) {
    let classPosistion = index % 2 == 0 ? 'pl-6' : 'pr-6';
    let classTitle =  index % 2 == 0 ? '' : 'text-right';
    let classMore = index % 2 == 0 ?  'text-left' : 'text-right';
    let classImgPosition = index % 2 == 0 ? false : true;
  return (
    <figure className="flex border-4 border-white p-8 md:p-0">
        {classImgPosition == false && <Image className="basis-1/4" src={payload.image} alt="" width="200" height="200" />}
        <div className="flex flex-col justify-between basis-3/4 pt-6 p-8">
            <div className={'text-lg font-bold '+classTitle}>
                {payload.title}
            </div>
            <p className="text-center text-sm pt-1">{payload.description}</p>
            <figcaption className={classPosistion}>
                <div className={'pt-6 text-sky-500 dark:text-sky-400 '+ classMore}>
                Selengkapnya
                </div>
            </figcaption>
        </div>
        {classImgPosition == true && <Image className="basis-1/4" src={payload.image} alt="" width="200" height="200" />}
    </figure>
  )
}