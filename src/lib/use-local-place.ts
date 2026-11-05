import { useEffect, useState } from 'react'

export function useLocalPlace() {
  const [place, setPlace] = useState<string | null>(null)

  useEffect(() => {
    const tz = Intl.DateTimeFormat().resolvedOptions().timeZone
    const city = tz.split('/').pop()?.replaceAll('_', ' ')
    setPlace(city ?? null)
  }, [])

  return place
}
