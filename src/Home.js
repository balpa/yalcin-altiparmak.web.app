import React, {useState} from 'react'
import InstagramIcon from '@material-ui/icons/Instagram';
import YouTubeIcon from '@material-ui/icons/YouTube';
import FacebookIcon from '@material-ui/icons/Facebook';
import { makeStyles } from '@material-ui/core/styles';


export default function Home() {

    const [isBlurred, setisBlurred] = useState(false)

    const useStyles = makeStyles({
        root: {
          color: "wheat",  
          height: 48,
          width: 48,
          cursor: "pointer",
        },
      });

    const classes = useStyles();

    return (
        <>
        <div className="home-content" style={isBlurred ? {filter:"blur(3px)"}: {}}>
                
        </div>
        <div className="social-holder" onMouseEnter={()=> setisBlurred(true)} onMouseLeave={()=> setisBlurred(false)}>
            <div className="socialmedia">
                <InstagramIcon className={classes.root} />
                <p id="home-social-text"><a href="https://www.instagram.com/yalcinaltiparmak/"  id="home-social-text" target="_blank">Instagram</a></p>
            </div>
            <div className="socialmedia">
                <YouTubeIcon className={classes.root} />
                <p id="home-social-text"><a href="https://www.youtube.com/BerkeAlt%C4%B1parmak"  id="home-social-text" target="_blank">YouTube</a></p>
            </div>
            <div className="socialmedia">
                <FacebookIcon className={classes.root} />
                <p id="home-social-text"><a href="https://www.facebook.com/yalcinaltiparmak"  id="home-social-text" target="_blank">Facebook</a></p>
            </div>
        </div>
    </>
    )
}
