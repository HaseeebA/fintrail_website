import Image from "next/image";
import React from "react";
import { Container } from "@/components/Container";

import userOneImg from "../../public/img/user1.jpg";
import userTwoImg from "../../public/img/user2.jpg";
import userThreeImg from "../../public/img/user3.jpg";


export const Testimonials = () => {
  return (
    <Container>
      <div className="grid gap-10 lg:grid-cols-2 xl:grid-cols-3">
        <div className="lg:col-span-2 xl:col-auto">
          <div className="flex flex-col justify-between w-full h-full bg-gray-100 px-14 rounded-2xl py-14 dark:bg-trueGray-800">
            <p className="text-2xl leading-normal ">
              The <Mark>automatic expense tracking</Mark> from SMS is a game-changer! 
              I used to spend hours logging expenses, but now FinTrail does it all 
              instantly. It&apos;s transformed how I manage my monthly budget.
            </p>

            <Avatar
              image={userOneImg}
              name="Sara Khan"
              title=""
            />
          </div>
        </div>
        <div className="">
          <div className="flex flex-col justify-between w-full h-full bg-gray-100 px-14 rounded-2xl py-14 dark:bg-trueGray-800">
            <p className="text-2xl leading-normal ">
              Having my <Mark>stocks and bill-splitting</Mark> in one app is brilliant. 
              I use it daily with my roommates, and the real-time portfolio updates 
              keep me on top of my investments.
            </p>

            <Avatar
              image={userTwoImg}
              name="Isaac Abraham"
              title=""
            />
          </div>
        </div>
        <div className="">
          <div className="flex flex-col justify-between w-full h-full bg-gray-100 px-14 rounded-2xl py-14 dark:bg-trueGray-800">
            <p className="text-2xl leading-normal ">
              The <Mark>dark mode and mobile-first design</Mark> make it perfect for 
              daily use. Love how I can check my crypto portfolio and track expenses 
              on the go!
            </p>

            <Avatar
              image={userThreeImg}
              name="Saad Hassan"
              title=""
            />
          </div>
        </div>
      </div>
    </Container>
  );
};

interface AvatarProps {
  image: any;
  name: string;
  title: string;
}

function Avatar(props: Readonly<AvatarProps>) {
  return (
    <div className="flex items-center mt-8 space-x-3">
      <div className="flex-shrink-0 rounded-full overflow-hidden">
        <Image
          src={props.image}
          width="40"
          height="40"
          alt="Avatar"
          placeholder="blur"
        />
      </div>
      <div>
        <div className="text-lg font-medium">{props.name}</div>
        <div className="text-gray-600 dark:text-gray-400">{props.title}</div>
      </div>
    </div>
  );
}

function Mark(props: { readonly children: React.ReactNode }) {
  return (
    <>
      {" "}
      <mark className="text-indigo-50 bg-indigo-100 rounded-md ring-indigo-100 ring-4 dark:ring-indigo-900 dark:bg-indigo-900 dark:text-indigo-50">
        {props.children}
      </mark>{" "}
    </>
  );
}
