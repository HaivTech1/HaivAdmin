import Link from 'next/link'
import Image from 'next/image'

const AuthCard = ({ children }) => {
  return (
    <div className="grid place-items-center bg-gray-200 text-black antialiased dark:bg-background-color">
      <section className="h-full gradient-form md:h-screen">
        <div className="container py-12 px-6 h-full">
          <div className="flex justify-center items-center flex-wrap h-full g-6 text-gray-800">
            <div className="xl:w-10/12">
              <div className="block bg-white shadow-lg rounded-lg">
                <div className="lg:flex lg:flex-wrap g-0">
                  <div className="lg:w-6/12 px-4 md:px-0">
                    <div className="md:p-12 md:mx-6">
                      <div className="text-center my-4">
                        <a href="/">
                          <Image
                            className="mx-auto w-48"
                            src="/favicon.ico"
                            alt="logo"
                            width={50}
                            height={50}
                          />
                        </a>
                      </div>
                      {children}
                    </div>
                  </div>
                  <div className="big-background lg:w-6/12 flex items-center lg:rounded-r-lg rounded-b-lg lg:rounded-bl-none">
                    <div className="text-white px-4 py-6 md:p-12 md:mx-6">
                      <h4 className="text-xl font-semibold mb-6">
                        We are more than just a company
                      </h4>
                      <p className="text-sm">
                        We are the truth that holds the pillar of the future; We are the light that
                        guides the intention of the future; We are the sweetness of a bee; We are a
                        big family!
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default AuthCard
