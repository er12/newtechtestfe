import "../css/modal.css";
import React, { useState, useEffect } from "react";

const EditModal = ({ handleClose, show, user }) => {
  const showHideClassName = show ? "modal display-block" : "modal display-none";
    const [name, setName] = useState(user.name);
    
    useEffect(() => {
        setName(user.name);

    }, [user]);

  const SubmitEdit = (e) => {
    e.preventDefault();

    const url = "https://localhost:44363/api/users/" + user.id;

    const userToEdit = {
      id: user.id,
      name: name,
      };
      
      console.log('NFDENFS', name);

    // request options
    const options = {
      method: "PUT",
      body: JSON.stringify(userToEdit),
      headers: {
        "Content-Type": "application/json",
      },
    };

    fetch(url, options)
      .then((res) => res.json())
      .then((res) => console.log(res))
      .catch((error) => {});
  };

  return (
    <div className={showHideClassName}>
      <section className="modal-main">
        <label>Type new name for "{user.name}":</label>
        <input
          type="text"
          value={name}
          placeholder={user.name}
          onChange={(e) => setName(e.target.value)}
        />
        <button
          className="submit-button"
          type="button"
          onClick={(e) => {
            SubmitEdit(e);
            handleClose();
          }}
        >
          Save
        </button>

        <button className="close-button" type="button" onClick={handleClose}>
          X
        </button>
      </section>
    </div>
  );
};

export default EditModal;
