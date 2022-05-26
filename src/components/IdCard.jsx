// Iteration 1

const IdCard = (props) => {
  return (
    <div className="id-card">
      <img src={props.picture} alt="" />

      <div>
        <strong>First name: </strong> {props.firstName}
        <br />
        <strong>Last name: </strong> {props.lastName}
        <br />
        <strong>Gender: </strong> {props.gender}
        <br />
        <strong>Height: </strong> {props.height / 100}m
        <br />
        <strong>Birth: </strong> {props.birth.toLocaleDateString()}
      </div>
    </div>
  );
};

export default IdCard;
