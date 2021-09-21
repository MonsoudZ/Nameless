function commentBar(props) {
  const { userName, status, date } = props
  return (
    <div className="status">
      <div className="user-info">
        <div className="user-text">
          <p> {userName} </p>
          <p><small>{date}</small></p>
        </div>
      </div>
      <p className="status-text">
        {status}
      </p>
      <div className="reaction-bar">
        <button>Like</button>
        <button>Comment</button>
      </div>
    </div>
  )

}
  

export default commentBar
