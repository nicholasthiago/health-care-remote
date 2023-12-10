'use client'

import { useRef } from 'react'
import { Provider } from 'react-redux'
import { store } from 'lib/store'
import { users } from './data/data'

export default function ReduxProvider({ children }) {
	const storeRef = useRef()
	if (!storeRef.current) {

		// Create the store instance the first time this renders
		storeRef.current = store()
		// storeRef.current.dispatch( users )
	}

	return <Provider store={ storeRef.current }>{ children }</Provider>
}