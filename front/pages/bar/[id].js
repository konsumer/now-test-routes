import React from 'react'
import { useRouter } from 'next/router'

export default () => {
  const { query: { id } } = useRouter()

  return (<div>BAR {id}</div>)
}
