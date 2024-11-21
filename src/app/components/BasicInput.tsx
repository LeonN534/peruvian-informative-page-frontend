"use client";

import React, { HTMLInputTypeAttribute, useEffect, useState } from "react";
import { FetchResponse } from "@/app/common/APIs/typesService";
import ValidationErrors from "./ValidationErrors";
import BackendValidationError from "./BackendValidationError";

const BasicInput = ({
  name,
  label,
  placeholder,
  type,
  hasDatasets,
  fetchService,
  min,
  required,
  form,
  formState,
  defaultValue,
  hasBackendErrors,
}: {
  name: string;
  label: string;
  placeholder: string;
  type: HTMLInputTypeAttribute;
  hasDatasets?: boolean;
  fetchService?: () => Promise<FetchResponse>;
  min?: number | string;
  required?: boolean;
  form: string;
  formState: any;
  defaultValue?: string;
  hasBackendErrors?: boolean;
}) => {
  const [options, setOptions] = useState<string[]>([]);

  const fetchOptions = async () => {
    if (!hasDatasets || !fetchService) return;
    try {
      const response = await fetchService();
      if (!response.success) return;
      const data = response.data;
      const optionNames = data.map((item: { name: string }) => item.name);
      setOptions(optionNames);
    } catch (error) {
      console.error("Error fetching data: ", error);
    }
  };

  useEffect(() => {
    fetchOptions();
  }, []);

  return (
    <div className="w-full flex flex-col gap-[5px] relative">
      <label
        htmlFor={name}
        className="text-base font-semibold text-gray-200 ml-5 xl:text-lg"
      >
        {label}
      </label>
      <input
        id={name}
        name={name}
        form={form}
        type={type}
        placeholder={placeholder}
        className={`text-lg placeholder:text-grayscale-500 px-5 py-[10px] border-[3px] border-gray-300 rounded-[10px] xl:text-xl xl:px-5 xl:py-[10px] ${
          type === "number"
            ? "[appearance:textfield] [&::-webkit-outer-spin-button]:appearance-none [&::-webkit-inner-spin-button]:appearance-none"
            : ""
        }`}
        list={hasDatasets ? `${name}-list` : undefined}
        min={min}
        required={required}
        defaultValue={defaultValue}
      />
      {hasDatasets && (
        <datalist id={`${name}-list`}>
          {options.map((option, index) => (
            <option key={index} value={option} />
          ))}
        </datalist>
      )}
      <ValidationErrors error={formState.validationErrors?.[name]} />
      {hasBackendErrors && (
        <BackendValidationError
          error={formState.backendValidationErrors}
          specialName={name}
        />
      )}
    </div>
  );
};

export default BasicInput;
