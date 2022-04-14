import ReactPlayer from "react-player"
export default function News ({payload}){
    
    return(
        <figure className='flex flex-col m-2'>
            <ReactPlayer url={payload.path} controls config={ {
        file: {
            attributes: {
                controlsList: "nodownload"
            }
        }
    } } />
        </figure>
    )
}