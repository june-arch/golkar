
import Image from 'next/image'
import { CardIdiom } from '../lib/types';
import React from 'react'

type Props = {
    payload : CardIdiom;
    index : number;
}

const Card = (props : Props) => {
    const {payload, index} = props
    let classPosistion = index % 2 == 0 ? 'pl-6' : 'pr-6';
    let classTitle =  index % 2 == 0 ? '' : 'text-right';
    let classMore = index % 2 == 0 ?  'text-left' : 'text-right';
    let classImgPosition = index % 2 == 0 ? false : true;

  return (
    <figure className="flex flex-col sm:flex-row sm:border-4 border-white">
        <div className={`${classImgPosition == false ? 'sm:flex' : 'sm:hidden self-end'}`}>
            <Image src={payload.image} alt={`${payload.title}`} className="z-0" width="200" height="200" />
        </div>   
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
        <div className={`${classImgPosition == true ? 'sm:flex' : 'sm:hidden'} hidden`}>
            <Image className="z-0" src={payload.image} alt={`${payload.title}`} width="200" height="200" />
        </div>
    </figure>
  )
}

export default Card;
