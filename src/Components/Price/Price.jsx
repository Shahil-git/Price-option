import PriceOption from "./PriceOption/PriceOption";

const Price = () => {


    const priceOption =  [
          {
            "id": 1,
            "name": "Basic Membership",
            "features": [
              "Access to gym facilities during off-peak hours",
              "Limited access to group fitness classes",
              "No access to personal trainer",
              "Access to basic gym equipment"
            ],
            "price": "$30/"
          },
          {
            "id": 2,
            "name": "Standard Membership",
            "features": [
              "Access to gym facilities during all hours",
              "Access to all group fitness classes",
              "Extended gym hours",
              "Locker room access with showers"
            ],
            "price": "$50/"
          },
          {
            "id": 3,
            "name": "Premium Membership",
            "features": [
              "Access to gym facilities during all hours",
              "Access to all group fitness classes",
              "Unlimited personal training sessions",
              "Complimentary towels and water bottles",
              "Access to sauna and steam room",
              "Nutritional counseling sessions"
            ],
            "price": "$80/"
          }
        ]
      
      



    return (
        <div className="mb-28  ml-5 mr-5 ">
  <h2 className=" text-5xl font-Poetsen  ">Best price in town</h2>   
 <div className="grid md:grid-cols-3 mt-3 gap-6">
 {
    priceOption.map(option => <PriceOption key={option.id} option={option}></PriceOption>)
}

 </div>

        </div>
    );
};

export default Price;