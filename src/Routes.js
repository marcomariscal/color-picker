import React, { useState } from "react";
import {
  Route,
  Switch,
  Redirect,
  useParams,
  useHistory,
} from "react-router-dom";
import ColorPickerForm from "./ColorPickerForm";
import ColorList from "./ColorList";
import ColorPage from "./ColorPage";

const Routes = () => {
  const [colors, setColors] = useState([]);
  const [currColor, setCurrColor] = useState({});

  const { name } = useParams();
  const history = useHistory();

  const addColor = (color) => {
    setColors((colors) => [...colors, color]);
  };

  const findColor = () => {
    for (const color of colors) {
      if (color.name === name) {
        setCurrColor(color);
      }
    }
  };

  return (
    <div>
      <Switch>
        <Route exact path="/colors">
          <ColorList colors={colors} />
        </Route>
        <Route exact path="/colors/new">
          <ColorPickerForm addColor={addColor} />
        </Route>
        <Route path="/colors/:name" render={findColor}>
          <ColorPage color={currColor} history={history} />;
        </Route>
        <Redirect to="/colors" />
      </Switch>
    </div>
  );
};

export default Routes;
