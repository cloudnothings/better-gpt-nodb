'use client';

import React, { useState } from 'react';
import { Listbox } from '@headlessui/react';

type Option = {
  value: string;
  label: string;
};

const SelectMenu = ({ label, options }: { label: string, options: Option[] }) => {
  const [selectedOption, setSelectedOption] = useState(options[0]);

  return (
    <div className="relative w-full max-w-xs mx-auto">
      <Listbox value={selectedOption} onChange={setSelectedOption}>
        <Listbox.Label className="absolute -top-2 left-2 inline-block bg-white dark:bg-zinc-800 px-1 text-xs font-medium text-gray-500" >
          {label}
        </Listbox.Label>
        <Listbox.Button className="block w-full rounded-md border-0 py-2 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-blue-600 text-sm sm:leading-6 dark:bg-zinc-800 dark:ring-gray-500">
          {selectedOption?.label}
        </Listbox.Button>
        <Listbox.Options >
          {options.map((option) => (
            <Listbox.Option
              key={option.value}
              value={option} >
              {option.label}
            </Listbox.Option>
          ))}
        </Listbox.Options>
      </Listbox>
    </div>
  );
};

export default SelectMenu;
