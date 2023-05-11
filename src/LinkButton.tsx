import { forwardRef, IconButton, IconButtonProps } from "@chakra-ui/react";
import { ReactElement } from "react";

type LinkButtonProps = Omit<IconButtonProps, "icon"> & {
  children: ReactElement;
};

export const LinkButton = forwardRef<LinkButtonProps, "button">(
  ({ children, ...props }, ref) => {
    return (
      <IconButton
        ref={ref}
        {...props}
        icon={children}
        size="sm"
        variant="ghost"
      />
    );
  }
);
