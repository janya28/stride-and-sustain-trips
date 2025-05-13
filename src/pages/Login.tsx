
import Layout from "@/components/layout/Layout";
import LoginForm from "@/components/auth/LoginForm";

const Login = () => {
  return (
    <Layout>
      <div className="athletic-container py-12 md:py-20">
        <h1 className="text-3xl font-heading font-bold text-center mb-12">Welcome Back</h1>
        <LoginForm />
      </div>
    </Layout>
  );
};

export default Login;
