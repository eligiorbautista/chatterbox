import React from 'react';

const Message = () => {
    return (
        <div className='chat chat-end'>
            <div className="chat-image avatar">
                <div className="w-9 rounded-full">
                    <img src="https://scontent.fmnl4-4.fna.fbcdn.net/v/t39.30808-6/455696302_2887886011370036_8789663979796135240_n.jpg?_nc_cat=100&ccb=1-7&_nc_sid=6ee11a&_nc_eui2=AeHFlmY1mPNuzIT88ppz1k_qQ6ihiJJ7dE9DqKGIknt0TzaVfLnuKYajiwzpIsWF79ipPjXpoxET7GB1Cx-sl9Bk&_nc_ohc=TKFF43MtrG4Q7kNvgETlJqy&_nc_ht=scontent.fmnl4-4.fna&oh=00_AYBDi_wcPWItBYs-GoyduwZ8qL4Tjggf2797DXafb5pbew&oe=66D1E87C" alt="" />
                </div>
            </div>
            <div className="chat-bubble text-white bg-gray-800 p-2 text-sm">Hello, World!</div>
            <div className="chat-footer text-white opacity-50 pt-2 text-sx flex gap-1 items-center">12:27</div>
        </div>
    )
}

export default Message;
