import { getSignupCount } from './actions'
import LandingPage from './components/LandingPage'

export default async function Home() {
  const signupCount = await getSignupCount()
  return <LandingPage signupCount={signupCount} />
}
