import React from 'react'
import PatchEvent, { set, unset } from 'part:@sanity/form-builder/patch-event'

const createPatchFrom = value =>
  PatchEvent.from(value === '' ? unset() : set(Number(value)))

const formatCurrency = value => {
  const formatter = new Intl.NumberFormat('vi-VN', {
    style: 'currency',
    currency: 'VND',
  })
  return formatter.format(value)
}

const parseCurrency = value => {
  return value.replace(/[₫,]/g, '')
}

const CustomPriceInput = ({ value, onChange }) => (
  <div>
    <input
      type="text"
      value={formatCurrency(value)}
      onChange={event => onChange(createPatchFrom(parseCurrency(event.target.value)))}
    />
  </div>
)

export default CustomPriceInput
