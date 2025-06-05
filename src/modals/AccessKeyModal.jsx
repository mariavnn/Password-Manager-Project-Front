import React from "react";
import PasswordInput from "../components/PasswordInput";
import CancelButton from "../components/CancelButton";
import ConfirmButton from "../components/ConfirmButton";
import * as Yup from "yup";
import { Formik, Form } from "formik";
import { validateAccessKey } from "../api/passwordApi";
import Input from "../components/Input";

export default function AccessKeyModal({ closeModal, saveAction }) {
  const initialValues = {
    accessKey: "",
  };

  const validationSchema = Yup.object({
    accessKey: Yup.string().required("La clave de acceso es obligatoria"),
  });

  const handleSubmit = async (
    values,
    { setSubmitting, setErrors, setStatus }
  ) => {
    try {
      const result = await validateAccessKey(values.accessKey);
      if (result.valid) {
        setStatus({ success: "Clave válida. Acceso concedido." });
        await new Promise((resolve) => setTimeout(resolve, 2000));
        saveAction();
      } else {
        setErrors({ accessKey: "Clave de acceso inválida" });
        setStatus({ success: null });
      }
    } catch (error) {
      const errorMessage = error.response?.data?.error || "Error al validar";
      setErrors({
        accessKey:
          "Error al validar la clave. Inténtalo de nuevo. " + errorMessage,
      });
      setStatus({ success: null });
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <div className="fixed inset-0 backdrop-blur-sm bg-opacity-80 flex items-center justify-center z-50">
      <div class="w-[28%] h-[45%] bg-zinc-900 border-white border-1 rounded-2xl flex flex-col justify-around px-10 py-3">
        <h2 className="text-white text-2xl font-bold mb-2">Access Key</h2>
        <Formik
          initialValues={initialValues}
          validationSchema={validationSchema}
          onSubmit={handleSubmit}
        >
          {({
            values,
            handleChange,
            handleBlur,
            errors,
            touched,
            isSubmitting,
            status,
          }) => (
            <Form className="flex flex-col gap-6">
              <div>
                <PasswordInput
                  label="Clave de acceso"
                  name="accessKey"
                  type="text"
                  bgColor="gray"
                  value={values.accessKey}
                  onChange={handleChange}
                  onBlur={handleBlur}
                />
                {touched.accessKey && errors.accessKey && (
                  <p className="text-red-400 text-sm mt-1">
                    {errors.accessKey}
                  </p>
                )}
              </div>
              
              <div className="h-3">
                {status?.success && (
                  <p className="text-green-400 text-sm text-center">
                    {status.success}
                  </p>
                )}

              </div>
              
              <div className=" flex justify-between px-5 gap-2">
                <div >
                  <CancelButton label="Cancel" onClick={closeModal} />
                </div>
                <div>
                  <ConfirmButton
                    type="submit"
                    label={isSubmitting ? 'Validando...' : 'Validar'}
                    disabled={isSubmitting}
                  />
                </div>
              </div>
            </Form>
          )}
        </Formik>
      </div>
    </div>
  );
}
