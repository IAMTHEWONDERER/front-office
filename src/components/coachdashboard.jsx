

export default function Component() {
  return (
    <div className="bg-[#1F2937] min-h-screen text-white">
      <div className="flex">
        <div className="w-64 p-6 space-y-6">
          <div className="flex items-center space-x-2">
            <DribbbleIcon className="h-8 w-8 text-[#61DAFB]" />
            <span className="font-bold">React</span>
          </div>
          <div className="space-y-4">
            <div className="flex items-center justify-between">
              <div className="flex items-center space-x-2">
                <Avatar>
                  <AvatarImage alt="Sales House" src="/placeholder.svg?height=32&width=32" />
                </Avatar>
                <div>
                  <div className="font-medium">Sales House</div>
                  <div className="text-sm text-gray-400">General Item</div>
                </div>
              </div>
              <ChevronDownIcon className="h-4 w-4 text-gray-400" />
            </div>
            <nav className="space-y-1">
              <a className="flex items-center space-x-2 text-white bg-[#111827] p-2 rounded-md" href="#">
                <LayoutGridIcon className="h-4 w-4" />
                <span>Dashboard</span>
              </a>
              <a className="flex items-center space-x-2 text-gray-400 hover:text-white" href="#">
                <BarChartIcon className="h-4 w-4" />
                <span>Overview</span>
              </a>
              <a className="flex items-center space-x-2 text-gray-400 hover:text-white" href="#">
                <MessageCircleIcon className="h-4 w-4" />
                <span>Chat</span>
                <Badge variant="secondary">6</Badge>
              </a>
              <a className="flex items-center space-x-2 text-gray-400 hover:text-white" href="#">
                <UsersIcon className="h-4 w-4" />
                <span>Team</span>
              </a>
            </nav>
            <div className="pt-6">
              <h3 className="text-xs font-semibold uppercase tracking-wider text-gray-400">Shortcuts</h3>
              <nav className="mt-2 space-y-1">
                <a className="flex items-center space-x-2 text-gray-400 hover:text-white" href="#">
                  <CircleCheckIcon className="h-4 w-4" />
                  <span>Tasks</span>
                </a>
                <a className="flex items-center space-x-2 text-gray-400 hover:text-white" href="#">
                  <ClipboardListIcon className="h-4 w-4" />
                  <span>Reports</span>
                </a>
                <a className="flex items-center space-x-2 text-gray-400 hover:text-white" href="#">
                  <SettingsIcon className="h-4 w-4" />
                  <span>Settings</span>
                </a>
              </nav>
            </div>
          </div>
          <div className="flex items-center space-x-2">
            <Avatar>
              <AvatarImage alt="Jerry Wilson" src="/placeholder.svg?height=32&width=32" />
            </Avatar>
            <div>
              <div className="font-medium">Jerry Wilson</div>
              <div className="text-sm text-gray-400">View profile</div>
            </div>
          </div>
        </div>
        <div className="flex-1 p-6">
          <div className="flex items-center justify-between">
            <h1 className="text-2xl font-bold">Hello David</h1>
            <div className="flex items-center space-x-4">
              <StarIcon className="h-5 w-5 text-yellow-400" />
              <span className="bg-[#F59E0B] px-2 py-1 rounded text-xs font-semibold">PREMIUM</span>
              <div className="relative">
                <input className="pl-10" placeholder="search" type="search" />
                <MicroscopeIcon className="absolute left-2 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400" />
              </div>
            </div>
          </div>
          <div className="grid grid-cols-3 gap-6 mt-6">
            <div className="bg-[#111827] p-4 rounded-lg">
              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-2">
                  <Avatar>
                    <AvatarImage alt="Esther Howard" src="/placeholder.svg?height=32&width=32" />
                  </Avatar>
                  <div>
                    <div className="font-medium">Esther Howard</div>
                    <div className="text-sm text-gray-400">Sale's manager USA</div>
                  </div>
                </div>
                <CheckIcon className="h-5 w-5 text-green-500" />
              </div>
              <div className="mt-4">
                <div className="text-2xl font-bold">$3490.00</div>
                <div className="text-sm text-gray-400">Last 6 month</div>
              </div>
              <Progress className="w-full mt-2 bg-[#374151] h-1.5 rounded" value={60} />
              <div className="text-sm mt-1">3 from 5 tasks completed</div>
            </div>
            <div className="bg-[#111827] p-4 rounded-lg">
              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-2">
                  <Avatar>
                    <AvatarImage alt="Eleanor Pena" src="/placeholder.svg?height=32&width=32" />
                  </Avatar>
                  <div>
                    <div className="font-medium">Eleanor Pena</div>
                    <div className="text-sm text-gray-400">Sale's manager Europe</div>
                  </div>
                </div>
                <CheckIcon className="h-5 w-5 text-green-500" />
              </div>
              <div className="mt-4">
                <div className="text-2xl font-bold">$590.00</div>
                <div className="text-sm text-gray-400">Last 6 month</div>
              </div>
              <Progress className="w-full mt-2 bg-[#374151] h-1.5 rounded" value={100} />
              <div className="text-sm mt-1">5 from 5 tasks completed</div>
            </div>
            <div className="bg-[#111827] p-4 rounded-lg">
              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-2">
                  <Avatar>
                    <AvatarImage alt="Robert Fox" src="/placeholder.svg?height=32&width=32" />
                  </Avatar>
                  <div>
                    <div className="font-medium">Robert Fox</div>
                    <div className="text-sm text-gray-400">Sale's manager Asia</div>
                  </div>
                </div>
                <CheckIcon className="h-5 w-5 text-green-500" />
              </div>
              <div className="mt-4">
                <div className="text-2xl font-bold">$2600.00</div>
                <div className="text-sm text-gray-400">Last 6 month</div>
              </div>
              <Progress className="w-full mt-2 bg-[#374151] h-1.5 rounded" value={20} />
              <div className="text-sm mt-1">1 from 5 tasks completed</div>
            </div>
          </div>
          <div className="grid grid-cols-3 gap-6 mt-6">
            <div className="col-span-2 bg-[#111827] p-4 rounded-lg">
              <div className="flex justify-between items-center">
                <h2 className="font-semibold">Your Work Summary</h2>
                <div className="flex items-center space-x-2">
                  <span className="text-sm">Last 9 Months</span>
                  <MessageCircleQuestionIcon className="h-4 w-4 text-gray-400" />
                </div>
              </div>
              <CurvedlineChart className="w-full h-[300px]" />
            </div>
            <div className="bg-[#111827] p-4 rounded-lg">
              <div className="flex justify-between items-center">
                <h2 className="font-semibold">Top Countries</h2>
                <div className="flex items-center space-x-2">
                  <span className="text-sm">favourites</span>
                  <PlusIcon className="h-4 w-4 text-gray-400" />
                </div>
              </div>
              <div className="mt-4 space-y-2">
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-2">
                    <span className="text-sm">1</span>
                    <FlagIcon className="h-4 w-6" />
                    <span>USA</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <span className="font-bold">$21,942.83</span>
                    <TrendingUpIcon className="h-4 w-4 text-green-500" />
                  </div>
                </div>
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-2">
                    <span className="text-sm">2</span>
                    <FlagIcon className="h-4 w-6" />
                    <span>Ireland</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <span className="font-bold">$19,710</span>
                    <TrendingDownIcon className="h-4 w-4 text-red-500" />
                  </div>
                </div>
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-2">
                    <span className="text-sm">3</span>
                    <FlagIcon className="h-4 w-6" />
                    <span>Ukraine</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <span className="font-bold">$12,320.3</span>
                    <TrendingUpIcon className="h-4 w-4 text-green-500" />
                  </div>
                </div>
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-2">
                    <span className="text-sm">4</span>
                    <FlagIcon className="h-4 w-6" />
                    <span>Sweden</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <span className="font-bold">$9,725</span>
                    <TrendingDownIcon className="h-4 w-4 text-red-500" />
                  </div>
                </div>
              </div>
              <a className="block mt-4 text-sm text-gray-400 hover:text-white" href="#">
                Check All
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

function BarChartIcon(props) {
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
      <line x1="12" x2="12" y1="20" y2="10" />
      <line x1="18" x2="18" y1="20" y2="4" />
      <line x1="6" x2="6" y1="20" y2="16" />
    </svg>
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


function ChevronDownIcon(props) {
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
      <path d="m6 9 6 6 6-6" />
    </svg>
  )
}


function CircleCheckIcon(props) {
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
      <path d="m9 12 2 2 4-4" />
    </svg>
  )
}


function ClipboardListIcon(props) {
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
      <rect width="8" height="4" x="8" y="2" rx="1" ry="1" />
      <path d="M16 4h2a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h2" />
      <path d="M12 11h4" />
      <path d="M12 16h4" />
      <path d="M8 11h.01" />
      <path d="M8 16h.01" />
    </svg>
  )
}


