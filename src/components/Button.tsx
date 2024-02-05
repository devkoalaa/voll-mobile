import { Button as NativeButton, IButtonProps } from "native-base";
import { ReactNode } from "react";

interface ButtonProps extends IButtonProps {
  children: ReactNode;
}

export function Button({ children, ...rest }: ButtonProps) {
  return (
    <NativeButton
      w={"100%"}
      bg={"blue.800"}
      mt={10}
      borderRadius={"lg"}
      {...rest}
    >
      {children}
    </NativeButton>
  );
}
