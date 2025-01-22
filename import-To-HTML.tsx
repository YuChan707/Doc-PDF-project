import React from 'react'
import {createRoot} from 'react-dom/client'


import { AppTogether } from './components/app-together.tsx'
const RootTogether = document.getElementById('together')
const rootTogether = createRoot(RootTogether)
rootTogether.render(<AppTogether/>)