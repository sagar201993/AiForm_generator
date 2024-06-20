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
import { AichatSession } from "@/configs/AiModal";
const CreateForm = () => {
  const [openDialog, setopenDialog] = useState(false);
  const [userInput, setuserInput] = useState("");
  const [loading, setLoading] = useState();
  const promt = "create a simple student registration from";
  const onCreateForm = async () => {
    setLoading(true);
    const result = await AichatSession.sendMessage(
      "DEscription" + userInput + promt
    );
    console.log(result.response.text());
    if (result.response.text()) {
      setLoading(false);
    }
    setLoading(false);
  };
  return (
    <div>
      <Button onClick={() => setopenDialog(true)}> +Create Form </Button>
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
                <Button disabled={loading} onClick={onCreateForm}>
                  Create form
                </Button>
              </div>
            </DialogDescription>
          </DialogHeader>
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default CreateForm;
