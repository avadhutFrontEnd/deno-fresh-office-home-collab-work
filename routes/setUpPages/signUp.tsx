import React from "preact/compat";
import { signal } from "@preact/signals";
import SetUp from "../../islands/sign-up.tsx";
import { useRef, useEffect } from 'preact/hooks';


export default function newVideoEdit() {
  const count = signal(0);
  
  return (
    <>
      <SetUp></SetUp>
    </>
  );
}
