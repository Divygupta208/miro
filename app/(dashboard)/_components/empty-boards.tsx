"use client";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import { api } from "@/convex/_generated/api";

import { useOrganization } from "@clerk/nextjs";
import { useRouter } from "next/navigation";
import { useMutation } from "convex/react";

export const Emptyboards = () => {
  const router = useRouter();
  const create = useMutation(api.board.create);
  const { organization } = useOrganization();

  const onClick = () => {
    if (!organization) return;
    create({
      title: "Untitled",
      orgId: organization.id,
    });
    //   .then((id) => {
    //     toast.success("Board created");
    //     router.push(`/board/${id}`);
    //   })
    //   .catch(() => toast.error("Failed to create board"));
  };
  return (
    <div className="h-full flex flex-col items-center justify-center">
      <Image src="/note.svg" height={200} width={200} alt="Empty" />
      <h2 className="text-2xl font-semibold mt-6">Create your first board!</h2>
      <p className="text-muted-foreground text-sm mt-2">
        Start by creating a board for your organization
      </p>
      <div className="mt-6">
        <Button
          //   className="disabled:cursor-not-allowed"
          //   disabled={pending}
          onClick={onClick}
          size="lg"
        >
          Create board
        </Button>
      </div>
    </div>
  );
};
