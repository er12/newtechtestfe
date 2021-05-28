import styled from "@emotion/styled";
import React, { useState } from "react";

const url = "https://localhost:44363/api/users";

const StyledForm = styled.form`
  display: flex;
  padding: 1rem 2rem;
`;
const StyledInput = styled.input`
  margin: 0 10px;
`;

const StyledButton = styled.button`
  background-color: #17a98f;
  border-radius: 4px;
  height: 30px;
  width: 60px;
  align-self: center;
`;

const CreateForm = ({ props }) => {
  const [name, setName] = useState("");

  const Submit = (e) => {
    e.preventDefault();

    if (name == "") {
      alert("Name cannot be null");
      return;
    }

    const user = {
      name: name,
      role: 1,
    };

    // request options
    const options = {
      method: "POST",
      body: JSON.stringify(user),
      headers: {
        "Content-Type": "application/json",
      },
    };

    fetch(url, options)
      .then((res) => res.json())
      .then((res) => console.log(res))
      .catch((error) => { });
    
    setName('');
  };

  return (
    <StyledForm>
      <label>Insert user: </label>
      <StyledInput
        type="text"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <StyledButton onClick={(e) => Submit(e)}>Submit</StyledButton>
    </StyledForm>
  );
};

export default CreateForm;
