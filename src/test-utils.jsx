import { render } from "@testing-library/react"
import MacBookProviders from "./providers/MacBookProviders"

const renderWithContext = (ui, options) => render(ui, {wrapper: MacBookProviders, ...options})
export { screen, fireEvent, waitFor } from "@testing-library/react";
export {renderWithContext as render}
