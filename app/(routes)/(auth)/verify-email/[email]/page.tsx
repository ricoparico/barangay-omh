import { getUserByEmailAction } from "@/app/actions/user";
import Barangay174Logo from "@/components/logo/Barangay174Logo";
import { redirect } from "next/navigation";
import {
  generateEmailVerificationToken,
  isEmailVerificationPendingAction,
} from "@/app/actions/user";

async function page({ params }: { params: Promise<{ email: string }> }) {
  const { email } = await params;

  const user = await getUserByEmailAction(decodeURIComponent(email));

  // validate email here if it exists, email is already verified, its email type is google, and there is a pending request token
  if (!user) redirect("/");
  if (user.is_verified) redirect("/");
  if (user.email_type === "google") redirect("/");

  const isPending = await isEmailVerificationPendingAction(
    decodeURIComponent(email)
  );

  let message = "We've already sent a verification link to";

  if (!isPending) {
    await generateEmailVerificationToken(decodeURIComponent(email));
    message = "We've sent a verification link to";
  }
  return (
    <div className="w-screen h-screen flex flex-col items-center bg-orange-200 p-4">
      <div className="bg-white my-auto flex flex-col items-center rounded-md shadow-md gap-2 p-8">
        <Barangay174Logo size={80} />
        <h1 className="font-semibold text-2xl text-center">
          Please check your email
        </h1>
        <h2 className="text-center">
          {" "}
          You need to verify that this email is active
          <br />
          {message}{" "}
          <span className="font-semibold">{decodeURIComponent(email)}</span>
        </h2>
      </div>
    </div>
  );
}

export default page;
