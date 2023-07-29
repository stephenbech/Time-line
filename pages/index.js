import Head from 'next/head'
import Header from '../components/Header'
import {useSession, getSession} from 'next-auth/react'
import Login from '../components/Login';
import Sidebar from '../components/Sidebar';
import Feed from '../components/Feed';
import Widgets from '../components/Widgets';
import { db, firebase } from '../firebase';
import { collection, getDoc, getDocs } from 'firebase/firestore';
import React, { useState, useEffect } from 'react';
import { data } from 'autoprefixer';

export default function Home({posts}) {
  const { data: session } = useSession()
  if (!session) return <Login/>;
  console.log(posts)
  
  return (
    <div className="h-screen bg-gray-100 overflow-hidden" >
      <Head>
        <title>Time-line</title>
      </Head>
  
       <Header />

      <main className='flex'>
        <Sidebar />
        <Feed posts={posts}/>

        <Widgets/>
      </main>
    </div>
  )
}

export async function getServerSideProps(context) {

  // Get the user
  const session = await getSession(context)

  let posts = []
  const ref = collection(db,'posts');
  // console.log(ref);
  try{
    let allPosts = await getDocs(ref)
    for (const doc of allPosts.docs){
      let post = doc.data()
      
      posts.push({
        ...post,
        timestamp: post.timestamp.toDate().toLocaleString(),
      })
      
    } 
  }catch(e){
    console.log(e, "I threw an error!")
  }
  // console.log(posts)
  
  return {
    props: {
      session,
      posts,
    },
   
  };
}
