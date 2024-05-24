/**
* This code was generated by v0 by Vercel.
* @see https://v0.dev/t/ArYqqvli568
* Documentation: https://v0.dev/docs#integrating-generated-code-into-your-nextjs-app
*/

/** Add fonts into your Next.js project:

import { Inter } from 'next/font/google'

inter({
  subsets: ['latin'],
  display: 'swap',
})

To read more about using these font, please visit the Next.js documentation:
- App Directory: https://nextjs.org/docs/app/building-your-application/optimizing/fonts
- Pages Directory: https://nextjs.org/docs/pages/building-your-application/optimizing/fonts
**/
import { Button } from "@/app/components/ui/button"

export function Component() {
  return (
    <div className="flex flex-col h-screen">
      <header className="bg-gray-900 text-white py-4 px-6 flex items-center justify-between">
        <h1 className="text-2xl font-bold">Virtual Stock Analyst</h1>
        <div className="flex space-x-4">
          <Button variant="primary">Create Assistant</Button>
          <Button variant="secondary">Create Thread</Button>
          <Button variant="secondary">Create Run</Button>
        </div>
      </header>
      <div className="flex-1 grid grid-cols-2 gap-6 p-6">
        <div className="bg-white rounded-lg shadow-lg p-6">
          <h2 className="text-xl font-bold mb-4">Chat</h2>
        </div>
        <div className="bg-white rounded-lg shadow-lg p-6">
          <h2 className="text-xl font-bold mb-4">Stock Prices</h2>
        </div>
      </div>
    </div>
  )
}
