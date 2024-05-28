"use client";

import { Card } from "flowbite-react";
import React from "react";

export function CardComponent({ imgSrc, imgAlt, title, description, linkUrl }) {
  return (
    <a href={linkUrl} target="_blank" rel="noopener noreferrer">
      <Card className="card1">
        <img className="imgcard1" src={imgSrc} alt={imgAlt} />
        <h5 className="text-xl font-bold tracking-tight text-gray-900 dark:text-white">
          {title}
        </h5>
        <p className="text-sm ml-4   leading-tight text-gray-700 dark:text-gray-400">
          {description}
        </p>
      </Card>
    </a>
  );
}
