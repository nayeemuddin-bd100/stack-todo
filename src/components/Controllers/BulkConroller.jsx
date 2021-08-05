import PropTypes from "prop-types";
import React from "react";
import { Button, ButtonGroup } from "reactstrap";


const BulkConroller = ({ clearSelected,clearCompleted,reset }) => {
  return (
    <div>
      <ButtonGroup>
        <Button color="danger" onClick={clearSelected}>
          Clear Selected 
        </Button>
        <Button color="danger" onClick={clearCompleted}>
          Clear Completed
        </Button>
        <Button color="danger" onClick={reset}>
          Reset
        </Button>
      </ButtonGroup>
    </div>
  );
}; 

BulkConroller.propTypes = {
  clearSelected: PropTypes.func.isRequired,
  clearCompleted: PropTypes.func.isRequired,
  reset: PropTypes.func.isRequired,
};

export default BulkConroller;
