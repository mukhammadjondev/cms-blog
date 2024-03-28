'use client';

import { Check, ChevronDown, Plus } from 'lucide-react';

import { cn } from '@/lib/utils';
import { Button } from '@/components/ui/button';
import {
  Command,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
} from '@/components/ui/command';
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from '@/components/ui/popover';
import { FieldValues, Path, UseFormReturn } from 'react-hook-form';
import {
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/components/ui/form';
import { useState } from 'react';
import { IAuthor } from '@/types';

export const ComboboxField = <TFieldValues extends FieldValues = FieldValues>({
  form,
  data,
  ...props
}: {
  name: Path<TFieldValues>;
  label: string;
  description?: string;
  data: IAuthor[];
  form: UseFormReturn<TFieldValues>;
}) => {
  const [searchVal, setSearchVal] = useState('');

  return (
    <FormField
      control={form.control}
      name={props.name}
      render={({ field }) => (
        <FormItem className="flex flex-col mt-2">
          <FormLabel>
            {props.label} <span className="text-red-500">*</span>
          </FormLabel>
          <Popover>
            <PopoverTrigger asChild>
              <FormControl>
                <Button
                  variant="outline"
                  role="combobox"
                  className={cn(
                    'w-[200px] justify-between',
                    !field.value && 'text-muted-foreground'
                  )}
                >
                  {field.value
                    ? searchVal === field.value
                      ? searchVal
                      : data.find(item => item.name === field.value)?.name
                    : props.label}
                  <ChevronDown className="ml-2 h-4 w-4 shrink-0 opacity-50" />
                </Button>
              </FormControl>
            </PopoverTrigger>
            <PopoverContent className="w-[200px] p-0">
              <Command>
                <CommandInput
                  placeholder={`Search ${props.name}...`}
                  className="h-9"
                  value={searchVal}
                  onValueChange={val => setSearchVal(val)}
                />
                <CommandList>
                  <CommandEmpty className="bg-secondary/50 m-1 px-2 py-1.5 rounded-sm text-sm">
                    <div className="flex items-center justify-between">
                      {searchVal}
                      <Plus
                        className="w-4 h-4 cursor-pointer"
                        onClick={() => {
                          form.setValue(props.name, searchVal as any);
                          form.trigger(props.name);
                        }}
                      />
                    </div>
                  </CommandEmpty>
                  <CommandGroup>
                    {data.map(item => (
                      <CommandItem
                        value={item.name}
                        key={item.name}
                        onSelect={() => {
                          form.setValue(props.name, item.name as any);
                          form.trigger(props.name);
                        }}
                      >
                        {item.name}
                        <Check
                          className={cn(
                            'ml-auto h-4 w-4',
                            item.name === field.value
                              ? 'opacity-100'
                              : 'opacity-0'
                          )}
                        />
                      </CommandItem>
                    ))}
                  </CommandGroup>
                </CommandList>
              </Command>
            </PopoverContent>
          </Popover>

          <FormMessage />
        </FormItem>
      )}
    />
  );
};
