import PasswordInput from "../components/PasswordInput";
import Input from "../components/Input";
import PrincipalButton from "../components/PrincipalButton";
import * as Yup from "yup";
import { Formik, Form } from "formik";
import { login } from "../api/authApi";
import useAuthStore from "../store/LoginStore";

export default function LoginModal({ handleLogin, handleRegister }) {
  const { logIn } = useAuthStore();
  const initialValues = {
    username: "",
    password: "",
  };

  const validationSchema = Yup.object({
    username: Yup.string().required("El nombre de usuario es obligatorio"),
    password: Yup.string()
      .min(6, "Mínimo 6 caracteres")
      .required("La contraseña es obligatoria"),
  });

  const handleSubmit = async (values, { setSubmitting, setErrors }) => {
    try {
      const res = await login(values);
      logIn(res.token);
      if (handleLogin) handleLogin();
    } catch (error) {
      const errorMessage = error.response?.data?.error || "Error al entrar";
      setErrors({ general: errorMessage });
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <div className="fixed inset-0 backdrop-blur-sm bg-opacity-80 flex items-center justify-center z-50">
      <div className="w-[30%] h-[70%] bg-zinc-900 border-white border-1 rounded-2xl flex flex-col justify-around items-center align-middle px-8 py-3">
        <h2 className="text-white text-3xl font-bold">Login</h2>
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
          }) => (
            <Form className="w-full flex flex-col gap-4">
              <div>
                <Input
                  label="Username"
                  type="text"
                  icon="user"
                  name="username"
                  value={values.username}
                  onChange={handleChange}
                  onBlur={handleBlur}
                />
                {touched.username && errors.username && (
                  <p className="text-red-400 text-sm mt-1">{errors.username}</p>
                )}
              </div>

              <div>
                <PasswordInput
                  label="Password"
                  name="password"
                  value={values.password}
                  onChange={handleChange}
                  onBlur={handleBlur}
                />
                {touched.password && errors.password && (
                  <p className="text-red-400 text-sm mt-1">{errors.password}</p>
                )}
              </div>

              {errors.general && (
                <p className="text-red-400 text-sm">{errors.general}</p>
              )}

              <div className="mt-10">
                <PrincipalButton
                  label={isSubmitting ? "Logging In..." : "Log in"}
                  type="submit"
                  disabled={isSubmitting}
                />
              </div>
            </Form>
          )}
        </Formik>

        <div className="">
          <p className="text-gray-300">
            Don’t have an account?
            <button className="cursor-pointer" onClick={handleRegister}>
              <span className="text-zinc-300 underline font-bold">
                {" "}
                Register
              </span>
            </button>
          </p>
        </div>
      </div>
    </div>
  );
}
