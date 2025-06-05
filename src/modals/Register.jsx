import * as Yup from 'yup';
import { Formik, Form } from 'formik';
import Input from '../components/Input'
import PasswordInput from '../components/PasswordInput'
import PrincipalButton from '../components/PrincipalButton'
import { register } from '../api/authApi';

export default function RegisterModal({ closeRegister }) {
    const initialValues = {
        username: '',
        email: '',
        password: '',
        confirmPassword: '',
    };

    const validationSchema = Yup.object({
        username: Yup.string().required('El nombre de usuario es obligatorio'),
        email: Yup.string().email('Correo inválido').required('El correo es obligatorio'),
        password: Yup.string().min(6, 'Mínimo 6 caracteres').required('La contraseña es obligatoria'),
        confirmPassword: Yup.string()
        .oneOf([Yup.ref('password'), null], 'Las contraseñas no coinciden')
        .required('Confirma tu contraseña'),
    });
    
    const handleSubmit = async (values, { setSubmitting, setErrors }) => {
        try {
            await register(values);
            closeRegister();
        } catch (error) {
            const errorMessage = error.response?.data?.error || 'Error al registrar';
            setErrors({ general: errorMessage });
        } finally {
        setSubmitting(false);
        }
    };

    return (
    <div className="fixed inset-0 backdrop-blur-sm bg-opacity-80 flex items-center justify-center z-50">
      <div className="w-[30%] h-[85%] border-white bg-zinc-900 border-1 rounded-2xl flex flex-col justify-around items-center px-8 py-3">
        <h2 className="text-white text-3xl font-bold">Create Account</h2>
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
                <Input
                  label="Email"
                  type="email"
                  icon="email"
                  name="email"
                  value={values.email}
                  onChange={handleChange}
                  onBlur={handleBlur}
                />
                {touched.email && errors.email && (
                  <p className="text-red-400 text-sm mt-1">{errors.email}</p>
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

              <div>
                <PasswordInput
                  label="Confirm Password"
                  name="confirmPassword"
                  value={values.confirmPassword}
                  onChange={handleChange}
                  onBlur={handleBlur}
                />
                {touched.confirmPassword && errors.confirmPassword && (
                  <p className="text-red-400 text-sm mt-1">{errors.confirmPassword}</p>
                )}
              </div>

              {errors.general && (
                <p className="text-red-400 text-sm">{errors.general}</p>
              )}

              <div className="mt-4">
                <PrincipalButton
                  label={isSubmitting ? 'Registrando...' : 'Register'}
                  type="submit"
                  disabled={isSubmitting}
                />
              </div>
            </Form>
          )}
        </Formik>
      </div>
    </div>
  );
}
