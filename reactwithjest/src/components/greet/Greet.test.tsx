/**
 * Greet should render the text hello and if a name is passed into the component 
 * It should render hello followed by the name
 */

import { render, screen } from "@testing-library/react";
import {test, expect} from 'vitest'
import Greet from "./Greet";


test('Greet renders correctly', () => {
 render(<Greet />)
 const textEl = screen.getByText('Hello')
 expect(textEl).toBeInTheDocument()
})

test('Greet renders correctly with a name', () => {
 render(<Greet name="David"/>)
 const textEl = screen.getByText('Hello David')
 expect(textEl).toBeInTheDocument()
})