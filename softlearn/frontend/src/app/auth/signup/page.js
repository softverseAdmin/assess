"use client";
import SignUp from "../../components/Auth/SignUp";
import { QueryClient, QueryClientProvider } from "react-query";


const page = () => {

  const queryClient = new QueryClient();
  return (
    <div>
      <QueryClientProvider client={queryClient}>
        <SignUp />
      </QueryClientProvider>
    </div>
  );
};

export default page;
