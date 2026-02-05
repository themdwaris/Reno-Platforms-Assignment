import React from "react";

const InputBox = ({
  name,
  input,
  placeholder,
  type="text",
  register,
  errors,
  rules,
}) => {
  return (
    <div>
      <input
        className="w-full p-3 rounded-lg bg-white/10 outline-none border-none text-balance"
        type={type}
        name={name}
        placeholder={placeholder}
        // value={input}
        // onChange={(e) =>
        //   setInput(
        //     type === "text"
        //       ? e.target.value
        //       : type === "email"
        //         ? e.target.value
        //         : e.target.files[0],
        //   )
        // }
        {...register(`${name}`, rules, { required: true })}
      />
      {errors[name] && (
        <p className="mt-2 text-red-400 text-[12px] normal-case">
          {errors[name].message}
        </p>
      )}
    </div>
  );
};

export default InputBox;
