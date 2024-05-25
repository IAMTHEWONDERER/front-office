
export default function Component() {
  return (
    <div className="flex min-h-screen w-full items-center justify-center bg-gray-100 px-4 dark:bg-gray-950">
      <div className="mx-auto max-w-md space-y-6 rounded-lg bg-white p-8 shadow-lg dark:bg-gray-900">
        <div className="flex flex-col items-center space-y-4">
          <div className="rounded-full bg-green-500 p-4">
            <CheckIcon className="h-8 w-8 text-white" />
          </div>
          <h1 className="text-2xl font-bold">Payment Successful</h1>
          <p className="text-gray-500 dark:text-gray-400">Thank you for your purchase!</p>
          <a
            className="inline-flex items-center justify-center rounded-md bg-gray-900 px-4 py-2 text-sm font-medium text-white shadow transition-colors hover:bg-gray-900/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-gray-950 disabled:pointer-events-none disabled:opacity-50 dark:bg-gray-50 dark:text-gray-900 dark:hover:bg-gray-50/90 dark:focus-visible:ring-gray-300"
            href="findacoach"
          >
            Return Home
          </a>
        </div>
      </div>
    </div>
  )
}

function CheckIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M20 6 9 17l-5-5" />
    </svg>
  )
}