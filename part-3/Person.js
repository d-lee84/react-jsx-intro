function Person(props){
  const {name, age, hobbies} = props;
  return (<div>
    <p> Learn some information about this person </p>
    <h3> 
      { name.length > 8 ? name.substring(0,6) : name} <br></br>
      { age > 18 ? "please go vote!" : "you must be 18" } 
      </h3>
    <ul>
       <h3> Hobbies </h3>
       { hobbies.map(h => <li> {h} </li>) }
    </ul>
  </div>);

}