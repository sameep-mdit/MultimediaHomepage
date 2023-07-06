import { TextInput, Textarea, Title, Button, Checkbox } from "@mantine/core";

import { useForm } from "@mantine/form";

import { axiosInstance } from "../../../config/axiosInstance";
import { toast } from "react-toastify";
// import { contactForm } from "../../../api/blog";

export interface ContactFormType {
  name: string;
  email: string;
  description: string;
}

const ContactForm = () => {
  const form = useForm<ContactFormType>({
    initialValues: {
      name: "",
      email: "",
      description: "",
    },
    validate: {
      name: (data) => (!data ? "Type Your Name" : null),
      email: (data) => (!data ? "Type email address." : null),
      description: (data) => (!data ? "Write Your Message" : null),
    },
  });
  const submitHandler = async (data: ContactFormType) => {
    try {
      const response = await axiosInstance.post("/post-contact", data);
      console.log(response.data);
      toast("Form Successfully Added");
      form.reset();
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <form
      className="grid gap-4 p-4 rounded-lg bg-white text-gray-800 rounded-lg;"
      onSubmit={form.onSubmit(submitHandler)}
    >
      <div className="grid gap-2">
        <Title order={2} className="text-gray-800 font-semibold text-center">
          Send Message
        </Title>
        <TextInput
          size="xs"
          label="Full Name:"
          className="text-gray-200"
          {...form.getInputProps("name")}
        />
        <TextInput size="xs" label="Email:" {...form.getInputProps("email")} />
        <Textarea
          size="xs"
          label="Type your message:"
          {...form.getInputProps("description")}
        />
        <Checkbox
          name="agree"
          label="I agree with all the terms and conditions."
        />
      </div>
      <Button className=" content-center" type="submit">
        Submit
      </Button>
    </form>
  );
};

export default ContactForm;
