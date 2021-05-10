import YouTube, {Options} from 'react-youtube'
import styles from './YoutubeBackground.module.scss'

export const YoutubeBackground = () => {

    const videoOptions:Options = {
        playerVars: {
            autoplay: 1,
            controls: 0,
            rel: 0,
            showinfo: 0,
            loop:1,
            mute: 1,
        }
    };

    const _onEnd = (event:{ target: any; data: number; }) =>  {
        event.target.playVideo();
    }

    return (
        <>
            <div className={styles.videoBackground}>
                <div className={styles.videoForeground}>
                    <YouTube
                        videoId="gA0nQyDZR4A"
                        opts={videoOptions}
                        className={styles.videoIframe}
                        onEnd={_onEnd}
                    />
                </div>
            </div>
        </>
    )
}