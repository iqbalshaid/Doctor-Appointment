import React, { useState } from "react";
import doctor from "../assets/images/doctor1.webp"
import doctor1 from "../assets/images/doctor.png"
import doctor2 from "../assets/images/doctor2.webp"
import doctor3 from "../assets/images/doctor3.jpg"
import doctor4 from "../assets/images/doctor4.webp"
const Doctor = [
    {
        id: "01",
        name: "Dr. Rashid Ansari",
        specialty: "HeardSurgeon",
        photo:doctor,
       
    },
    {
    id: "02",
name: "Dr. Rajiya Khatoon",
specialty: "Surgeon",
photo:doctor1,


},
{
id: "03",
name: "Dr. Saleh Mahmud",
specialty: "Neurologist",
photo:doctor2,


},
{
id: "04",
name: "Dr. Farid Uddin",
specialty: "Dermatologist",
photo:doctor3,

},
{
id: "05",
name: "Dr.Harsh Goyal",
specialty: "Pychology",
photo:doctor4,


}
]
const Readmore = ()=>{
    
    const [dataset,setDataSet] = useState(Doctor);
    
    const [hp,setHp] = useState({
        name:"Dr.Rashid Ansari",
       specialty : "HeardSurgeon",
       photo:doctor,
});
    

    
    return (
        <>
        <section className="px-5 lg:px-0">
            <div className="container">
                <div className="flex items-center justify-center max-sm:flex max-sm:flex-col max-sm:items-center">
                    <div className=" rounded-[20px] ">
                        <img src = {hp.photo} alt = ""  className="px-5"/>
                    </div>
                    <div className="mt-10">


                        <h1 className="text-[50px] text-black font-extrabold sm:text-[18px] max-sm:text-[18px] text-center">Name:-{hp.name}</h1>
                        <p className="text-[30px] text-gray-500 sm:text-[14px]  max-sm:text-[14px] font-semibold text-center">{hp.specialty}</p>
                        <p className="mt-[10px] text-black text-center text-base sm:text-[12px] font-light">for 30 years India news and world Report has recognized as <br />
                        as one of the best policies hospital in the nation and #1 in <br />
                        Texas.lorem has the fan of the world and most beautiful places<br />
                        are there.</p>
                        <p className="mt-[30px] text-black text-center text-base sm:text-[12px] font-light">for successfully treatment and policies are there in our hospital <br />
                        as one of the best policies hospital in the nation and #1 in <br />
                        Texas.lorem has the fan of the world and most beautiful places<br />
                        are there.</p>
                    
                    </div>
                </div>
                
                <div className="flex gap-20 mt-5 sm:flex sm:flex-col sm:items-center max-sm:flex max-sm:flex-col max-sm:items-center">{
                    dataset.map((items,index)=>{
                        
                    return(<div  key={index} onClick = {()=>setHp(items)} >
  
                                                    <img 
                        
                        width={200}
                        height={150}
                        src={items.photo}
                        style={setHp===items.photo ? {border:"5px solid gray",height:"140px"} : {}}/>


                        
                    
                
            
                
                  
                <h1 
className="text-[50px] text-black font-extrabold sm:text-[18px] max-sm:text-[18px] text-center sm:text-left">{items.name}</h1>
 <p 
 className="text-[30px] text-gray-500 sm:text-[14px] font-semibold  max-sm:text-[14px] text-center sm:text-center">{items.specialty}</p>
                        
                        </div>
                        )

                    }
                    )
                }
                
                </div>
                </div>
            
           
        </section>

        </>
    )
}
export default Readmore;