'use client'

import { CountrySelectValue } from '@/constant'
import useCountries from '@/hooks/useCountries'
import React from 'react'
import Select from 'react-select'

type Props = {
    value?: CountrySelectValue
    onChange: (value: CountrySelectValue) => void
}

const CountrySelect: React.FC<Props> = (props: Props) => {
    const { value, onChange } = props
    const { getAll } = useCountries()
    return (
        <Select
            placeholder="Anywhere"
            isClearable
            options={getAll()}
            value={value}
            onChange={(value) => onChange(value as CountrySelectValue)}
            formatOptionLabel={(option: any) => (
                <div className='flex flex-row items-center gap-3'>
                    {option?.flag}  {option?.label} <span>{option.region}</span>
                </div>
            )}
            className={{
                control: () => 'p-3 border-2',
                input: () => 'text-lg',
                option: () => 'text-lg'
            }}
            theme={(theme) => ({
                ...theme,
                borderRadius: 6,
                colors: {
                    ...theme.colors,
                    primary: 'black',
                    primary25: '#ffe4e6'
                }
            })}
        />
    )
}

export default CountrySelect