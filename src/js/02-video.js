import Player from "@vimeo/player";
import { throttle } from "lodash";

const iframe = document.querySelector("iframe");
const player = new Player(iframe);
const LOCALPLAYER_KEY = "videoplayer-current-time";
const lastSavedTime = localStorage.getItem(LOCALPLAYER_KEY);

const onPlay = function (data) {
    const currentTime = data.seconds;
    localStorage.setItem(LOCALPLAYER_KEY, currentTime);
    console.log("current time of video", currentTime);
}
player.on('timeupdate', throttle(onPlay, 1000));

if (lastSavedTime !== null) {
    player.setCurrentTime(lastSavedTime)
}