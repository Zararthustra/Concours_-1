export const ModelTitle = ({ color }) => {
  return (
    <div className="modelTitle">
      <div
        style={{
          width: "7px",
          height: "4rem",
          backgroundColor: color,
          marginTop: ".4rem",
          transition: "all .5s"
        }}
      />
      <div>
        <h1>Galaxy S22</h1>
        <p>599.00 €</p>
      </div>
    </div>
  );
};
