import Head from "next/head";
import { Inter } from "@next/font/google";
import Navigation from "@/components/Navigation";
import AboutCard from "@/components/AboutCard";
import AnimateSlide from "@/components/AnimateSlide";
import Image from "next/image";
import { Button, CircularProgress, FormControl } from "@mui/material";
import { useForm } from "react-hook-form";
import axios from "axios";
import { useEffect, useState } from "react";
import Link from "next/link";

const inter = Inter({ subsets: ["latin"] });

enum SubmissionStep {
  "NotSubmitted",
  "Submitting",
  "Success",
  "Error",
}
const FormFields = {
  name: "",
  email: "",
  message: "",
};

export default function Home() {
  const {
    register,
    handleSubmit,
    formState: { errors },
    setValue,
  } = useForm();

  useEffect(() => {
    axios
      .get("https://api.ipify.org?format=json")
      .then((response) => {
        setValue("ip", response.data.ip);
      })
      .catch((error) => {
        console.error("Error fetching IP address", error);
      });
  }, []);

  const [submissionStep, setSubmissionStep] = useState<SubmissionStep>(
    SubmissionStep.NotSubmitted
  );

  const submitForm = (data: any) => {
    setSubmissionStep(SubmissionStep.Submitting);

    // send post request to api
    axios
      .post("https://formspree.io/f/xrgvnyla", data)
      .then((response) => {
        setSubmissionStep(SubmissionStep.Success);
      })
      .catch((error) => {
        setSubmissionStep(SubmissionStep.Error);
      });
  };

  const Success = () => (
    <>
      <h1 className="mb-4 text-2xl text-white">Thank you for your message</h1>
      <h1 className="text-xl text-white">
        We&apos;ll get back to you as soon as possible
      </h1>
    </>
  );

  const Error = () => (
    <h1 className="text-xl text-white">
      Sorry there was a problem submitting this form
    </h1>
  );

  const Submitting = () => (
    <CircularProgress className="m-auto" sx={{ color: "white" }} />
  );

  const Form = () => (
    <form onSubmit={handleSubmit((data) => submitForm(data))} method="POST">
      <FormControl className="w-full gap-2">
        {Object.entries(FormFields).map(([key, value]) => (
          <div key={key} className="grid w-full gap-2">
            <label className="grid text-2xl font-bold text-white">{key}</label>
            {key === "message" ? (
              <textarea
                className="grid w-full p-2 text-black rounded-lg"
                {...register(key)}
                required
              ></textarea>
            ) : (
              <input
                className="grid w-full p-2 text-black rounded-lg"
                {...register(key)}
                type={key}
                required
              />
            )}
          </div>
        ))}
        <div className="grid w-full mt-3">
          <Button
            style={{ backgroundColor: "green" }}
            className="grid m-auto"
            variant="contained"
            type="submit"
          >
            Submit
          </Button>
        </div>
      </FormControl>
    </form>
  );
  return (
    <>
      <Head>
        <title>Luminisona</title>
        <meta name="description" content="Luminisona" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
        <meta name="robots" content="all" />
      </Head>
      <div className="">
        <div className="grid w-full h-1/6 ">
          <AnimateSlide direction="down" delay={500}>
            <Navigation />
          </AnimateSlide>
        </div>
        <div className="flex flex-col items-center justify-center w-full gap-6 p-5 text-white lg:flex-row h-5/6">
          <div className="visible p-2 bg-gray-700 lg:hidden rounded-xl">
            Contact form for bookings and other business inquiries is below.
          </div>
          <div className="flex flex-col flex-1 gap-4 p-6">
            <AnimateSlide direction="right">
              <Image
                src="/project-images/luminisona.png"
                alt="Luminisona"
                width={500}
                height={500}
                className="m-auto rounded-xl"
              />
            </AnimateSlide>
            <p className="">
              Luminisona is an immersive art installation where sound and light
              converge to create a captivating experience. Its design is
              inspired by the harmony of nature and technology, the piece
              transforms rustic wood and modern LED systems into a living canvas
              of color and sound. As visitors step inside, the lights,
              synchronized with the rhythm of the deep house beats, dance across
              the textured wooden panels, creating a visual symphony that feels
              alive. Luminisona invites passersby to pause, immerse themselves,
              and witness the beauty of two worlds blending seamlessly.
            </p>
            <div className="flex flex-col gap-4 ">
              <p>You can checkout Luminisona at:</p>
              <Image
                src={
                  "https://www.chinookblast.ca/wp-content/uploads/2022/11/ChinookBlast-Logo-White.svg"
                }
                alt={""}
                width={100}
                height={100}
              />

              <Link
                className="underline"
                href={"https://www.chinookblast.ca/events/luminisona/"}
              >
                Chinook Blast, Calgary&apos;s Winter Festival
              </Link>
            </div>
          </div>
          <div className="flex flex-col items-start justify-between flex-1 h-full gap-10 p-6 bg-gray-600 rounded-xl">
            <div>
              <p className="text-xl">
                For business inquiries, questions or bookings of the art piece,
                please reach out with the form below or luminisona@ideen.ca
              </p>
            </div>

            <div className="grid w-full m-auto">
              {submissionStep === SubmissionStep.NotSubmitted && <Form />}
              {submissionStep === SubmissionStep.Submitting && <Submitting />}
              {submissionStep === SubmissionStep.Success && <Success />}
              {submissionStep === SubmissionStep.Error && <Error />}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
