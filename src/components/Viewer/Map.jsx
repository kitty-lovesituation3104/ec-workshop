import React, { useContext } from "react";
import styled from "styled-components";

import Clock from "../../images/clock.png";
import Table from "../../images/table.png";
import Chair from "../../images/chair.png";
import Box from "../../images/box.png";
import Window from "../../contexts/Window";
import Person from "../../contexts/Person";
import Message from "../../contexts/Message";
import Action from "../../contexts/Action";

const Wrapper = styled.div`
  width: 100%;
  height: 50%;
  /* background-color: #eafaf6; */
  position: relative;
`;

const Item = styled.img`
  max-height: 100px;
  position: absolute;
`;

const Map = () => {
  const { setViewerState } = useContext(Window.Context);
  const { setPerson } = useContext(Person.Context);
  const { setMessage } = useContext(Message.Context);
  const { setAction } = useContext(Action.Context);

  const setPerson1 = () => {
    setPerson("person_1");
    setMessage("person_1");
    setAction("person_1");
    setViewerState("dialog");
  };
  const setPerson2 = () => {
    setPerson("person_2ww");
    setMessage("person_2");
    setAction("person_2");
    setViewerState("dialog");
  };
  const setPerson3 = () => {
    setPerson("person_3");
    setMessage("person_3");
    setAction("person_3");
    setViewerState("dialog");
  };
  const setPerson4 = () => {
    setPerson("person_4");
    setMessage("person_4");
    setAction("person_4");
    setViewerState("dialog");
  };
  return (
    <Wrapper>
      <Item
        style={{ top: "0px", left: "100px" }}
        onClick={() => setPerson1()}
        src={Clock}
        alt="clock"
      />
      <Item
        style={{ bottom: "0px", right: "100px" }}
        onClick={() => setPerson2()}
        src={Table}
        alt="table"
      />
      <Item
        style={{ bottom: "0px", left: "100px" }}
        onClick={() => setPerson3()}
        src={Chair}
        alt="chair"
      />
      <Item
        style={{ top: "0px", right: "100px" }}
        onClick={() => setPerson4()}
        src={Box}
        alt="box"
      />
    </Wrapper>
  );
};

export default Map;
