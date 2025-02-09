import React from 'react'
import Section_1 from '@/components/MemberPageComp/section_1'
import Section_2 from '@/components/MemberPageComp/section_2'


const MembersPage = () => {
  return (
    <div className='max-w-5xl mx-auto flex-col flex gap-32 p-5'>
      <Section_1 />
      <Section_2 />
  </div>
  )
}

export default MembersPage