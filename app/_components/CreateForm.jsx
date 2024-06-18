"use client";
import React, { useState } from "react";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Textarea } from "@/components/ui/textarea";

import { Button } from "@/components/ui/button";
const CreateForm = () => {
  const [openDialog, setopenDialog] = useState(false);
  const [userInput, setuserInput] = useState("");
  const onCreateForm = () => {};
  return (
    <div>
      <Button onClick={() => setopenDialog(true)}> +Create Form</Button>
      <Dialog open={openDialog}>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>Create new Form</DialogTitle>
            <DialogDescription>
              <Textarea
                className="my-2"
                placeholder="write your description"
                onchange={(e) => setuserInput(e.target.value)}
              />
              <div className="flex gap-2 my-3 justify-end">
                <Button
                  variant="destructive"
                  onClick={() => setopenDialog(false)}
                >
                  Cancel
                </Button>
                <Button onClick={onCreateForm}>Create form</Button>
              </div>
            </DialogDescription>
          </DialogHeader>
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default CreateForm;
