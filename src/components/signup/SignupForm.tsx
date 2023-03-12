type FormProps = {} & React.ComponentProps<"form">;

const SignupForm = (props: FormProps) => {
  return (
    <form
      {...props}
      className="border border-black rounded py-4 px-2 flex flex-col gap-3 w-full max-w-xl"
    ></form>
  );
};

export default SignupForm;
