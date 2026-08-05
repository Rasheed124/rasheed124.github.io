// // app/api/revalidate/route.ts

// import { revalidateTag } from "next/cache";
// import { type NextRequest, NextResponse } from "next/server";
// import { parseBody } from "next-sanity/webhook";

// export async function POST(req: NextRequest) {
//   try {
//     const { isValidSignature, body } = await parseBody<{
//       _type: string;
//       slug?: { current?: string };
//     }>(req, process.env.SANITY_REVALIDATE_SECRET);

//     if (!isValidSignature) {
//       return new NextResponse("Invalid Signature", { status: 401 });
//     }

//     if (!body?._type) {
//       return new NextResponse("Bad Request", { status: 400 });
//     }

//     revalidateTag(body._type, "max");

//     if (body.slug?.current) {
//       revalidateTag(`${body._type}:${body.slug.current}`, "max");
//     }

//     return NextResponse.json({
//       status: 200,
//       revalidated: true,
//       now: Date.now(),
//       body,
//     });
//   } catch (err: any) {
//     console.error("[Revalidate Error]:", err);
//     return new NextResponse(err.message || "Internal Server Error", {
//       status: 500,
//     });
//   }
// }




// app/api/revalidate/route.ts

import { revalidateTag } from "next/cache";
import { type NextRequest, NextResponse } from "next/server";
import { parseBody } from "next-sanity/webhook";

export async function POST(req: NextRequest) {
  try {
    const { isValidSignature, body } = await parseBody<{
      _type: string;
      slug?: { current?: string };
    }>(req, process.env.SANITY_REVALIDATE_SECRET);

    if (!isValidSignature) {
      return new NextResponse("Invalid Signature", { status: 401 });
    }

    if (!body?._type) {
      return new NextResponse("Bad Request", { status: 400 });
    }

    // 1. Revalidate the raw document _type (e.g., "homePage", "project", "page")
    revalidateTag(body._type, "max");

    // 2. If it's the home page document, clear the "home" and "page" tags explicitly
    if (body._type === "home" || body._type === "homePage" || body._type === "page") {
      revalidateTag("home", "max");
      revalidateTag("page", "max");
    }

    // 3. Revalidate specific slug tag if present
    if (body.slug?.current) {
      revalidateTag(`${body._type}:${body.slug.current}`, "max");
    }

    return NextResponse.json({
      status: 200,
      revalidated: true,
      now: Date.now(),
      body,
    });
  } catch (err: any) {
    console.error("[Revalidate Error]:", err);
    return new NextResponse(err.message || "Internal Server Error", {
      status: 500,
    });
  }
}