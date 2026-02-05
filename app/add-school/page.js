"use client";
import { useForm } from "react-hook-form";
import axios from "axios";
import toast from "react-hot-toast";
import InputBox from "@/components/InputBox";
import BackButton from "@/components/BackButton";
import Loader from "@/components/Loader";
import { useState } from "react";

export default function AddSchool() {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();
  const [loading, setLoading] = useState(false);

  const onSubmit = async (data) => {
    console.log("FORM DATA 👉", data);
    const file = data.image[0];

    const base64 = await new Promise((resolve) => {
      const reader = new FileReader();
      reader.onloadend = () => resolve(reader.result);
      reader.readAsDataURL(file);
    });

    try {
      setLoading(true);
      const res = await axios.post("/api/schools", {
        ...data,
        imageBase64: base64,
      });

      if (res?.data?.success) {
        setLoading(false);
        toast.success("School added");
        reset();
      } else {
        setLoading(false);
      }
    } catch (err) {
      setLoading(false);
      console.error(err);
      toast.error("Failed to add school");
    }
  };

  return (
    <div>
      <BackButton
        destPath={"/"}
        classname={"my-6 bg-green-800 text-white/90"}
      />
      <div className="w-full flex flex-col items-center justify-center">
        <h1 className="my-7 md:my-10 text-2xl font-semibold">
          Add School deatils
        </h1>
        <form onSubmit={handleSubmit(onSubmit)} className="p-3">
          <div className="w-full max-w-2xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-3.5">
            <InputBox
              placeholder={"Name"}
              name={"name"}
              register={register}
              errors={errors}
              rules={{ required: "Please enter name" }}
            />
            <InputBox
              placeholder={"Email"}
              name={"email"}
              type="email"
              register={register}
              errors={errors}
              rules={{
                required: "Please enter email",
                pattern: {
                  value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                  message: "Enter a valid email address",
                },
              }}
            />

            <InputBox
              placeholder={"Phone"}
              name={"phone"}
              register={register}
              errors={errors}
              rules={{
                required: "Please enter phone number",
                pattern: {
                  value: /^[0-9]{10}$/,
                  message: "Enter a valid 10-digit phone number",
                },
              }}
            />

            <InputBox
              placeholder={"Address"}
              name={"address"}
              register={register}
              errors={errors}
              rules={{ required: "Please enter address" }}
            />
            <div className="grid grid-cols-2 gap-4">
              <InputBox
                placeholder={"City"}
                name={"city"}
                register={register}
                errors={errors}
                rules={{ required: "Please enter city" }}
              />
              <InputBox
                placeholder={"State"}
                name={"state"}
                register={register}
                errors={errors}
                rules={{ required: "Please enter state" }}
              />
            </div>
            <InputBox
              name={"image"}
              type="file"
              register={register}
              errors={errors}
              rules={{ required: "Please upload image" }}
            />
          </div>

          <button
            disabled={loading}
            className="w-full mt-6 p-3 flex items-center justify-center gap-2.5 rounded-lg bg-green-800 text-base font-semibold cursor-pointer transition transform active:scale-90 text-center"
          >
            <span>Add School</span> {loading && <Loader className="w-6 h-6" />}
          </button>
        </form>
      </div>
    </div>
  );
}
