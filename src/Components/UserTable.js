import styled from "@emotion/styled";
import React, { useState } from "react";
import EditModal from "./EditModal.js";

const Container = styled.div`
  display: flex;
  justify-content: space-around;
  margin: 10px 40px;
  width: 100%;
`;

const StyledTable = styled.table`
  display: block;
  border: 2px solid black;
  border-radius: 4px;
  margin: 20px 40px;
  max-width: 800px;
  width: 100%;
  thead {
    border: 1px solid black;
    widht: 100%;
    color: black;
  }
  td {
    border-right: 0.1px solid black;
  }
  td:last-of-type {
    border: none;
  }
`;

const StyledEditButton = styled.button`
  border-radius: 4px;
  height: 30px;
  width: 60px;
`;

const StyledDeleteButon = styled.button`
  background-color: red;
  border-radius: 4px;
  height: 30px;
  width: 60px;
`;

const StyledShortCol = styled.col`
  width: 15%;
`;

const StyledLongCol = styled.col`
  width: 75%;
`;
const UserTable = ({ children }) => {
  const list = children;

  //Modal
  const [show, SetShow] = useState(false);
  const [selectedUser, setSelectedUser] = useState({ id: 0, name: "No List" });

  const ToggleModal = () => {
    SetShow(!show);
    console.log('Modal');
  };

  const DeleteUser = (id) => {
    console.log(id);

    const url = "https://localhost:44363/api/users/" + id;

    // request options
    const options = {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
      },
    };

    fetch(url, options)
      .then((res) => res.json())
      .then((res) => {
        console.log(res);
      });
  };

  return (
    <Container>
      <EditModal show={show} handleClose={ToggleModal} user={selectedUser} />
      <StyledTable>
        <colgroup>
          <StyledShortCol />
          <StyledLongCol />
          <StyledShortCol />
          <StyledShortCol />
        </colgroup>
        <thead>
          <tr>
            <td>Id</td>
            <td>Name</td>
            <td>Edit</td>
            <td>Delete</td>
          </tr>
        </thead>
        <tbody>
          {list.map((user, i) => {
            return (
              <tr key={i}>
                <td>{user.id}</td>
                <td>{user.name.trim()}</td>
                <td>
                  <StyledEditButton
                    onClick={() => {
                      setSelectedUser(user);
                      console.log(selectedUser);
                      ToggleModal();
                    }}
                  >
                    Edit
                  </StyledEditButton>
                </td>
                <td>
                  <StyledDeleteButon
                    onClick={(e) => {
                      DeleteUser(user.id);
                    }}
                  >
                    X
                  </StyledDeleteButon>
                </td>
              </tr>
            );
          })}
        </tbody>
      </StyledTable>
    </Container>
  );
};

export default UserTable;
