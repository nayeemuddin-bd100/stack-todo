import PropTypes from "prop-types";
import React, { useState } from "react";
import { Button, ButtonGroup } from "reactstrap";

const FilterController = ({ handleFilter }) => {
  const [color, setColor] = useState({
    all: "bg-danger",
    running: "",
    completed: "",
  });
  const handleClick = (color) => {
    if (color === "all") {
      setColor({
        all: "bg-danger",
        running: "",
        completed: "",
      });
    } else if (color === "running") {
      setColor({
        all: "",
        running: "bg-danger",
        completed: "",
      });
    } else if (color === "completed") {
      setColor({
        all: "",
        running: "",
        completed: "bg-danger",
      });
    }
  };
  return (
    <div>
      <ButtonGroup>
        <Button className={color.all} onClick={() => handleFilter("all")}>
          <span onClick={() => handleClick("all")}>All</span>
        </Button>
        <Button
          className={color.running}
          onClick={() => handleFilter("running")}
        >
          <span onClick={() => handleClick("running")}>Running</span>
        </Button>
        <Button className={color.completed} onClick={() => handleFilter("completed")}>
          <span onClick={() => handleClick("completed")}>Completed</span>
        </Button>
      </ButtonGroup>
    </div>
  );
};

FilterController.propTypes = {
  handleFilter: PropTypes.func.isRequired,
};

export default FilterController;
