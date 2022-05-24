// Iteration 1

const IdCard = (props) => {
  return (
    <div className="idCard">
      <div className="picture">
        <img src={props.picture} alt="picture" />
      </div>
      <div className="user">
        <p>First name: {props.firstName}</p>
        <p>Last name: {props.lastName}</p>
        <p>Gender: {props.gender}</p>
        <p>Height: {props.height}</p>
        <p>Birth: {props.birth.toLocaleDateString()}</p>
      </div>
    </div>
  );
};

export default IdCard;