function CurvedlineChart(props) {
  return (
    <div {...props}>
      <ResponsiveLine
        data={[
          {
            id: "Desktop",
            data: [
              { x: "Jan", y: 43 },
              { x: "Feb", y: 137 },
              { x: "Mar", y: 61 },
              { x: "Apr", y: 145 },
              { x: "May", y: 26 },
              { x: "Jun", y: 154 },
            ],
          },
          {
            id: "Mobile",
            data: [
              { x: "Jan", y: 60 },
              { x: "Feb", y: 48 },
              { x: "Mar", y: 177 },
              { x: "Apr", y: 78 },
              { x: "May", y: 96 },
              { x: "Jun", y: 204 },
            ],
          },
        ]}
        margin={{ top: 10, right: 10, bottom: 40, left: 40 }}
        xScale={{
          type: "point",
        }}
        yScale={{
          type: "linear",
          min: 0,
          max: "auto",
        }}
        curve="monotoneX"
        axisTop={null}
        axisRight={null}
        axisBottom={{
          tickSize: 0,
          tickPadding: 16,
        }}
        axisLeft={{
          tickSize: 0,
          tickValues: 5,
          tickPadding: 16,
        }}
        colors={["#2563eb", "#e11d48"]}
        pointSize={6}
        useMesh={true}
        gridYValues={6}
        theme={{
          tooltip: {
            chip: {
              borderRadius: "9999px",
            },
            container: {
              fontSize: "12px",
              textTransform: "capitalize",
              borderRadius: "6px",
            },
          },
          grid: {
            line: {
              stroke: "#f3f4f6",
            },
          },
        }}
        role="application"
      />
    </div>
  )
}


