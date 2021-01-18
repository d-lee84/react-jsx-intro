function Tweet(props) {
  const {username, name, date, message} = props;
  const styles = {
    color : "blue",
    backgroundColor : "red",
    fontSize : "20px",
    width: "100px"
  }
  return (
    <li style={styles}>
      <p><b>{username}</b>: {message}</p>
      <p>By {name} on {date}</p>
    </li>
  )
}