import React from 'react'

const Card = ({author,content,description,publishedAt,source,title,url,urlToImage}) => {
    const date = new Date(publishedAt).toLocaleString("en-us",{timeZone:"Asia/Jakarta"});
    if(urlToImage==null){
        return;
    }
    const imgurl = `${urlToImage}`
    
    const urlToGo = `${url}`
    return (
        <>
        <div className='card'>
            <a href={urlToGo} className='anchor' target='_blank' ><img src={imgurl} alt="Image" /></a>
            <h3>{title}</h3>
            <p>{source.name} : {date}</p>
            <p>{description}</p>
        </div>

        </>
    )
}
export default Card;