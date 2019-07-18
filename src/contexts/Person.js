import React, { useState, createContext } from "react";
import Person1 from "../images/person_1.png";
import Person2ww from "../images/person_2_ww.png";
import Person2rr from "../images/person_2_rr.png";
import Person2rb from "../images/person_2_rb.png";
import Person2ry from "../images/person_2_ry.png";
import Person2bb from "../images/person_2_bb.png";
import Person2by from "../images/person_2_by.png";
import Person2yy from "../images/person_2_yy.png";
import Person2pf from "../images/person_2_pf.png";
import Person3 from "../images/person_3.png";
import Person4 from "../images/person_4.png";
import Saru from "../images/saru.png";
import Niwatori from "../images/niwatori.png";
import Wani from "../images/wani.png";
import Start from "../images/emblem.gif";

const Context = createContext();
const Provider = ({ children }) => {
  const [person, setPersonImage] = useState();
  const setPerson = name => {
    switch (name) {
      case "person_1":
        setPersonImage(Person1);
        break;
      case "person_2ww":
        setPersonImage(Person2ww);
        break;
      case "person_2rr":
        setPersonImage(Person2rr);
        break;
      case "person_2rb":
        setPersonImage(Person2rb);
        break;
      case "person_2ry":
        setPersonImage(Person2ry);
        break;
      case "person_2bb":
        setPersonImage(Person2bb);
        break;
      case "person_2by":
        setPersonImage(Person2by);
        break;
      case "person_2yy":
        setPersonImage(Person2yy);
        break;
      case "person_2pf":
        setPersonImage(Person2pf);
        break;

      case "person_3":
        setPersonImage(Person3);
        break;
      case "person_4":
        setPersonImage(Person4);
        break;
      case "saru":
        setPersonImage(Saru);
        break;
      case "niwatori":
        setPersonImage(Niwatori);
        break;
      case "wani":
        setPersonImage(Wani);
        break;
      case "start":
        setPersonImage(Start);
        break;
      default:
        break;
    }
  };

  return (
    <Context.Provider
      value={{
        person,
        setPerson
      }}
    >
      {children}
    </Context.Provider>
  );
};

export default {
  Provider,
  Context
};
