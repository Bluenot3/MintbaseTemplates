export function LoadingSaleCard() {
  return (
    <div className="mb-4">
      <div className="bg-gray-50 py-4 flex justify-center animate-pulse">
        <div className="h-6 w-36 rounded bg-gray-600" />
      </div>
      <div className="p-4 animate-pulse">
        <div className="mb-8">
          <div className="h-16 w-full rounded bg-gray-600" />
          <div className="h-16 w-full rounded bg-gray-600" />
        </div>
        <div className="flex justify-center">
          <div className="h-9 w-40 rounded bg-gray-600" />
        </div>
      </div>
    </div>
  );
}
