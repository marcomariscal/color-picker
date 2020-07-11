import React, { useState } from "react";
import { Route, Switch, Redirect, useHistory } from "react-router-dom";
import ColorPickerForm from "./ColorPickerForm";
import ColorList from "./ColorList";
import ColorPage from "./ColorPage";

const Routes = () => {
  const [colors, setColors] = useState([]);

  const history = useHistory();

  const addColor = (color) => {
    setColors((colors) => [...colors, color]);
  };

  const renderColor = (props) => {
    const { name } = props.match.params;
    const color = colors.find((color) => color.name === name);
    return <ColorPage {...props} color={color} history={history} />;
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
        <Route path="/colors/:name" render={renderColor}></Route>
        <Redirect to="/colors" />
      </Switch>
    </div>
  );
};

export default Routes;
