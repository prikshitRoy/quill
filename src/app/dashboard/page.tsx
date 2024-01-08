import Dashboard from "@/components/Dashboard";
import { db } from "@/db";
import { getKindeServerSession } from "@kinde-oss/kinde-auth-nextjs/server";
import { redirect } from "next/navigation";

const Page = async () => {
  const { getUser } = getKindeServerSession(); //! It gets the user session
  const user = await getUser();

  //! If the user or the user’s id doesn’t exist, it redirects to the auth-callback page.
  if (!user || !user.id) redirect("/auth-callback?origin=dashboard");

  //! Finding the first user in the database with the same id as the current user.
  const dbUser = await db.user.findFirst({
    where: {
      id: user.id,
    },
  });
  if (!dbUser) redirect("/auth-callback?origin=dashboard");

  //!User data in serverSide: Look at your Terminal
  // console.log("User Data:", await getUser());

  return <Dashboard />;
};

export default Page;
