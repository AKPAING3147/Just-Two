"use client";

import { useRouter } from "next/navigation";
import { deletePost } from "@/db/action";
import { useState } from "react";
import { toast } from "sonner";

export default function DeleteButton({ postId }: { postId: number }) {
    const router = useRouter();
    const [isDeleting, setIsDeleting] = useState(false);

    const handleDeleteClick = () => {
        toast("ARE YOU SURE?", {
            description: "THIS ACTION CANNOT BE UNDONE.",
            action: {
                label: "CONFIRM DELETE",
                onClick: performDelete,
            },
            cancel: {
                label: "CANCEL",
                onClick: () => console.log('Cancelled'),
            },
            duration: 5000,
        });
    };

    const performDelete = async () => {
        setIsDeleting(true);
        try {
            await deletePost(postId);
            toast.success("ENTRY DELETED PERMANENTLY");
            router.push("/");
        } catch (error) {
            console.error("Error deleting post:", error);
            toast.error("FAILED TO DELETE ENTRY");
            setIsDeleting(false);
        }
    };

    return (
        <button
            onClick={handleDeleteClick}
            disabled={isDeleting}
            className="px-6 py-3 bg-red-600 text-white border-2 border-black font-bold uppercase brutal-shadow hover:brutal-shadow-hover active:brutal-shadow-active transition-all disabled:opacity-50 disabled:cursor-not-allowed hover:bg-red-700 w-full md:w-auto"
        >
            {isDeleting ? "DELETING..." : "DELETE_PERMANENTLY"}
        </button>
    );
}
