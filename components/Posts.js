import { collection, onSnapshot, orderBy, query } from "firebase/firestore";
import React, { useEffect, useState } from "react";
import Post from "./Post";
import {db}from "../firebase"

function Posts() {
  const [posts,setPosts]=useState([])

  useEffect(()=>{
    const unsubscribe = onSnapshot(query(collection(db,'posts'),orderBy('timestamp','desc')),snapshot=>{
      setPosts(snapshot.docs)
    })
    return()=>{unsubscribe}
  },[db])
  return (
    <div>
      {posts.map((post) => (
        <Post key={post.id} 
        id={post.id}
        username={post.data().username}
        img={post.data().image}
        caption={post.data().caption}
        userImg={post.data().profileImg}
          />
      ))}
  
    </div>
  );
}

export default Posts;

// const posts = [
//   {
//     id: "123",
//     username: "ash.0_o",
//     userImg:
//       "https://static.parade.com/wp-content/uploads/2019/12/mlk-inspirational-quote.jpg",
//     img: "https://c8.alamy.com/comp/2APBGFN/motivational-and-life-inspirational-quotes-every-day-is-a-change-to-be-better-blurry-background-2APBGFN.jpg",
//     caption: "This is dope",
//   },
//   {
//     id: "123",
//     username: "ash.0_o",
//     userImg:
//       "https://static.parade.com/wp-content/uploads/2019/12/mlk-inspirational-quote.jpg",
//     img: "https://c8.alamy.com/comp/2APBGFN/motivational-and-life-inspirational-quotes-every-day-is-a-change-to-be-better-blurry-background-2APBGFN.jpg",
//     caption: "This is dope",
//   },
//   {
//     id: "123",
//     username: "ash.0_o",
//     userImg:
//       "https://static.parade.com/wp-content/uploads/2019/12/mlk-inspirational-quote.jpg",
//     img: "https://c8.alamy.com/comp/2APBGFN/motivational-and-life-inspirational-quotes-every-day-is-a-change-to-be-better-blurry-background-2APBGFN.jpg",
//     caption: "This is dope",
//   },
//   {
//     id: "123",
//     username: "ash.0_o",
//     userImg:
//       "https://static.parade.com/wp-content/uploads/2019/12/mlk-inspirational-quote.jpg",
//     caption: "This is dope",
//   },
// ];
