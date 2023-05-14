'use client';

import Inputs from "@/components/inputs/Inputs";
import { useCallback, useState } from "react";
import { FieldValues, SubmitHandler, useForm } from "react-hook-form";

type Variant = 'LOGIN' | 'REGISTER';

const AuthForm = () => {
    const [variant, setVariant] = useState<Variant>('LOGIN');
    const [isLoading, setIsLoading] = useState(false);
    const toggleVariant = useCallback(() => {
        if (variant === 'LOGIN') {
          setVariant('REGISTER');
        } else {
          setVariant('LOGIN');
        }
      }, [variant]);
      const {
        register,
        handleSubmit,
        formState: {
          errors,
        }
      } = useForm<FieldValues>({
        defaultValues: {
          name: '',
          email: '',
          password: ''
        }
      });

      const onSubmit: SubmitHandler<FieldValues> = (data) => {
        setIsLoading(true);
      
        if (variant === 'REGISTER') {
            //axios register 
        }
    
        if (variant === 'LOGIN') {
            //next auth sign in
        }
      }
      const socialAction = (action: string) => {
        setIsLoading(true);
        //next auth sign in
      } 


  return (
    <div className="mt-8 sm:mx-auto sm:w-full sm:max-w-md">
        <div className=" bg-white px-4 py-8 shadow sm:rounded-lg sm:px-10">
            <form 
            className="space-y-6" 
            onSubmit={handleSubmit(onSubmit)}
            >
                <Inputs label="Email" 
                    id="email"
                    register={register}
                />

            </form>
        </div>
    </div>
  )
}

export default AuthForm