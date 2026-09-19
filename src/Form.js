import { useContext } from "react";
import { DataNeeded } from "./Context";
const TheForm = () => {

    const DataTransferred = useContext(DataNeeded);
    
    return ( 
        <>
        {
            DataTransferred.formDisplay && 
            <div className="container">
      <h1>Welcome, Please submit your request here</h1>

      <div className="myForm">
        <form
          onSubmit={(e) => {
            e.preventDefault();
            DataTransferred.setIsVisible(true)
            DataTransferred.setFormDisplay(false)
            DataTransferred.resetForm()
          }}
        >
          <label>Name:</label>

          <input
            type="text"
            placeholder="Enter your Full Name"
            value={DataTransferred.form.name}
            required
            onChange={(e) => {
              DataTransferred.setForm({
                ...DataTransferred.form,
                name: e.target.value,
              });
            }}
          />

          <label>Age:</label>

          <input
            type="number"
            min="18"
            max="30"
            placeholder="Only from 18 to 30 accepted"
            value={DataTransferred.form.Age}
            required
            onChange={(e) => {
              DataTransferred.setForm({
                ...DataTransferred.form,
                Age: e.target.value,
              });
            }}
          />

          <label>Phone Number:</label>

          <input
            type="text"
            placeholder="ex: +020123456789"
            value={DataTransferred.form.PhoneNumber}
            required
            onChange={(e) => {
              DataTransferred.setForm({
                ...DataTransferred.form,
                PhoneNumber: e.target.value,
              });
            }}
          />

          <label>Email address:</label>

          <input
            type="email"
            placeholder="ex: example@provider.com"
            value={DataTransferred.form.EmailAddress}
            required
            onChange={(e) => {
              DataTransferred.setForm({
                ...DataTransferred.form,
                EmailAddress: e.target.value,
              });
            }}
          />

          <label>Are you currently working?</label>

          <input
            type="checkbox"
            checked={DataTransferred.form.Employee}
            onChange={(e) => {
              DataTransferred.setForm({
                ...DataTransferred.form,
                Employee: e.target.checked,
              });
            }}
          />

          {DataTransferred.form.Employee && (
            <div className="currentsalary">
              <label>Current Salary:</label>

              <select
                required
                value={DataTransferred.form.CurrentSalary}
                onChange={(e) => {
                  DataTransferred.setForm({
                    ...DataTransferred.form,
                    CurrentSalary: e.target.value,
                  });
                }}
              >
                <option value="" disabled>
                  Choose your Range
                </option>

                <option value="+10K">+10K</option>
                <option value="+20K">+20K</option>
                <option value="+30K">+30K</option>
                <option value="not one of the above">
                  Expect more than that
                </option>
              </select>
            </div>
          )}

          <label>Expected Salary:</label>

          <select
            required
            value={DataTransferred.form.ExpectedSalary}
            onChange={(e) => {
              DataTransferred.setForm({
                ...DataTransferred.form,
                ExpectedSalary: e.target.value,
              });
            }}
          >
            <option value="" disabled>
              Choose your Range
            </option>

            <option value="+10K">+10K</option>
            <option value="+20K">+20K</option>
            <option value="+30K">+30K</option>
            <option value="not one of the above">
              Expect more than that
            </option>
          </select>

          <button type="submit">Submit</button>
        </form>
      </div>
    </div>
        }
        </>
     );
}
 
export default TheForm;