import React, { useState, createContext } from "react";

const Context = createContext();
const Provider = ({ children }) => {
  const [action, setActionButtons] = useState([]);
  const setAction = name => {
    switch (name) {
      case "person_1":
        setActionButtons([
          {
            text: "英語を教えてください",
            nextMessage: "person_1_a",
            nextAction: "person_1_2"
          },
          { text: "誰ですか？", nextMessage: "bye_1_a", nextAction: "bye" },
          {
            text: "なんでもないです",
            nextMessage: "bye_1",
            nextAction: "bye"
          }
        ]);
        break;
      case "person_1_2":
        setActionButtons([
          {
            text: "英語で星",
            nextMessage: "person_1_b",
            nextAction: "person_1_2"
          },
          {
            text: "英語でお金",
            nextMessage: "person_1_c",
            nextAction: "person_1_2"
          },
          {
            text: "英語で三角",
            nextMessage: "person_1_d",
            nextAction: "person_1_2"
          },
          {
            text: "英語で水",
            nextMessage: "person_1_e",
            nextAction: "person_1_2"
          },
          {
            text: "英語で魚",
            nextMessage: "person_1_f",
            nextAction: "person_1_2"
          },
          { text: "十分です", nextMessage: "bye_1", nextAction: "bye" }
        ]);
        break;
      case "person_2":
        setActionButtons([
          {
            text: "赤",
            nextMessage: "bye_2",
            nextAction: "red",
            nextPerson: "person_2rr"
          },
          {
            text: "青",
            nextMessage: "bye_2",
            nextAction: "blue",
            nextPerson: "person_2bb"
          },
          {
            text: "黄",
            nextMessage: "bye_2",
            nextAction: "yellow",
            nextPerson: "person_2yy"
          },
          {
            text: "戻る",
            nextMessage: "map",
            nextAction: "map",
            nextViewer: "map"
          }
        ]);
        break;
      case "red":
        setActionButtons([
          {
            text: "赤",
            nextMessage: "bye_2",
            nextAction: "byerr",
            nextKamereon: "赤"
          },
          {
            text: "青",
            nextMessage: "bye_2rb",
            nextAction: "byerb",
            nextKamereon: "紫"
          },
          {
            text: "黄",
            nextMessage: "bye_2",
            nextAction: "byery",
            nextKamereon: "橙"
          },
          {
            text: "戻る",
            nextMessage: "map",
            nextAction: "map",
            nextViewer: "map"
          }
        ]);
        break;
      case "blue":
        setActionButtons([
          {
            text: "赤",
            nextMessage: "bye_2rb",
            nextAction: "byerb",
            nextKamereon: "紫"
          },
          {
            text: "青",
            nextMessage: "bye_2",
            nextAction: "byebb",
            nextKamereon: "青"
          },
          {
            text: "黄",
            nextMessage: "bye_2",
            nextAction: "byeby",
            nextKamereon: "緑"
          },
          {
            text: "戻る",
            nextMessage: "map",
            nextAction: "map",
            nextViewer: "map"
          }
        ]);
        break;
      case "yellow":
        setActionButtons([
          {
            text: "赤",
            nextMessage: "bye_2",
            nextAction: "byery",
            nextKamereon: "橙"
          },
          {
            text: "青",
            nextMessage: "bye_2",
            nextAction: "byeby",
            nextKamereon: "緑"
          },
          {
            text: "黄",
            nextMessage: "bye_2",
            nextAction: "byeyy",
            nextKamereon: "黄"
          },
          {
            text: "戻る",
            nextMessage: "map",
            nextAction: "map",
            nextViewer: "map"
          }
        ]);
        break;
      case "byerr":
        setActionButtons([
          {
            text: "戻る",
            nextMessage: "map",
            nextAction: "map",
            nextViewer: "map"
          }
        ]);
        break;
      case "byerb":
        setActionButtons([
          {
            text: "次へ",
            nextMessage: "bye_2rb2",
            nextAction: "byerb2",
            nextViewer: "byerb2"
          }
        ]);
        break;
      case "byerb2":
        setActionButtons([
          {
            text: "戻る",
            nextMessage: "map",
            nextAction: "map",
            nextViewer: "map"
          }
        ]);
        break;
      case "byery":
        setActionButtons([
          {
            text: "戻る",
            nextMessage: "map",
            nextAction: "map",
            nextViewer: "map"
          }
        ]);
        break;
      case "byebb":
        setActionButtons([
          {
            text: "戻る",
            nextMessage: "map",
            nextAction: "map",
            nextViewer: "map"
          }
        ]);
        break;
      case "byeby":
        setActionButtons([
          {
            text: "戻る",
            nextMessage: "map",
            nextAction: "map",
            nextViewer: "map"
          }
        ]);
        break;
      case "byeyy":
        setActionButtons([
          {
            text: "戻る",
            nextMessage: "map",
            nextAction: "map",
            nextViewer: "map"
          }
        ]);
        break;
      case "person_3":
        setActionButtons([
          {
            text: "いま何時ですか",
            nextMessage: "bye_3",
            nextAction: "bye"
          },
          { text: "なんでもいです", nextMessage: "bye_3", nextAction: "bye" },
          {
            text: "戻る",
            nextMessage: "map",
            nextAction: "map",
            nextViewer: "map"
          }
        ]);
        break;
      case "person_4":
        setActionButtons([
          {
            text: "はい",
            nextMessage: "bye_3",
            nextAction: "bye"
          },
          {
            text: "いいえ",
            nextMessage: "bye_3",
            nextAction: "bye"
          },
          {
            text: "戻る",
            nextMessage: "map",
            nextAction: "map",
            nextViewer: "map"
          }
        ]);
        break;
      case "bye":
        setActionButtons([
          {
            text: "戻る",
            nextMessage: "map",
            nextAction: "map",
            nextViewer: "map"
          }
        ]);
        break;
      case "opening_1":
        setActionButtons([
          {
            text: "次へ",
            nextMessage: "opening_2",
            nextAction: "opening_2",
            nextPerson: "wani"
          }
        ]);
        break;
      case "opening_2":
        setActionButtons([
          {
            text: "次へ",
            nextMessage: "opening_3",
            nextAction: "opening_3",
            nextPerson: "niwatori"
          }
        ]);
        break;
      case "opening_3":
        setActionButtons([
          {
            text: "ゲームスタート！",
            nextMessage: "map",
            nextAction: "map",
            nextViewer: "map",
            nextProgress: 2
          }
        ]);
        break;
      case "map":
      default:
        setActionButtons([]);
        break;
    }
  };

  return (
    <Context.Provider
      value={{
        action,
        setAction
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
