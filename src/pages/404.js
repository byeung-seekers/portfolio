import React from "react"
import { Link } from "gatsby"

import { useCursorContext } from "../components/Layout/Cursor/CursorProvider.component"
import SEO from "../components/SEO/SEO.component"

const ErrorPage = () => {
  const { scaleMCursor, defaultCursor } = useCursorContext()

  return (
    <>
      <SEO
        title="Page Not Found"
        description="Sorry, you landed in a mysterious place. Go home."
      />

      <main>
        <section className="error">
          <h1>Woops.</h1>
          <button
            onMouseEnter={scaleMCursor}
            onMouseLeave={defaultCursor}
            onClick={defaultCursor}
          >
            <Link to="/">
              <span>Go home</span>
            </Link>
          </button>
        </section>
      </main>
    </>
  )
}

export default ErrorPage
