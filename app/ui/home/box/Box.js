const Box = ({ icon: Icon, title, c }) => {
  return (
    <div className={c}>
      <div>
        <Icon size={34} />
      </div>
      <div>
        <h4>{title}</h4>
        <p>
          Lorem ipsum dolor sit mattis amet consectetur adipiscing dolor sit.
        </p>
      </div>
    </div>
  );
};

export default Box;
