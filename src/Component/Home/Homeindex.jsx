import Category from './category';
import Collection from './collection';
import Instablock from './instablock';
import Productslide from './productslide';
import Productslide2 from './productslide2';
import Slider from './slider';
import Stickyinfo from './stickyinfo';

function Homeindex(props) {
    return (
        <>
            <Slider slddata = {props.slddata}/>
            <Collection  cltdata = {props.cltdata}/>
            <Productslide prdsld1 = {props.prdsld1} />
            <Category ctgdata = {props.ctgdata}/>
            <Stickyinfo />
            <Productslide2 prdsld2 = {props.prdsld2}/>
            <Instablock instadata = {props.instadata}/>
        </>
    )
}

export default Homeindex;