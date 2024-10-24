import Image from "next/image";

const Custom404 = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-80">
      <div className="text-center">
        {/* <Image
          src="/img/404.svg"
          alt="404 Not Found"
          width={400}
          height={400}
        /> */}
        <h1 className="mt-4 text-4xl font-bold text-gray-800 dark:text-gray-100">
          Page Not Found
        </h1>
        <p className="mt-2 text-lg text-gray-600 dark:text-gray-300">
          Sorry, we couldn&apos;t find the page you&apos;re looking for.
        </p>
      </div>
    </div>
  );
};

export default Custom404;