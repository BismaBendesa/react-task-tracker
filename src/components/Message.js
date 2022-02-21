import { FaGhost } from "react-icons/fa";
import { TiWarning } from "react-icons/ti";
import PropTypes from "prop-types";

// for icon
const WARNING = "warning";

const Message = (message) => {
  return (
    <div className="message">
      {message.type === WARNING ? (
        <TiWarning size={30} />
      ) : (
        <FaGhost size={30} />
      )}
      <small>{message.text}</small>
    </div>
  );
};

Message.defaultProps = {
  type: "warning",
  text: "warning text",
};

Message.propTypes = {
  type: PropTypes.string,
  text: PropTypes.string.isRequired,
};

export default Message;
