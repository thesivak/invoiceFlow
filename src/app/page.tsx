export default function Home() {
  return (
    <div className="flex items-center justify-center min-h-screen">
      <div className="w-[800px] h-[600px] rounded-lg border border-gray-200 dark:border-gray-800 flex flex-col items-center justify-center">
        <h1 className="text-3xl font-bold mb-6">Invoices Flow</h1>
        <label className="text-sm mb-2" htmlFor="file-upload">
          Select a file to upload:
        </label>
        <input
          type="file"
          id="file-upload"
          name="file-upload"
          className="block w-96 text-sm text-slate-500
                     file:mr-4 file:py-2 file:px-4
                     file:rounded-md file:border-0
                     file:text-sm file:font-semibold
                     file:bg-foreground file:text-background
                     hover:file:bg-gray-300
                     dark:hover:file:bg-gray-700
                     cursor-pointer mb-4"
        />
      </div>
    </div>
  );
}
