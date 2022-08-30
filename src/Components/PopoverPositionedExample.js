import Button from "react-bootstrap/Button";
import OverlayTrigger from "react-bootstrap/OverlayTrigger";
import Popover from "react-bootstrap/Popover";

function PopoverPositionedExample({ description }) {
  return (
    <>
      {["right"].map((placement) => (
        <OverlayTrigger
          trigger="click"
          key={placement}
          placement={placement}
          overlay={
            <Popover id={`popover-positioned-${placement}`}>
              <Popover.Header as="h3">Information</Popover.Header>
              <Popover.Body>{description}</Popover.Body>
            </Popover>
          }
        >
          <Button variant="secondary">Click to see Description</Button>
        </OverlayTrigger>
      ))}
    </>
  );
}

export default PopoverPositionedExample;
