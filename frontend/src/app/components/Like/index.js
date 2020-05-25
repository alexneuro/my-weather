import React, {useEffect} from "react";
import styles from "../Like/like.module.css";
import wait from "../../../assets/images/wait.gif";
import error from "../../../assets/images/error.png";

const Like = ({currentLike, currentMarker, setCurrentLike, likeInFetch}) => {
    useEffect(() => {
        if (!likeInFetch)
            if (currentMarker && currentLike === null) {
                console.log(`Like.js fetch-Start     getLikeCount`);
                setCurrentLike(null, true);
                const url = `http://localhost:8080/${currentMarker.id}`;
                fetch(url).then(res => res.json()).then(
                    (res) => {
                        console.log("Like.js fetch-Success     getLikeCount");
                        setCurrentLike(res.likeCount, false);
                    },
                    (error) => {
                        console.log("Weather.js fetch-Error     getWeather");
                        setCurrentLike("error", false);
                    }
                )
            }
    });


    let like = () => {
        if (!likeInFetch) {
            const url = `http://localhost:8080/like/${currentMarker.id}`;
            console.log("Like.js fetch-Start     incLikeCount");
            setCurrentLike(currentLike, true);
            fetch(url).then(res => res.json()).then(
                (res) => {
                    console.log("Like.js fetch-Success     incLikeCount");
                    setCurrentLike(res.likeCount, false);
                },
                (error) => {
                    console.log("Weather.js fetch-Error     getWeather");
                    setCurrentLike("error", false);
                }
            );
        }
    };
    let loadingClass = likeInFetch  ? styles.likesLoading : "";
    if (currentLike === "error")
        return (<img src={error} height={25} alt={'Error on load!'}/>);
    else
        return (
            <div className={`${styles.like} ${loadingClass}`} onClick={like}>
                <span className={`icon-heart`}/>
                <span>{currentLike}</span>
            </div>
        )
};

export default Like;