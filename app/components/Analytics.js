'use client'

import { useEffect } from 'react'
import { usePathname, useSearchParams } from 'next/navigation'

export default function Analytics({ GA_MEASUREMENT_ID = 'G-XXXXXXXXXX' }) {
  const pathname = usePathname()
  const searchParams = useSearchParams()

  useEffect(() => {
    const url = pathname + searchParams.toString()
    
    // @ts-ignore
    window.gtag('config', GA_MEASUREMENT_ID, {
      page_path: url,
    })
  }, [pathname, searchParams, GA_MEASUREMENT_ID])

  return null
}
