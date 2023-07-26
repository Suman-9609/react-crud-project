import { Navbar } from "./components/Navbar";
import { FiSearch } from "react-icons/fi";
import { AiFillPlusCircle } from "react-icons/ai";
import { HiOutlineUserCircle } from "react-icons/hi";
import { RiEditCircleLine } from "react-icons/ri";
import { IoMdTrash } from "react-icons/io";
import { useEffect, useState } from "react";
import { collection, getDocs, onSnapshot } from "firebase/firestore";
import { db } from "./config/firebase";
import ContactCard from "./components/ContactCard";
import Model from "./components/Model";
import AddAndUpdateContact from "./components/AddAndUpdateContact";
import useDisclouse from "./hooks/useDisclouse";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const App = () => {
  const [contacts, setContacts] = useState([]); // for database
  const { onClose, onOpen, isOpen } = useDisclouse(); //for model

  useEffect(() => {
    const getContacts = async () => {
      const contactRef = collection(db, "contacts");

      onSnapshot(contactRef, (snapshot) => {
        const contactList = snapshot.docs.map((doc) => {
          return {
            id: doc.id,
            ...doc.data(),
          };
        });
        setContacts(contactList);
        // console.log(contactList);
        return contactList;
      });
    };
    getContacts();
  }, []);

  const filterContacts = (e) => {
    const value = e.target.value;

    const contactRef = collection(db, "contacts");

      onSnapshot(contactRef, (snapshot) => {
        const contactList = snapshot.docs.map((doc) => {
          return {
            id: doc.id,
            ...doc.data(),
          };
        });


        const filteredContacts = contactList.filter((contact) => contact.name.toLowerCase().includes(value.toLowerCase()));

        setContacts(filteredContacts);


        return  filteredContacts
      });
  }

  return (
    <>
      <div className="w-[370px] mx-auto">
        <Navbar />

        <div className="flex gap-2">
          <div className="flex relative items-center flex-grow">
            <FiSearch className="text-3xl text-white absolute ml-1" />
            <input onChange={filterContacts}
              type="text"
              className="h-[40px] bg-transparent border rounded flex-grow text-white text-xl pl-10"
            />
          </div>
          <AiFillPlusCircle
            onClick={onOpen}
            className="text-5xl text-white cursor-pointer"
          />
        </div>

        <div className="mt-3">
          {contacts.map((contact) => (
            <ContactCard key={contact.id} contact={contact} />
          ))}
        </div>
      </div>
      <AddAndUpdateContact isOpen={isOpen} onClose={onClose} />
      <ToastContainer />
    </>
  );
};

export default App;
