import { VariantProps, cva, cx } from "class-variance-authority";

const button = cva(
  [
    "text-black",
    "cursor-pointer",
    "font-semibold",
    "px-4",
    "py-2",
    "rounded-md",
  ],
  {
    variants: {
      type: {
        glass: ["bg-white/10", "text-white"],
      },
      variant: {
        primary: ["bg-primary", "text-white"],
        secondary: ["bg-secondary", "text-black"],
      },
      rounded: {
        md: ["rounded-md"],
        sm: ["rounded-sm"],
        full: ["rounded-full"],
      },
    },
  }
);

export interface ButtonProps
  extends VariantProps<typeof button>,
    React.HTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
}

const Button = ({
  type,
  variant,
  rounded,
  children,
  className,
  ...props
}: ButtonProps) => {
  return (
    <button
      {...props}
      className={cx(button({ type, variant, rounded }), className)}
    >
      {children}
    </button>
  );
};

export default Button;
