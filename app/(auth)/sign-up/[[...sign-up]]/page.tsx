// import { SignUp } from '@clerk/nextjs'
import React from 'react'

// new code 

import dynamic from 'next/dynamic';

// Dynamically import Clerk's SignIn component with ssr: false to ensure client-side rendering
const SignUp = dynamic(() => import('@clerk/nextjs').then(mod => mod.SignUp), { ssr: false });

export default function page() {
  return (
    <SignUp />
  );
}
