"use client";
import { Button } from "@/app/components/ui/button";
import { Card } from "@/app/components/ui/card";
import { Input } from "@/app/components/ui/input";
import { setType } from "@/app/redux/features/resourceSlice";
import { StoreType } from "@/app/redux/store";
import postResource from "@/app/services/postResource";
import { Trash } from "lucide-react";
import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";

const ResourcePart = ({ type }: { type: "deposit" | "withdraw" }) => {
  const [state, setState] = useState<string[]>([]);
  const { handleSubmit, register, reset } = useForm();
  const token = localStorage.getItem("token") as string | "";
  const resource = useSelector((state: StoreType) => state.resource);
  const dispatch = useDispatch();
  const onSubmit = async (data: any) => {
    const result: string[] =
      (await postResource({
        token,
        type,
        name: data.text,
      })) || [];
    dispatch(
      setType({
        type,
        data: result,
      })
    );
    reset();
  };

  const deleteResource = async (item: any) => {
    const response = await fetch(
      "https://viridian-pelican-belt.cyclic.app/user/resources",
      {
        method: "DELETE",
        headers: {
          "Content-Type": "Application/json",
          token: `${token}`,
        },
        body: JSON.stringify({
          type,
          name: item,
        }),
      }
    );
    const data = await response.json();
    if (data.user) {
      const { resources } = data.user;
      dispatch(
        setType({
          type,
          data: resources,
        })
      );
    }
  };
  return (
    <section>
      <h3 className="scroll-m-20 text-2xl font-semibold tracking-tight my-4">
        My {type}s
      </h3>
      {resource[type].map((item) => (
        <div
          key={item}
          className="flex flex-grow justify-between gap-2 items-center"
        >
          <Card
            key={item}
            className="flex justify-start items-center my-2 w-full"
          >
            <p className="leading-7 [&:not(:first-child)]:mt-6 p-2">{item}</p>
          </Card>
          <Button
            variant="outline"
            onClick={() => deleteResource(item)}
            className="h-full flex justify-center items-center py-2 hover:bg-red-600 hover:bg-opacity-25"
          >
            <Trash width={24} height={24} className="stroke-red-600"></Trash>
          </Button>
        </div>
      ))}
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="flex w-full  items-center space-x-4"
      >
        <Input type="text" {...register("text")} placeholder="Deposit type" />
        <Button type="submit" className="block min-w-max">
          Add This
        </Button>
      </form>
    </section>
  );
};

export default ResourcePart;
