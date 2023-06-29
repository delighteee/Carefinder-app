

import { Helmet } from 'react-helmet'
import MyHospitals from './components/Hospitals'

export default function FindHospital() {
  return (
    <div>
       <Helmet>
        <title>Find Hospitals</title>
        <meta name="description" content="Hospitals near you" />
        <link rel="canonical" href="/" />
      </Helmet>
      <MyHospitals/>
    </div>
  )
}
