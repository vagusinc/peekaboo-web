import { render } from "@testing-library/react"
import App from '~/routes/_index'
import '@testing-library/jest-dom'

test("Renders the main page", () => {
    render(<App />)
    expect(true).toBeTruthy()
})