export default function Spinner() {
  return (
    <div class="flex items-center justify-center min-h-screen">
      <button
        type="button"
        class="bg-red-500 h-max w-max rounded-lg text-white font-bold hover:bg-red-300 hover:cursor-not-allowed duration-[500ms,800ms]"
        disabled
      >
        <div class="flex items-center justify-center m-[10px]">
          <div class="h-5 w-5 border-t-transparent border-solid animate-spin rounded-full border-white border-4"></div>
          <div class="ml-2"> Loading...</div>
        </div>
      </button>
    </div>
  );
}
