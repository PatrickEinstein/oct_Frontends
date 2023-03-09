type ButtonProps = {
  text: string;
  variant: "primary" | "secondary";
} & React.ComponentProps<"button">;

const Button = ({ text, variant, className, ...rest }: ButtonProps) => {
  return (
    <button
      {...rest}
      className={`bg-${variant} text-white font-semibold flex p-0 px-4 rounded ${className}`}
    >
      {text}
    </button>
  );
};

export default Button;
