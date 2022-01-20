import React, { useMemo, useEffect } from "react";
import { useForm, useWatch, useFormContext, FormProvider } from "react-hook-form";
import { ErrorMessage } from "@hookform/error-message";
import * as Yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";


function SmartUserForm({defaultValues, labels=[], onSubmit, children }) {
  	const methods = useForm({
		resolver: yupResolver(schema),
		defaultProps: useMemo(() => defaultValues, [defaultValues])
	});	
	const { handleSubmit, reset, formState: { errors } } = methods;
	
	useEffect(() => {
		reset(defaultValues);
	}, [defaultValues]);
	
	return (
		<FormProvider {...methods}>
			<form onSubmit={handleSubmit(onSubmit)}>
	          	{fields.map((item, i) => (
					<div key={i} className="form-group">  
						{labels.length ? <label>{labels?.[i]}</label> : ""}
						<Input
		                  name={item}
		                  className={`form-control ${errors[item] ? 'is-invalid' : ''}`}         
            			/>
            			<ErrorMessage
            				error={errors}
            				name={item}
            				render={({ message }) => (
								<div className="invalid-feedback">
									{message}
								</div>
							)}
            			/>
					</div>
				))}
		  	<div className="form-group">
		  		{children}
			</div>
	      </form>	
      </FormProvider>	
	);
}


const fields = ["name", "age", "email", "address", "country", "telephone"];

const schema = Yup.object().shape({
	name: Yup.string()
	  .required('Name is required')
	  .min(3, 'Name must be at least 3 characters')
	  .max(20, 'Name must not exceed 20 characters'),
	age: Yup.number().positive().integer(),
	email: Yup.string()
	  .required('Email is required')
	  .email('Email is invalid'),
	address: Yup.string().nullable(),
	country: Yup.string().nullable(),
	telephone: Yup.string().nullable()
});

const Input = ({ name, className }) => {
	const { control, register } = useFormContext();
	const value = useWatch({
		control,
		name,
	});
	return (
		<input
			{...register(name)}
			className={className}
			defaultValue={value} />
	);
};

export default SmartUserForm;
