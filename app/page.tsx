export const dynamic = 'force-dynamic'

import { getSignupCount } from './actions'
import LandingPage from './components/LandingPage'

export default async function Home() {
  let signupCount = 0
  try {
    signupCount = await getSignupCount()
  } catch {
    // Supabase unavailable — render page with count 0
  }
  return <LandingPage signupCount={signupCount} />
}
