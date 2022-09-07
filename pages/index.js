import React from 'react'
import Head from 'next/head';
import Profile from './Profile';
import ContactMe from './ContactMe';
import Myproject from '../components/Myproject';
import Recommendation from '../components/Recommendation';
function index() {
  return (
    <div>

<Profile/>
<Myproject/>
<ContactMe/>
</div>
  );
}

export default index