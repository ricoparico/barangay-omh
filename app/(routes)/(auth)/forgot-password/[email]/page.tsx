import {
  isPasswordResetPendingAction,
  generatePasswordResetTokenAction,
  isEmailValidToResetPasswordAction,
} from "@/app/actions/user";
import Barangay174Logo from "@/components/logo/Barangay174Logo";
import { redirect } from "next/navigation";

export default async function page({
  params,
}: {
  params: Promise<{ email: string }>;
}) {
  const BASE_URL = process.env.BASE_URL || "http://localhost:3000";

  const { email } = await params;

  const formData = new FormData();
  formData.append("email", decodeURIComponent(email));

  const isEmailValid = await isEmailValidToResetPasswordAction(null, formData);

  if (isEmailValid.status === "failed") {
    redirect("/login");
  }

  if (!(await isPasswordResetPendingAction(decodeURIComponent(email)))) {
    await generatePasswordResetTokenAction(decodeURIComponent(email));
  }

  return (
    <div className="w-screen h-screen flex flex-col items-center bg-orange-200 p-4">
      <div className="bg-white my-auto flex flex-col items-center rounded-md shadow-md gap-2 p-8">
        <Barangay174Logo size={80} />
        <h1 className="font-semibold text-2xl text-center">Forgot Password</h1>
        <h2 className="text-center">
          We've sent a reset password link to
          <br />
          <span className="font-semibold">
            {decodeURIComponent(email)}
          </span>{" "}
        </h2>
        <a className="underline" href={`${BASE_URL}/login`}>
          Go To Login
        </a>
      </div>
    </div>
  );
}
