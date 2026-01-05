import { NextResponse } from "next/server";
import { writeFile, mkdir } from "fs/promises";
import path from "path";

export async function POST(req: Request) {
    try {
        const formData = await req.formData();
        const file = formData.get("file") as File;

        if (!file) {
            return NextResponse.json({ error: "No file uploaded" }, { status: 400 });
        }

        const bytes = await file.arrayBuffer();
        const buffer = Buffer.from(bytes);

        // Sanitize filename
        const filename = Date.now() + "-" + file.name.replace(/[^a-zA-Z0-9.]/g, "_");
        const publicDir = path.join(process.cwd(), "public", "audio");

        // Ensure directory exists
        await mkdir(publicDir, { recursive: true });

        const filePath = path.join(publicDir, filename);
        await writeFile(filePath, buffer);

        return NextResponse.json({ url: `/audio/${filename}` });
    } catch (error) {
        console.error("Upload error:", error);
        return NextResponse.json({ error: "Upload failed" }, { status: 500 });
    }
}
