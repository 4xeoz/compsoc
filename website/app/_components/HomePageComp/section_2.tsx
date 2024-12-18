import React from 'react'
import NumberTicker from "@/components/ui/number-ticker";

const section_2 = () => {
    const images = Array.from({ length: 4 }, (_, i) => {
        const isLandscape = i % 2 === 0;
        return `https://picsum.photos/seed/${i + 1}/800/800`;
      });

  return (
    <div className='p-5 relative overflow-hidden h-fit'>
        <div>
            <h2>Section 2</h2>
        </div>
        <div>
        <div className="flex gap-3">
            <div className="w-1/4">
                <img src={images[0]} alt="1" className="w-full h-full object-cover" />
            </div>
            <div className="w-2/4 flex flex-col gap-3">
                <img src={images[1]} alt="2" className="w-full h-full object-cover" />
                <img src={images[2]} alt="3" className="w-full h-full object-cover" />
            </div>
            <div className="w-1/4">
                <img src={images[3]} alt="4" className="w-full h-full object-cover" />
            </div>
        </div>
        </div>
        <div>
            <p className='my-5'>We’re the official Computer Science departmental society for the University of Surrey and the University of Surrey Student’s Union.</p>
            <p className='my-5'>We run academic and social events on a monthly basis for coders and non-coders alike, as well as bigger events throughout the year. You can learn to code or participate in beginner, intermediate or advanced game jams (game building competitions), hackathons and more.</p>
        </div>

        <div className='flex justify-around rounded-sm max-w-lg bg-gradient-to-br from-blue-600 to-violet-600 h-32 mx-auto'>
       
            <div className='my-auto flex items-center'>
                <span className='bg-foreground h-16 w-1 rounded-full mr-4'/>
                <div>
                    <span className='font-bold text-[1.2rem]'>+</span><NumberTicker className='font-bold text-[1.2rem] text-foreground' value={500} />
                    <h3>Members</h3>
                </div>
            </div>
            <div className='my-auto flex items-center'>
                <span className='bg-foreground h-16 w-1 rounded-full mr-4'/>
                <div>
                    <span className='font-bold text-[1.2rem]'>+</span><NumberTicker className='font-bold text-[1.2rem] text-foreground' value={20} />
                    <h3>Events</h3>
                </div>
            </div>
            <div className='my-auto flex items-center'>
                <span className='bg-foreground h-16 w-1 rounded-full mr-4'/>
                <div>
                    <span className='font-bold text-[1.2rem]'>+</span><NumberTicker className='font-bold text-[1.2rem] text-foreground' value={10} />
                    <h3>Partners</h3>
                </div>
            </div>
        </div>
    </div>
  )
}

export default section_2