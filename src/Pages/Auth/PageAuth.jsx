//import Login from "./Login"

import Register from "./Register"

const PageAuth = () => {
  return (
    <>
      <section className="flex w-full items-start justify-center bg-[url('https://tailframes.com/images/squares-bg.webp')] bg-cover bg-center bg-no-repeat">
        <div className="m-auto flex max-w-screen-ms grow flex-col items-center justify-start gap-6 px-3 py-20 md:gap-12 md:px-12 lg:max-w-7xl lg:px-24">
          {/* <Login /> */}
          <Register />
        </div>
      </section>
    </>
  )
}

export default PageAuth