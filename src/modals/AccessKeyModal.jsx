import React from "react";
import PasswordInput from "../components/PasswordInput";
import CancelButton from "../components/CancelButton";
import ConfirmButton from "../components/ConfirmButton";

export default function AccessKeyModal({closeModal, saveAction}) {
  return (
    <div className="fixed inset-0 backdrop-blur-sm bg-opacity-80 flex items-center justify-center z-50">
      <div class="w-[25%] h-[40%] bg-zinc-900 border-white border-1 rounded-2xl flex flex-col justify-around px-10 py-3">
        <h2 className="text-white text-2xl font-bold mb-2">Access Key</h2>
        <form method="post" className="w-full">
          <div className="flex flex-col gap-7">
            <PasswordInput label={"Password"} bgColor="gray" />
          </div>
          <div className="mt-10 flex w-full justify-between">
            <div className="w-2/5">
              <CancelButton label={"Cancel"} onClick={closeModal} />
            </div>
            <div className="w-2/5">
              <ConfirmButton label={"Save"} onClick={saveAction} />
            </div>
          </div>
        </form>
      </div>
    </div>
  );
}
