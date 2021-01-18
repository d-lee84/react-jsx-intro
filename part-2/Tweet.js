function Tweet(props) {
  const {username, name, date, message} = props;

  return (
    <li>
      <p><b>{username}</b>: {message}</p>
      <p>By {name} on {date}</p>
    </li>
  )
}