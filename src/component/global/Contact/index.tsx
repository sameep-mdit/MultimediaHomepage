import { Text } from "@mantine/core";
import { Icon } from "@iconify/react";
import ContactForm from "../../Forms/Contact";

import style from "./style.module.scss";

const ContactPage = () => {
  return (
    <div className={style.contactcomponent}  id="contact-section">
      <Text className={style.ContactTitle}>Contact Us</Text>
      <div className="flex flex-col gap-4 md:flex-row justify-between sm:mb-20">
        <div className="sm:px-40 mt-5">
          <div className={style.contactWrapper}>
            <Icon
              className={style.LocationIcon}
              icon="material-symbols:phone-in-talk"
            />
            <div className="">
              <Text className="text-xl font-bold ">Phone</Text>
              <Text>+977 9867872115</Text>
            </div>
          </div>

          <div className={style.contactWrapper}>
            <Icon className={style.LocationIcon} icon="mdi:email" />
            <div>
              <Text className="text-xl font-bold ">Email</Text>
              <Text>contact.mditsystem@gmail.com</Text>
            </div>
          </div>

          <div className={style.contactWrapper}>
            <Icon
              className={style.LocationIcon}
              icon="mdi:address-marker-outline"
            />
            <div>
              <Text className="text-xl font-bold ">Address</Text>
              <Text>Srijanagar,Bhaktapur</Text>
              <Text>Nepal, 44601</Text>
            </div>
          </div>
        </div>
        <div className=" w-full max-w-sm ">
          <ContactForm />
        </div>
      </div>
    </div>
  );
};

export default ContactPage;
