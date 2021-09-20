import React from "react";
// import { TailwindFontConfig } from "tailwindcss/tailwind-config"

function Comment() {
  const userPost = [{
    status: "Thursday Night Football",
    profilePicture: "https://www.outkick.com/wp-content/uploads/MNF-1-819x1024.jpeg",
    userName: "NFL For LYFE",
    date: " 09-09-2021"
  },
  {
    status: "We got Bell",
    profilePicture: "https://static.www.nfl.com/t_q-best/league/api/clubs/logos/BAL",
    userName: "LAmerJack8",
    date: "08-20-2021"
  },
  {
    status: "Alabama Football is still #1",
    profilePicture: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSqpjiHavNK_ZHYWS6chMK5xxNMJAYpvWYPGA&usqp=CAU",
    userName: "RollTIDE18",
    date: "10-09-2021"
  }
  ]

  return (
    <div className="timeline">
      {userPost.map(userPost => {
        return <Comment comments={userPost.comments} profilePicture={userPost.profilePicture} userName={userPost.userName} date={userPost.date} />
      })}
        </div>
  )
}

      
      


export default Comment;