import React from 'react'

function Select({ id, name, label, options, emptyValueLabel = '' }: SelectProps) {
  return (
    <div>
      <label htmlFor={id}>{label}</label>
      <select id={id} name={name} defaultValue=''>
        <option disabled value=''>
          {emptyValueLabel}
        </option>
        {options.map(({ value, label }) => 
          <option key={`${id}-${label}`} value={value}>{label}</option>
        )}
      </select>
    </div>
  )
}

interface SelectProps {
    name: string
    label: string
    emptyValueLabel?: string
    id: string
    options: Array<{
      value: any
      label: string
    }>
}

export default Select
