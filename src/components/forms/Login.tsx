import Card from "../ui/Card";
import Input from "../ui/Input";
import Button from "../ui/Button";
import Container from "../ui/Container";

const Login: React.FC = () => {
  return (
    <Card className="w-[400px] h-[500px] rounded-2xl font-poppins">
      <h1 className="font-bold font-poppins text-2xl text-black text-center">
        Login
      </h1>
      <p className="my-6 mx-2 text-sm text-center font-poppins">
        Hey, Enter your details to get login to your account
      </p>
      <Container className="flex flex-col gap-4 mt-4">
        <Input type="text" placeholder="Enter username or email" />
        <Input type="password" placeholder="Password" />
        <p className="text-xs">Having trouble in logging in?</p>
        <Button className="bg-amber-400/60">Login</Button>
      </Container>
      <p className="mt-4 text-sm text-center font-poppins">
        -- Or Login with --
      </p>
      <Container className="mt-6 flex justify-center gap-4">
        <Button className="outline outline-1 outline-zinc-600">Google</Button>
        <Button className="outline outline-1 outline-zinc-600">Github</Button>
        <Button className="outline outline-1 outline-zinc-600">Discord</Button>
      </Container>
      <p className="mt-6 text-xs text-center text-slate-600">
        Don't have an account? Sign up
      </p>
    </Card>
  );
};

export default Login;
