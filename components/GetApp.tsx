import Image from "next/image"
import Button from "./Button"

function GetApp() {
  return (
    <section className="flex-center w-full flex-col pb-[100px]">
      <div className="get-app">
        <div className="z-20 flex-w-full flex-1 flex-col items-start justify-centergap-12">
          <h2 className="bold-40 lg:bold-64 xl:max-w-[320px]">Get for free now!</h2>
          <p className="regular-16 text-gray-10">Avalable on ISO and Android</p>

          <div className="flex w-full flex-col gap-3 whitespace-nowrap xl:flex-row">
            <Button 
            type="button"
            title="App Store"
            icon="/apple.svg"
            varient="btn_white"
            full
            />
             <Button 
              type="button"
              title="Play Store"
              icon="/android.svg"
              varient="btn_dark_green_outline"
              full
            />
          </div>
        </div>

        <div className="flex flex-1 items-center justify-end">
          <Image
          src="/phones.png" alt="phones" width={550} height={870} 
          />
        </div>
      </div>
    </section>
  )
}

export default GetApp