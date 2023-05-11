import { ButtonGroup, ButtonGroupProps, forwardRef } from "@chakra-ui/react";

export const ToolbarButtonGroup = forwardRef<ButtonGroupProps, "div">(
  ({ children, ...props }, ref) => {
    return (
      <ButtonGroup ref={ref} size="sm" variant="solid" isAttached {...props}>
        {children}
      </ButtonGroup>
    );
  }
);
