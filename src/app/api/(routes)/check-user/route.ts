import connectDB, { db } from "@/lib/mongodb";
import User from "@/model/user";
import { NextResponse } from "next/server";

export const POST = async (req: Request) => {
  try {
    await connectDB();

    const collectionCount = (await db.listCollections().toArray()).length;
    console.log(collectionCount);

    if (collectionCount === 0) {
      console.log("Database empty, creating collection...");
      await db.createCollection("users", { validationLevel: "strict" });
      
      console.log("Collection created successfully!");
    }

    const { userEmail } = await req.json();

    console.log(userEmail);

    const userExist = await User.findOne({ user_email: userEmail });
    console.log("User Check: ", userExist, "\n");

    // Check if userExist is falsy (null or undefined)
    const u_mail = userExist ? userExist.user_email : null;

    if (userExist) {
      return NextResponse.json({
        u_mail,
        message: "Check if user Exist",
        status: 200,
      });
    }

    // Return null if user doesn't exist
    return NextResponse.json({
      u_mail,
      message: "User not found",
      status: 200,
    });

  } catch (error) {
    console.log("User Exist Error/api/check-user", error);
    return NextResponse.json({
      message: "Check user Exist Error",
      status: 405,
    });
  }
};
