import PropType from 'prop-types'
import Features from '../../Features/Features';

const PriceOption = ({option}) => {
const {name , price ,features} = option;

    return (
        <div className='bg-[#a55eea] rounded-[10px] flex flex-col  p-4'>
            <h2 className='text-center'>
                <span className='text-5xl'>{price}</span>
                <span className='text-3xl'>mon</span>
                </h2> <br />
                <h4 className='text-3xl font-Poetsen text-center'>
                    {name}
                </h4> <br />
                <div className='flex-grow'>
                {
         features.map( (features ,index) => <Features key={index} features={features}></Features>)           
                }
                </div>
  
     <button className='font-Poetsen w-full mt-12 rounded-lg hover:bg-blue-900 bg-[#3867d6] p-3 '><h1 className='text-white'>Buy Now </h1></button>
        </div>
        
    );
};

PriceOption.propTypes = {
    option: PropType.object
}


export default PriceOption;