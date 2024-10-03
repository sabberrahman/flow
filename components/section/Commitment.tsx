import Image from 'next/image'
import React from 'react'
import Accordian from '../basic components/Accordian'

function Commitment() {
    return (
        <div>
            <div className="wrapper">

                <div className="flex gap-4 mt-12 ml-8">
                    {/* left */}
                    <div className="flex flex-col md:w-1/2">
                        <p>Our commitment to green energy is paving the way for a cleaner, healthier planet.</p>
                        <div className="">
                            <Accordian />
                        </div>
                    </div>

                    {/* right */}
                    <div className="md:w-1/2">
                        <Image src="/solar.png" alt='solar guy' width={400} height={400} />
                    </div>

                </div>

            </div>
        </div>
    )
}

export default Commitment