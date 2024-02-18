import { cva, VariantProps } from "class-variance-authority";

const card = cva([
  "w-max",
  "bg-white",
  "rounded-md",
  "px-6",
  "py-3",
  "shadow-sm",
]);

interface CardProps
  extends VariantProps<typeof card>,
    React.HTMLAttributes<HTMLDivElement> {}

const Card = ({ className, ...props }: CardProps) => {
  return <div className={card({ className })} {...props} />;
};

export default Card;
