import React from 'react'

import Header from '../components/Header';
import Form from '@/components/Form';

const index = () => {
  return (
    <>
      <Header label='Home'/>
      <Form placeholder="What's happening?" />
    </>
  )
}

export default index