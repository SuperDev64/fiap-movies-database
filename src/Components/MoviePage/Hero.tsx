export default function Hero({url}: {url: string}) {
  return (
      <div
          className="py-56 relative bg-cover bg-center after:content-[''] after:absolute after:top-0 after:bottom-0 after:left-0 after:right-0 after:bg-gray-950/85"
          style={{backgroundImage: `url(${url})`}}
      ></div>
  )
}