
export default function Component() {
  return (
    <div className="flex h-screen w-full flex-col items-center justify-center bg-gray-100 px-4 dark:bg-gray-950">
      <div className="mx-auto w-full max-w-md rounded-lg bg-white p-6 shadow-lg dark:bg-gray-900">
        <div className="space-y-4 text-center">
          <div className="text-red-500">
            <CircleXIcon className="mx-auto h-12 w-12" />
          </div>
          <h2 className="text-2xl font-bold tracking-tight">Payment Failed</h2>
          <p className="text-gray-500 dark:text-gray-400">
            There was an issue processing your payment. Please try again.
          </p>
          <a href="findacoach"><button class="mt-3 ml-6 bg-black border-2 text-white border-black hover:bg-white hover:text-black font-bold py-2 px-4 rounded-full mr-6">Try Again</button></a>
        </div>
      </div>
    </div>
  )
}

function CircleXIcon(props) {
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
      <circle cx="12" cy="12" r="10" />
      <path d="m15 9-6 6" />
      <path d="m9 9 6 6" />
    </svg>
  )
}