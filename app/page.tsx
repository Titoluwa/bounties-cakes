import { Button } from "@/components/ui/button";

export default function Home() {
  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <main className="flex flex-col gap-8 row-start-2 place-items-center" >
        <p className="text-6xl text-violet-500 font-bold">Bounties Cakes</p>

        <div className="flex flex-row space-x-4">
          <Button variant={"outline"}>Home</Button>
        </div>
        
      </main>
    </div>
  );
}

// https://api.whatsapp.com/send?phone=2349059642793&text=testiingsafsaf\messaege