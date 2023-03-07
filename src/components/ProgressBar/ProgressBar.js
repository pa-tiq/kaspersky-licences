const ProgressBar = (props) => {
  const { bgcolor, completed } = props;

  const containerStyles = {
    height: 25,
    width: 100,
    backgroundColor: "#e0e0de",
    borderRadius: 20,
    marginTop:4,
    marginBottom:4,
  }

  const fillerStyles = {
    height: '100%',
    width: `${completed}%`,
    backgroundColor: bgcolor,
    borderRadius: 'inherit',
    textAlign: 'center',
    transition: 'width 1s ease-in-out',
  }

  const labelStyles = {
    color: 'black',
    fontWeight: 'bold',
    fontSize: '10px',
    padding: 5
  }

  return (
    <div style={containerStyles}>
      <div style={fillerStyles}>
        <span style={labelStyles}>{`${completed}%`}</span>
      </div>
    </div>
  );
};

export default ProgressBar;
