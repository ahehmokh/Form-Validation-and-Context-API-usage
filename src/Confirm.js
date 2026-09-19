import { useContext } from "react";
import "./Confirm.css";
import { DataNeeded } from "./Context";


const Confirm = () => {

    const visibility = useContext(DataNeeded)

  return (
    <>
    {visibility.isVisible && <div className="confirm-container" onClick={() => {
        visibility.setIsVisible(false)
        visibility.setFormDisplay(true)
    }}>
      <div className="confirm-card">
        <div className="confirm-icon">✓</div>

        <h1>Thank You!</h1>

        <p>
          Your request has been submitted successfully.
          <br />
          We will contact you soon.
        </p>
      </div>
    </div>}
    </>
  );
};


export default Confirm;