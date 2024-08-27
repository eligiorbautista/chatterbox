import React from 'react'

const Conversation = () => {
    const isOnline = true;
    return (
        <>
            <div className="flex gap-2 items-center hover:bg-gray-600 rounded p-2 py-2 cursor-pointer">
                <div className="avatar online ">
                    <div className="w-8 rounded-full">
                        <img src="https://scontent.fmnl4-4.fna.fbcdn.net/v/t39.30808-6/455696302_2887886011370036_8789663979796135240_n.jpg?_nc_cat=100&ccb=1-7&_nc_sid=6ee11a&_nc_eui2=AeHFlmY1mPNuzIT88ppz1k_qQ6ihiJJ7dE9DqKGIknt0TzaVfLnuKYajiwzpIsWF79ipPjXpoxET7GB1Cx-sl9Bk&_nc_ohc=TKFF43MtrG4Q7kNvgETlJqy&_nc_ht=scontent.fmnl4-4.fna&oh=00_AYBDi_wcPWItBYs-GoyduwZ8qL4Tjggf2797DXafb5pbew&oe=66D1E87C" alt="user profile picture" />
                    </div>
                </div>
                <div className="flex flex-col flex-1">
                    <div className='flex gap-3 justify-between'>
                        <p className=' text-gray-200  text-sm'>Eli Bautista</p>
                        <p className={`text-xs ${isOnline ? 'text-green-500' : 'text-gray-400'}`}>
                            {isOnline ? 'active now' : 'offline'}
                        </p>
                    </div>
                </div>
            </div>

            <div className='divider my-0 py-0 h-1.5'></div>
        </>
    )
}

export default Conversation
