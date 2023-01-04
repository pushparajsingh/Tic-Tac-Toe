import logo from "./logo.svg";
import "./App.css";
import { useEffect, useState } from "react";
import { ImCross } from "react-icons/im";
import { FaCheck } from "react-icons/fa";

function App() {
  const [state, setState] = useState({
    first: null,
    second: null,
    third: null,
    fourth: null,
    fifth: null,
    sixth: null,
    seventh: null,
    eight: null,
    ninth: null,
  });
  const [check, setCheck] = useState(null);

  useEffect(() => {
    const {
      first,
      second,
      third,
      fourth,
      fifth,
      sixth,
      seventh,
      eight,
      ninth,
    } = state;
    if (
      (first && second && third) ||
      (first && fourth && seventh) ||
      (first && fifth && ninth) ||
      (second && fifth && eight) ||
      (third && fifth && seventh) ||
      (fourth && fifth && sixth) ||
      (seventh && eight && ninth)
    ) {
      setTimeout(() => {
        alert("you win");
      }, 200);
    }

    if (
      (first == false && second == false && third == false) ||
      (first == false && fourth == false && seventh == false) ||
      (first == false && fifth == false && ninth == false) ||
      (second == false && fifth == false && eight == false) ||
      (third == false && fifth == false && seventh == false) ||
      (fourth == false && fifth == false && sixth == false) ||
      (seventh == false && eight == false && ninth == false)
    ) {
      setTimeout(() => {
        alert("you win");
      }, 200);
    }
  }, [state]);
  return (
    <div className="App">
      <h1> Tic-Tac-Toe</h1>
      <br />
      <div className="box">
        <div
          className="box1"
          onClick={() => setState({ ...state, first: check })}
        >
          {state.first == 0 ? (
            <ImCross className="trueFalse" />
          ) : state.first == 1 ? (
            <FaCheck className="trueFalse" />
          ) : (
            <FaCheck className="trueFalse" style={{ visibility: "hidden" }} />
          )}
        </div>
        <div
          className="box1"
          onClick={() => setState({ ...state, second: check })}
        >
          {state.second == 0 ? (
            <ImCross className="trueFalse" />
          ) : state.second == 1 ? (
            <FaCheck className="trueFalse" />
          ) : (
            <FaCheck className="trueFalse" style={{ visibility: "hidden" }} />
          )}
        </div>
        <div
          className="box1"
          onClick={() => setState({ ...state, third: check })}
        >
          {state.third == 0 ? (
            <ImCross className="trueFalse" />
          ) : state.third == 1 ? (
            <FaCheck className="trueFalse" />
          ) : (
            <FaCheck className="trueFalse" style={{ visibility: "hidden" }} />
          )}
        </div>
        <div
          className="box1"
          onClick={() => setState({ ...state, fourth: check })}
        >
          {state.fourth == 0 ? (
            <ImCross className="trueFalse" />
          ) : state.fourth == 1 ? (
            <FaCheck className="trueFalse" />
          ) : (
            <FaCheck className="trueFalse" style={{ visibility: "hidden" }} />
          )}
        </div>
        <div
          className="box1"
          onClick={() => setState({ ...state, fifth: check })}
        >
          {state.fifth == 0 ? (
            <ImCross className="trueFalse" />
          ) : state.fifth == 1 ? (
            <FaCheck className="trueFalse" />
          ) : (
            <FaCheck className="trueFalse" style={{ visibility: "hidden" }} />
          )}
        </div>
        <div
          className="box1"
          onClick={() => setState({ ...state, sixth: check })}
        >
          {state.sixth == 0 ? (
            <ImCross className="trueFalse" />
          ) : state.sixth == 1 ? (
            <FaCheck className="trueFalse" />
          ) : (
            <FaCheck className="trueFalse" style={{ visibility: "hidden" }} />
          )}
        </div>
        <div
          className="box1"
          onClick={() => setState({ ...state, seventh: check })}
        >
          {state.seventh == 0 ? (
            <ImCross className="trueFalse" />
          ) : state.seventh == 1 ? (
            <FaCheck className="trueFalse" />
          ) : (
            <FaCheck className="trueFalse" style={{ visibility: "hidden" }} />
          )}
        </div>
        <div
          className="box1"
          onClick={() => setState({ ...state, eight: check })}
        >
          {state.eight == 0 ? (
            <ImCross className="trueFalse" />
          ) : state.eight == 1 ? (
            <FaCheck className="trueFalse" />
          ) : (
            <FaCheck className="trueFalse" style={{ visibility: "hidden" }} />
          )}
        </div>
        <div
          className="box1"
          onClick={() => setState({ ...state, ninth: check })}
        >
          {state.ninth == 0 ? (
            <ImCross className="trueFalse" />
          ) : state.ninth == 1 ? (
            <FaCheck className="trueFalse" />
          ) : (
            <FaCheck className="trueFalse" style={{ visibility: "hidden" }} />
          )}
        </div>
      </div>
      <div id="btnbox">
        <button>
          <FaCheck className="btn-box " onClick={() => setCheck(true)} />
        </button>
        &nbsp;&nbsp;
        <button>
          <ImCross className="btn-box" onClick={() => setCheck(false)} />
        </button>
      </div>
      <button
        style={{ fontSize: "20px", marginTop: "20px" }}
        onClick={() => setState("")}
      >
        reset
      </button>
    </div>
  );
}

export default App;
