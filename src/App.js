import React, { useEffect, useState } from "react";
import "./App.css";
import Avatar from "./components/Avatar";
import { PartList } from "./components/PartList";
import Tab from "./components/Tab";
function App() {
  const total = {
    body: 17,
    eyes: 17,
    hair: 73,
    mouth: 24,
    eyebrows: 15,
    glasses: 17,
    clothing1: 5,
    clothing2: 5,
    clothing3: 9,
    facialHair: 18,
    hats: 29,
    earring: 33,
    neckwear: 19,
  };

  const [body, setBody] = useState(0);
  const [eyes, setEyes] = useState(2);
  const [eyebrows, setEyebrow] = useState(2);
  const [hair, setHair] = useState(0);
  const [clothing1, setClothing1] = useState(0);
  const [clothing2, setClothing2] = useState(0);
  const [clothing3, setClothing3] = useState(0);
  const [mouth, setMouth] = useState(2);
  const [glasses, setGlasses] = useState(2);
  const [facialHair, setFacialHair] = useState(2);
  const [earring, setEarring] = useState(0);
  const [hats, setHats] = useState(0);
  const [neckwear, setNeckwear] = useState(0);
  const [stateBody, setStateBody] = useState(1);
  const [stateFace, setStateFace] = useState(1);
  const [stateAccessory, setStateAccessory] = useState(1);

  const actionAccessory = (index) => {
    setStateAccessory(index);
  };
  const actionBody = (index) => {
    setStateBody(index);
  };
  const actionFace = (index) => {
    setStateFace(index);
  };
  const randomize = () => {
    setBody(Math.floor(Math.random() * total.body));
    setEyes(Math.floor(Math.random() * total.eyes));
    setEyebrow(Math.floor(Math.random() * total.eyebrows));
    setHair(Math.floor(Math.random() * total.hair));
    setMouth(Math.floor(Math.random() * total.mouth));
    setGlasses(Math.floor(Math.random() * total.glasses));
    setClothing1(Math.floor(Math.random() * total.clothing1));
    setClothing2(Math.floor(Math.random() * total.clothing2));
    setClothing3(Math.floor(Math.random() * total.clothing3));
    setFacialHair(Math.floor(Math.random() * total.facialHair));
    setEarring(Math.floor(Math.random() * total.earring));
    setHats(Math.floor(Math.random() * total.hats));
    setNeckwear(Math.floor(Math.random() * total.neckwear));
  };
  useEffect(() => {
    randomize();
  }, []);

  return (
    <div className="App">
      <div className="header">
        <div className="title">avatar</div>
        <div className="subtitle">create your own character</div>
        {/* <div className="divider"></div> */}
      </div>
      <div className="avatar-group gap-30">
        <div>
          <div className="pixel-borders avatar-wrapper">
            <Avatar
              body={body}
              eyes={eyes}
              hair={hair}
              clothing1={clothing1}
              clothing2={clothing2}
              clothing3={clothing3}
              mouth={mouth}
              eyebrow={eyebrows}
              glasses={glasses}
              facialHair={facialHair}
              earring={earring}
              hats={hats}
              neckwear={neckwear}
            />
            <div className="text-center">
              <button className="button" onClick={() => randomize()}>
                Randomize!
              </button>
            </div>
          </div>
        </div>
        <div>
          <div className="box">
            <h2>BODY</h2>
            <div className="tabs">
              <Tab
                state={stateBody}
                action={actionBody}
                number={1}
                name={"Skin"}
              />
              <Tab
                state={stateBody}
                action={actionBody}
                number={2}
                name={"Hair"}
              />
              <Tab
                state={stateBody}
                action={actionBody}
                number={3}
                name={"Clothing (1)"}
              />
              <Tab
                state={stateBody}
                action={actionBody}
                number={4}
                name={"Clothing (2)"}
              />
              <Tab
                state={stateBody}
                action={actionBody}
                number={5}
                name={"Clothing (3)"}
              />
            </div>
            {/* contents */}
            <div className="contents">
              <div
                className={`${
                  stateBody === 1 ? "content active-content" : "content"
                }`}
              >
                <PartList
                  total={total.body}
                  path="body"
                  set={setBody}
                  selected={body}
                />
              </div>
              <div
                className={`${
                  stateBody === 2 ? "content active-content" : "content"
                }`}
              >
                <PartList
                  total={total.hair}
                  path="hair"
                  set={setHair}
                  selected={hair}
                />
              </div>
              <div
                className={`${
                  stateBody === 3 ? "content active-content" : "content"
                }`}
              >
                <PartList
                  total={total.clothing1}
                  path="clothes/layer_1"
                  set={setClothing1}
                  selected={clothing1}
                />
              </div>
              <div
                className={`${
                  stateBody === 4 ? "content active-content" : "content"
                }`}
              >
                <PartList
                  total={total.clothing2}
                  path="clothes/layer_2"
                  set={setClothing2}
                  selected={clothing2}
                />
              </div>
              <div
                className={`${
                  stateBody === 5 ? "content active-content" : "content"
                }`}
              >
                <PartList
                  total={total.clothing3}
                  path="clothes/layer_3"
                  set={setClothing3}
                  selected={clothing3}
                  zoom={2}
                  top="-15px"
                />
              </div>
            </div>
          </div>
          <div className="box">
            <h2>FACE</h2>
            <div className="tabs">
              <Tab
                state={stateFace}
                action={actionFace}
                number={1}
                name={"Eye"}
              />
              <Tab
                state={stateFace}
                action={actionFace}
                number={2}
                name={"Eyebrow"}
              />
              <Tab
                state={stateFace}
                action={actionFace}
                number={3}
                name={"Facial hair"}
              />
              <Tab
                state={stateFace}
                action={actionFace}
                number={4}
                name={"Mouth"}
              />
            </div>
            {/* contents */}
            <div className="contents">
              <div
                className={`${
                  stateFace === 1 ? "content active-content" : "content"
                }`}
              >
                <PartList
                  total={total.eyes}
                  path="eyes"
                  set={setEyes}
                  selected={eyes}
                  zoom={2.5}
                  top="35px"
                />
              </div>
              <div
                className={`${
                  stateFace === 2 ? "content active-content" : "content"
                }`}
              >
                <PartList
                  total={total.eyebrows}
                  path="eyebrows"
                  set={setEyebrow}
                  zoom={2}
                  top="40px"
                  selected={eyebrows}
                />
              </div>
              <div
                className={`${
                  stateFace === 3 ? "content active-content" : "content"
                }`}
              >
                <PartList
                  total={total.facialHair}
                  path="facial_hair"
                  set={setFacialHair}
                  zoom={1.5}
                  selected={facialHair}
                />
              </div>
              <div
                className={`${
                  stateFace === 4 ? "content active-content" : "content"
                }`}
              >
                <PartList
                  total={total.mouth}
                  path="mouths"
                  set={setMouth}
                  zoom={2.5}
                  selected={mouth}
                />
              </div>
            </div>
          </div>
          <div className="box">
            <h2>ACCESORIES</h2>
            <div className="tabs">
              <Tab
                state={stateAccessory}
                action={actionAccessory}
                number={1}
                name={"Earring"}
              />
              <Tab
                state={stateAccessory}
                action={actionAccessory}
                number={2}
                name={"Glasses"}
              />
              <Tab
                state={stateAccessory}
                action={actionAccessory}
                number={3}
                name={"Hats"}
              />
              <Tab
                state={stateAccessory}
                action={actionAccessory}
                number={4}
                name={"Neckwear"}
              />
            </div>
            {/* contents */}
            <div className="contents">
              <div
                className={`${
                  stateAccessory === 1 ? "content active-content" : "content"
                }`}
              >
                <PartList
                  total={total.earring}
                  path="accessories/earrings"
                  set={setEarring}
                  selected={earring}
                  zoom={1.5}
                />
              </div>
              <div
                className={`${
                  stateAccessory === 2 ? "content active-content" : "content"
                }`}
              >
                <PartList
                  total={total.glasses}
                  path="accessories/glasses"
                  set={setGlasses}
                  selected={glasses}
                />
              </div>
              <div
                className={`${
                  stateAccessory === 3 ? "content active-content" : "content"
                }`}
              >
                <PartList
                  total={total.hats}
                  path="accessories/hats"
                  set={setHats}
                  selected={hats}
                  top={30}
                />
              </div>
              <div
                className={`${
                  stateAccessory === 4 ? "content active-content" : "content"
                }`}
              >
                <PartList
                  total={total.neckwear}
                  path="accessories/neckwear"
                  set={setNeckwear}
                  selected={neckwear}
                  zoom={1.5}
                  top={5}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
