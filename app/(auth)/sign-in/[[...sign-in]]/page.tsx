// import { SignIn } from '@clerk/nextjs'
import React from 'react'


// new code

import dynamic from 'next/dynamic';

// Dynamically import Clerk's SignIn component with ssr: false to ensure client-side rendering
const SignIn = dynamic(() => import('@clerk/nextjs').then(mod => mod.SignIn), { ssr: false });

// --new code end

export default function page() {
  return <SignIn />;
}