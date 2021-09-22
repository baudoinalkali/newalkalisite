import React from 'react';
import { useForm } from 'react-hook-form';

export default function App() {
  const {
    register,
    formState: { errors },
    handleSubmit,
    clearErrors
  } = useForm({ reValidateMode: "onSubmit" });
  const onSubmit = () => null;
  const firstName = register("firstName", { required: true });
  const lastName = register("lastName", { required: true });
  const email = register("email", { required: true });
  const website = register("website", { required: true });

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div className="grid grid-cols-2 gap-x-10 gap-y-10">
        <div>
          <label htmlFor="first-name" className="block text-sm font-medium text-gray-700">First name</label>
          <input type="text" name="first-name" id="first-name" autoComplete="given-name" className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
            {...firstName}
            onChange={(e) => {
              firstName.onChange(e);
              clearErrors("firstName");
            }}
          />
          {errors.firstName?.type === "required" && "First name is required"}
        </div>
        <div>
          <label htmlFor="last-name" className="block text-sm font-medium text-gray-700">Last name</label>
          <input type="text" name="last-name" id="last-name" autoComplete="given-name" className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
            {...lastName}
            onChange={(e) => {
              lastName.onChange(e);
              clearErrors("lastName");
            }}
          />
          {errors.lastName && "This field is required"}
        </div>
        <div>
          <label htmlFor="email-address" className="block text-sm font-medium text-gray-700">Email address</label>
          <input type="text" name="email-address" id="email-address" autoComplete="email" className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
            {...email}
            onChange={(e) => {
              email.onChange(e);
              clearErrors("email");
            }}
          />
          {errors.email && "This field is required"}
        </div>
        <div className="">
          <label htmlFor="company-website" className="block text-sm font-medium text-gray-700">
            Website
          </label>
          <div className="mt-1 flex rounded-md shadow-sm">
            <span className="inline-flex items-center px-3 rounded-l-md border border-r-0 border-gray-300 bg-gray-50 text-gray-500 text-sm">
              http://
            </span>
            <input type="text" name="company-website" id="company-website" className="focus:ring-indigo-500 focus:border-indigo-500 flex-1 block w-full rounded-none rounded-r-md sm:text-sm border-gray-300" placeholder="www.example.com"
              {...website}
              onChange={(e) => {
                website.onChange(e);
                clearErrors("website");
              }}
            />
          </div>
          {errors.website && "This field is required"}
        </div>
      </div>
      <input className="mt-8 p-2 px-8 font-semibold text-white shadow-2xl rounded-md transition duration-500 ease-in-out bg-alkali-500 hover:bg-alkali-700" type="submit" />
    </form>
  );
}