import React, { useEffect, useState } from 'react'
import ReactPlayer from "react-player/lazy";
import { VideoItem } from "../lib/types"

type Props = {
    payload : VideoItem;
}

export default function Video ({payload} : Props){
    return(
        <div className='flex flex-grow p-2'>
            <ReactPlayer url={[payload.path,'video/mp4']} light={payload.img} controls/>
        </div>
    )
}