function DribbbleIcon(props) {
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
      <path d="M19.13 5.09C15.22 9.14 10 10.44 2.25 10.94" />
      <path d="M21.75 12.84c-6.62-1.41-12.14 1-16.38 6.32" />
      <path d="M8.56 2.75c4.37 6 6 9.42 8 17.72" />
    </svg>
  )
}


function FlagIcon(props) {
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
      <path d="M4 15s1-1 4-1 5 2 8 2 4-1 4-1V3s-1 1-4 1-5-2-8-2-4 1-4 1z" />
      <line x1="4" x2="4" y1="22" y2="15" />
    </svg>
  )
}


function LayoutGridIcon(props) {
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
      <rect width="7" height="7" x="3" y="3" rx="1" />
      <rect width="7" height="7" x="14" y="3" rx="1" />
      <rect width="7" height="7" x="14" y="14" rx="1" />
      <rect width="7" height="7" x="3" y="14" rx="1" />
    </svg>
  )
}


function MessageCircleIcon(props) {
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
      <path d="M7.9 20A9 9 0 1 0 4 16.1L2 22Z" />
    </svg>
  )
}


function MessageCircleQuestionIcon(props) {
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
      <path d="M7.9 20A9 9 0 1 0 4 16.1L2 22Z" />
      <path d="M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3" />
      <path d="M12 17h.01" />
    </svg>
  )
}


function MicroscopeIcon(props) {
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
      <path d="M6 18h8" />
      <path d="M3 22h18" />
      <path d="M14 22a7 7 0 1 0 0-14h-1" />
      <path d="M9 14h2" />
      <path d="M9 12a2 2 0 0 1-2-2V6h6v4a2 2 0 0 1-2 2Z" />
      <path d="M12 6V3a1 1 0 0 0-1-1H9a1 1 0 0 0-1 1v3" />
    </svg>
  )
}


function PlusIcon(props) {
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
      <path d="M5 12h14" />
      <path d="M12 5v14" />
    </svg>
  )
}


function SettingsIcon(props) {
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
      <path d="M12.22 2h-.44a2 2 0 0 0-2 2v.18a2 2 0 0 1-1 1.73l-.43.25a2 2 0 0 1-2 0l-.15-.08a2 2 0 0 0-2.73.73l-.22.38a2 2 0 0 0 .73 2.73l.15.1a2 2 0 0 1 1 1.72v.51a2 2 0 0 1-1 1.74l-.15.09a2 2 0 0 0-.73 2.73l.22.38a2 2 0 0 0 2.73.73l.15-.08a2 2 0 0 1 2 0l.43.25a2 2 0 0 1 1 1.73V20a2 2 0 0 0 2 2h.44a2 2 0 0 0 2-2v-.18a2 2 0 0 1 1-1.73l.43-.25a2 2 0 0 1 2 0l.15.08a2 2 0 0 0 2.73-.73l.22-.39a2 2 0 0 0-.73-2.73l-.15-.08a2 2 0 0 1-1-1.74v-.5a2 2 0 0 1 1-1.74l.15-.09a2 2 0 0 0 .73-2.73l-.22-.38a2 2 0 0 0-2.73-.73l-.15.08a2 2 0 0 1-2 0l-.43-.25a2 2 0 0 1-1-1.73V4a2 2 0 0 0-2-2z" />
      <circle cx="12" cy="12" r="3" />
    </svg>
  )
}


function StarIcon(props) {
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
      <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
    </svg>
  )
}


function TrendingDownIcon(props) {
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
      <polyline points="22 17 13.5 8.5 8.5 13.5 2 7" />
      <polyline points="16 17 22 17 22 11" />
    </svg>
  )
}


function TrendingUpIcon(props) {
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
      <polyline points="22 7 13.5 15.5 8.5 10.5 2 17" />
      <polyline points="16 7 22 7 22 13" />
    </svg>
  )
}


function UsersIcon(props) {
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
      <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" />
      <circle cx="9" cy="7" r="4" />
      <path d="M22 21v-2a4 4 0 0 0-3-3.87" />
      <path d="M16 3.13a4 4 0 0 1 0 7.75" />
    </svg>
  )
}