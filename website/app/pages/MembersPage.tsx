import React from 'react'
import Section1 from '@/components/MemeberPageComp/section_1'
import Section2 from '@/components/MemeberPageComp/section_2'


const MembersPage = () => {
  return (
    <div className='max-w-5xl mx-auto flex-col flex gap-32 p-5'>
      <Section1 />
      <Section2 />
  </div>
  )
}

export default MembersPage