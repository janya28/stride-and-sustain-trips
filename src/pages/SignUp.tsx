
import Layout from "@/components/layout/Layout";
import SignupForm from "@/components/auth/SignupForm";

const SignUp = () => {
  return (
    <Layout>
      <div className="athletic-container py-12 md:py-20">
        <h1 className="text-3xl font-heading font-bold text-center mb-12">Create Your Account</h1>
        <SignupForm />
      </div>
    </Layout>
  );
};

export default SignUp;
