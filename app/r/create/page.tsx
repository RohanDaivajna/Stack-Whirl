"use client";

import { createSubreddit } from "@/app/actions";
import { SubmitButton } from "@/app/components/SubmitButtons";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Separator } from "@/components/ui/separator";
import { useToast } from "@/components/ui/use-toast";
import Link from "next/link";
import { useEffect } from "react";
import { useFormState } from "react-dom";

const initalState = {
  message: "",
  status: "",
};

export default function SubredditPage() {
  const [state, formAction] = useFormState(createSubreddit, initalState);
  const { toast } = useToast();

  useEffect(() => {
    if (state.status === "error") {
      toast({
        title: "Error",
        description: state.message,
        variant: "destructive",
      });
    }
  }, [state, toast]);
  return (
    <div className="max-w-[1000px] mx-auto flex flex-col mt-4 px-2 sm:px-4">
      <form action={formAction}>
        <h1 className="text-2xl sm:text-3xl font-extrabold tracking-tight">
          Create Subreddit
        </h1>
        <Separator className="my-4" />
        <Label className="text-base sm:text-lg">Name</Label>
        <p className="text-sm sm:text-base text-muted-foreground">
          Subreddit names including capitalization cannot be changed!
        </p>

        <div className="relative mt-3">
          <p className="absolute left-0 w-8 flex items-center justify-center h-full text-muted-foreground">
            r/
          </p>
          <Input
            name="name"
            required
            className="pl-6"
            minLength={2}
            maxLength={21}
          />
        </div>
        <p className="mt-1 text-destructive">{state.message}</p>

        <div className="w-full flex flex-col sm:flex-row mt-5 gap-3 sm:gap-x-5 justify-end">
          <Button variant="secondary" asChild>
            <Link href="/">Cancel</Link>
          </Button>
          <SubmitButton text="Create Subreddit" />
        </div>
      </form>
    </div>
  );
}
