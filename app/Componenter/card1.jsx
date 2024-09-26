"use client";

import { Card } from "flowbite-react";
import React from "react";

export function CardComponent({ imgSrc, imgAlt, title, description, linkUrl }) {
  return (
    <a href={linkUrl} target="_blank" rel="noopener noreferrer">
      <Card className="card1 flex flex-col items-center sm:items-start">
        <img
          className="imgcard1 w-full h-auto sm:max-w-xs"
          src={imgSrc}
          alt={imgAlt}
        />
        <h5 className="text-lg font-bold tracking-tight text-gray-900 dark:text-white mt-4">
          {title}
        </h5>
        <p className="text-sm mt-2 text-gray-700 dark:text-gray-400 text-center sm:text-left">
          {description}
        </p>
      </Card>
    </a>
  );
}
