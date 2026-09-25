import React, { forwardRef, type HTMLAttributes, type ReactNode, type CSSProperties, Children, cloneElement, isValidElement } from "react";
import "./Layout.css";

export type StackGap = "xs" | "sm" | "md" | "lg" | "xl" | number | string;

export interface StackProps extends HTMLAttributes<HTMLDivElement> {
  direction?: "row" | "column";
  gap?: StackGap;
  align?: CSSProperties["alignItems"];
  justify?: CSSProperties["justifyContent"];
  wrap?: boolean;
  divider?: ReactNode;
  as?: React.ElementType;
  className?: string;
}

export const Stack = forwardRef<HTMLDivElement, StackProps>(
  (
    {
      direction = "column",
      gap = "md",
      align,
      justify,
      wrap = false,
      divider,
      as: Component = "div",
      children,
      className = "",
      style,
      ...props
    },
    ref
  ) => {
    const isNamedGap = typeof gap === "string" && ["xs", "sm", "md", "lg", "xl"].includes(gap);
    const customGap = isNamedGap ? undefined : typeof gap === "number" ? `${gap}px` : gap;

    const validChildren = Children.toArray(children).filter(Boolean);

    let content = children;
    if (divider && validChildren.length > 1) {
      content = validChildren.reduce<ReactNode[]>((acc, child, index) => {
        acc.push(child);
        if (index < validChildren.length - 1) {
          acc.push(
            isValidElement(divider)
              ? cloneElement(divider, { key: `stack-divider-${index}` })
              : <span key={`stack-divider-${index}`}>{divider}</span>
          );
        }
        return acc;
      }, []);
    }

    return (
      <Component
        ref={ref as any}
        className={[
          "bf-stack",
          `bf-stack--${direction}`,
          isNamedGap && `bf-stack--gap-${gap}`,
          className,
        ]
          .filter(Boolean)
          .join(" ")}
        style={{
          alignItems: align,
          justifyContent: justify,
          flexWrap: wrap ? "wrap" : undefined,
          gap: customGap,
          ...style,
        }}
        {...(props as any)}
      >
        {content}
      </Component>
    );
  }
);

Stack.displayName = "Stack";

export const HStack = forwardRef<HTMLDivElement, Omit<StackProps, "direction">>(
  (props, ref) => <Stack ref={ref} direction="row" {...props} />
);
HStack.displayName = "HStack";

export const VStack = forwardRef<HTMLDivElement, Omit<StackProps, "direction">>(
  (props, ref) => <Stack ref={ref} direction="column" {...props} />
);
VStack.displayName = "VStack";
