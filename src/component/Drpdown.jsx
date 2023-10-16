import React from 'react'
// 'use client';
import { Dropdown } from 'flowbite-react';
const Drpdown = ({value}) => {
  return (
    <>
    <Dropdown label={value}>
      <Dropdown.Item>Dashboard</Dropdown.Item>
      <Dropdown.Item>Settings</Dropdown.Item>
      <Dropdown.Item>Earnings</Dropdown.Item>
      <Dropdown.Divider />
      <Dropdown.Item>Separated link</Dropdown.Item>
    </Dropdown>
    </>
  )
}

export default Drpdown