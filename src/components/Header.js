import PropTypes from "prop-types";
import Button from "./Button";

const Header = ({ title, addBtnHandler, showAdd }) => {
  return (
    <header className="header">
      {/* <h1 style={headingStyle}>{title}</h1> */}
      <h1>{title}</h1>
      <Button
        text={showAdd ? "Close" : "Add"}
        onClick={addBtnHandler}
        color={showAdd ? "red" : "green"}
      />
      {/* we can reuse components by changing props */}
      {/* <Button color="blue" text="Hello1" />
      <Button color="red" text="Hello2" /> */}
    </header>
  );
};

// default props
Header.defaultProps = {
  title: "Task Tracker",
};

// propTypes
Header.propTypes = {
  title: PropTypes.string.isRequired,
};

// CSS in JS
// const headingStyle = {
//   color: "red",
//   backgroundColor: "black",
// };

export default Header;
