import React from 'react'
import Image from 'next/image';

const Community = () => {
  return (
    <section id='community'>
      <span className="communityhead tg">Community</span>
      <div className="clients">
        <div className="client">
          <span className='clienttitle'>Super Work</span>
          <span className='clientcontent'>Vehnicate is the best company I have Ever Heard and Answers everything Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum accusamus, eveniet accusantium repellat dolores, rem totam debitis, laboriosam quis temporibus modi</span>
          <div className="clientinfo">
            <Image src="/logo.png" height={100} width={100} className='clientimg'/>
            <span className='clientname'>Yashvanth K</span>
          </div>
        </div>
        <div className="client">
          <span className='clienttitle'>Super Work</span>
          <span className='clientcontent'>Vehnicate is the best company I have Ever Heard and Answers everything Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum accusamus, eveniet accusantium repellat dolores, rem totam debitis, laboriosam quis temporibus modi</span>
          <div className="clientinfo">
            <Image src="/logo.png" height={100} width={100} className='clientimg'/>
            <span className='clientname'>Yashvanth K</span>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Community