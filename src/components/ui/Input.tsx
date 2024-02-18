import { cva, cx } from "class-variance-authority";

const input = cva([
  "block w-full rounded-md border border-gray-300 px-3 py-2 text-md shadow-sm focus:border-indigo-500 focus:outline-none focus:ring-1 focus:ring-indigo-500 sm:text-sm",
]);
interface InputProps extends React.HTMLAttributes<HTMLInputElement> {}

const Input = ({ className, ...props }: InputProps) => {
  return <input className={cx(input(), className)} {...props} />;
};

export default Input;
