import React from "react";
import Input from "./Input";
import PasswordInput from "./PasswordInput";
import ConfirmButton from "./ConfirmButton";
import CancelButton from "./CancelButton";

export default function ConsultPassword({closeModal}) {
  return (
    <div className="fixed inset-0 backdrop-blur-sm bg-opacity-80 flex items-center justify-center z-50">
      <div class="w-[40%] h-[50%] bg-zinc-900 border-white border-1 rounded-2xl flex justify-between py-3">
        <div className="w-[45%] justify-around flex flex-col mt-2 mb-2 ml-8">
          <h2 className="text-white text-2xl font-bold mb-2">Github.com</h2>

          <div className="flex flex-col gap-4">
            <Input label={"Username"} bgColor="gray" disabled={true} />
            <PasswordInput label={"Password"} bgColor="gray"  disabled={true}/>
          </div>
          

          <div className="mt-3">
            <div className="w-2/5">
              <CancelButton label={"Salir"} onClick={closeModal}/>
            </div>
          </div>
        </div>
        <div className="w-[45%] mt-17">
          <Input label={"Site"} bgColor="gray" />
        </div>

        <div></div>
      </div>
    </div>
  );
}
