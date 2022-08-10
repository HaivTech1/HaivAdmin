import Image from 'next/image';
import Link from 'next/link';

const AuthBase = () => {
  return (
    <>
      <div className="flex items-center my-4 before:flex-1 before:border-t before:border-gray-300 before:mt-0.5 after:flex-1 after:border-t after:border-gray-300 after:mt-0.5">
        <p className="text-center font-semibold mx-4 mb-0">OR</p>
      </div>

      <div className="flex justify-center items-center gap-2">
        <Link
          href="/"
          className="bg-white active:bg-blue-50 text-blue-700 px-4 py-2 rounded outline-none focus:outline-none mr-2 mb-1 uppercase shadow hover:shadow-md inline-flex items-center font-bold text-xs ease-linear transition-all duration-150"
        >
          <>
            <Image
              alt="..."
              className="w-5 mr-1"
              src="/static/github.svg"
              width="30px"
              height="30px"
            />
            Github
          </>
        </Link>
        <Link
          href="/"
          className="bg-white active:bg-blue-50 text-blue-700 px-4 py-2 rounded outline-none focus:outline-none mr-1 mb-1 uppercase shadow hover:shadow-md inline-flex items-center font-bold text-xs ease-linear transition-all duration-150"
        >
          <>
            <Image
              alt="..."
              className="w-5 mr-1"
              src="/static/google.svg"
              width="30px"
              height="30px"
            />
            Google
          </>
        </Link>
      </div>
    </>
  );
};

export default AuthBase;
