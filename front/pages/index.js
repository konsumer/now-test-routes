import React from 'react'
import Link from 'next/link'

export default () => (
  <div>
    <p>Use one of these routes to test:</p>
    <ul>
      <li><Link href='/foo/TESTER'><a>FOO</a></Link></li>
      <li><Link href='/bar/TESTER'><a>BAR</a></Link></li>
    </ul>
  </div>
)
