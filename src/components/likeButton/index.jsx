import { useState } from "react";
import {HeartIcon, SpinnerIcon } from "./icons";
import styles from './index.module.scss';

const Like = () =>{
    const [like, setLike] = useState(false)
    const [fetching, setFetch] = useState(false)
    const [error, setError] = useState(null)

    const url = 'https://www.greatfrontend.com/api/questions/like-button'


    const handleLikeBtn = async() =>{
        setFetch(true)
        setError(null)

        try{
            const response = await fetch(
                url,
            {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({
                action: like?"unlike":'like'
            })
        })
        if(response.status>= 200 && response.status<300){
            setLike(!like)
        }else{
            const res = await response.json()
            setError(res.message)
            return 
        }
    }finally{
        setFetch(false)
    }
    }
    
    

    return(
        <div>
            <button className = {like? styles.liked : styles.likebtn} onClick = {handleLikeBtn}>
                <span className={styles.iconContainer}>
                    {fetching?<SpinnerIcon/>:<HeartIcon />}
                </span>
                <span className={styles.likeText}>
                    <span className={styles.like}>{like ? 'Liked' : 'Like'}</span>
                </span>
            </button>
            {error && <div>{error}</div>}
        </div>
    )
}

export default Like;