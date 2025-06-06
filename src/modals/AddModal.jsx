import React, { useState } from 'react'
import PasswordInput from '../components/PasswordInput'
import Input from '../components/Input'
import PrincipalButton from '../components/PrincipalButton'
import CancelButton from '../components/CancelButton'
import ConfirmButton from '../components/ConfirmButton'
import * as Yup from "yup";
import { Formik, Form } from "formik";
import { savePassword } from '../api/passwordApi'

export default function AddModal({ closeModal }) {
    const initialValues = {
        site: '',
        siteUsername: '',
        password: '',
    };
    const [showSuccess, setShowSuccess] = useState(false);

    const validationSchema = Yup.object({
        site: Yup.string().required('El sitio es obligatorio'),
        siteUsername: Yup.string().required('El nombre de usuario es obligatorio'),
        password: Yup.string().required('La contraseña es obligatoria'),
    });

    const handleSubmit = async (values, { setSubmitting, setErrors, setStatus, resetForm }) => {
        try {
            await savePassword(values);
            setStatus({ success: 'La contraseña se agrego con exito' });
            setShowSuccess(true);       
            setTimeout(() => {
                setStatus({ success: null });  
                resetForm();                   
                setShowSuccess(false);  
                closeModal();                       
            }, 2500);
           
        } catch (error) {
            const errorMessage =
                error.response?.data?.error || 'Error al guardar la contraseña.';
            setErrors({ general: errorMessage });
        } finally {
            setSubmitting(false);
        }
    };

    return (
    <div className="fixed inset-0 backdrop-blur-sm bg-opacity-80 flex items-center justify-center z-50">
        <div class="w-[30%] h-[82%] bg-zinc-900 border-white border-1 rounded-2xl flex flex-col justify-evenly gap-4 px-16 py-5">
            <h2 className="text-white text-2xl font-bold mb-2">Add new Password</h2>
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
                    <Form className="w-full flex flex-col gap-5">
                    <div>
                        <Input
                            label="Site"
                            name="site"
                            value={values.site}
                            onChange={handleChange}
                            onBlur={handleBlur}
                            bgColor="gray"
                        />
                        {touched.site && errors.site && (
                        <p className="text-red-400 text-sm mt-1">{errors.site}</p>
                        )}
                    </div>

                    <div>
                        <Input
                            label="Username"
                            name="siteUsername"
                            value={values.siteUsername}
                            onChange={handleChange}
                            onBlur={handleBlur}
                            bgColor="gray"
                        />
                        {touched.siteUsername && errors.siteUsername && (
                        <p className="text-red-400 text-sm mt-1">{errors.siteUsername}</p>
                        )}
                    </div>

                    <div>
                        <PasswordInput
                        label="Password"
                        name="password"
                        value={values.password}
                        onChange={handleChange}
                        onBlur={handleBlur}
                        bgColor="gray"
                        />
                        {touched.password && errors.password && (
                        <p className="text-red-400 text-sm mt-1">{errors.password}</p>
                        )}
                    </div>
                    
                    <div className='h-4'>
                        {errors.general && (
                            <p className="text-red-400 text-sm">{errors.general}</p>
                        )}
                        {status?.success && (
                            <p className="text-green-400 text-sm text-center">{status.success}</p>
                        )}
                    </div>

                    <div className=" flex justify-between px-5 mt-5">
                        <div className="w-2/5">
                            <CancelButton label="Cancel" onClick={closeModal} />
                        </div>
                        <div className="w-2/5">
                            <ConfirmButton
                                type="submit"
                                label={isSubmitting || showSuccess ? 'Saving...' : 'Save'}
                                disabled={isSubmitting || showSuccess}
                            />
                        </div>
                    </div>
                    </Form>
                )}
            </Formik>
        </div>
    </div>
  )
}
