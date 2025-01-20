import React from 'react'
import {createRoot} from 'react-dom/client'
import {AppTools} from './components/tools/app-tools.tsx'
import {AppHeader} from './components/header/app-header.tsx' 
import {AppWriting} from './components/word-base/app-writing.tsx'; 

const RootHeader = document.getElementById('header')
const rootHeader = createRoot(RootHeader)
rootHeader.render(<AppHeader/>)

const RootTools = document.getElementById('tools')
const rootTools = createRoot(RootTools)
rootTools.render(<AppTools/>)

const RootWrite = document.getElementById('writing')
const rootWrite = createRoot(RootWrite)
rootWrite.render(<AppWriting/>)