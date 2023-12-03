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

    const userEmail = await req.json();
    const check_email = userEmail.user_email;
    console.log(check_email);

    const userExist = await User.findOne({ user_email: check_email });
    console.log("User Check: ", userExist, "\n");
    
    return NextResponse.json({
        userExist,
        message: "Check is user Exist",
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
