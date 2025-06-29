/**
 * Error Testing Page - Catch Route
 *
 * This page is designed to intentionally throw an error to test the error boundary
 * and error handling system in the Next.js application. This page should only be used
 * in development/testing environments and should be removed or protected in production.
 *
 * Purpose:
 * - Test error.tsx or global-error.tsx error boundaries
 * - Verify error handling and recovery mechanisms
 * - Development testing for 500 error pages
 * - QA testing for error scenarios
 *
 * Usage:
 * - Navigate to /catch to trigger the error
 * - Error boundary will catch and display appropriate error page
 * - Useful for testing error reporting and logging systems
 *
 * Note: This page should only be used in development/testing environments
 * and should be removed or protected in production.
 */

export default function CatchErrorPage() {
  if (process.env.NODE_ENV === 'development') {
    // Immediately throw error to trigger error boundary
    throw new Error('Internal Server Error - Testing error boundary')
  }

  return null
}
