import PropType from 'prop-types'
import { BsFillCheckCircleFill } from "react-icons/bs";
const Features = ({features}) => {
    return (
        <div>
            
 <h2 className=' text-center  flex items-center'> <BsFillCheckCircleFill className='mr-4'  />{features}</h2>

 
</div>
 
    );
};

Features.propTypes = {
    features: PropType.string
}



export default Features;