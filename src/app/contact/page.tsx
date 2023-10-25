"use client";

import React, { ChangeEvent, FormEvent, useState } from "react";
import Link from "next/link";
// @types
import { ResponseData } from "../../../@types/contact";
//
import styles from "./page.module.css";

type InputForm = {
  email: string;
  name: string;
};

const initialInputForm = {
  email: "",
  name: "",
};

export default function Contact() {
  const [inputForm, setInputForm] = useState<InputForm>(initialInputForm);

  const [isSuccess, setIsSuccess] = useState(false);
  const [contact, setContact] = useState(initialInputForm);

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    await fetch("/api/contact", {
      method: "POST",
      body: JSON.stringify(inputForm),
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
    })
      .then((res) => res.json())
      .then((data: ResponseData) => {
        if (data.code === 200) {
          setIsSuccess(true);
          setContact((prev) => ({
            ...prev,
            ...data.data,
          }));
        }
      });
  };

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;

    setInputForm((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  return (
    <>
      <h1 style={{ width: "100%", display: "block" }}>Contact page</h1>
      <form onSubmit={handleSubmit}>
        <div className={styles["form-container"]}>
          <input
            type="email"
            name="email"
            value={inputForm.email}
            onChange={handleChange}
          />
          <input
            type="text"
            name="name"
            value={inputForm.name}
            onChange={handleChange}
          />
          <button type="submit">Submit</button>
        </div>
      </form>

      {isSuccess && (
        <div className={styles["contact-list"]}>
          <h1>Contact List</h1>
          <div className={styles["contact-detail"]}>
            <h3>Email: {contact.email}</h3>
            <h3>Name: {contact.name}</h3>
          </div>
        </div>
      )}

      <div className={styles.button}>
        <Link href="/">Home</Link>
        <Link href="blog">Blogs</Link>
      </div>
    </>
  );
}
