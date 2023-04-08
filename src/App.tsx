import ListGroup from "./components/ListGroup";
import React from "react";
import { successNotification } from "./notification";
function App() {
  // let items = ["NewYork", "Sanfrancisco", "Tokyo", "London", "Paris"];
  let items = [
    { name: "NewYork", disc: "This is the City of United States" },
    { name: "Kabul", disc: "This is the Capital of Afghanistan" },
    { name: "Tehran", disc: "This is the Capital of Tehran" }
  ];

  // let names = ["Ahmad", "Shafiq", "Iqbaal", "Haroon", "Zabi", "Qodos"];
  const handleSelectedItem = (name: String, Disc: String) => {
    successNotification(name, Disc);
  };
  return (
    <>
      <div>
        <ListGroup
          items={items}
          heading="Cities"
          onSelectItem={handleSelectedItem}
        />
        {/* <ListGroup items={names} heading="Names" /> */}
      </div>
    </>
  );
}

export default App;
