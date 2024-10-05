import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

export default function Contact({ listing }) {
  const [landlord, setLandlord] = useState(null);
  const [message, setMessage] = useState("");

  const onChange = (e) => {
    setMessage(e.target.value);
  };

  useEffect(() => {
    const fetchLandlord = async () => {
      try {
        const res = await fetch(`/api/user/${listing.userRef}`);
        const data = await res.json();
        setLandlord(data);
      } catch (error) {
        console.log(error);
      }
    };
    fetchLandlord();
  }, [listing.userRef]);
  return (
    <>
      {landlord && (
        <div className="flex flex-col gap-2">
          <p>
            Contact{" "}
            <span className="font-semibold hover:text-purple-700 text-md">
              {landlord.username}
            </span>{" "}
            for{" "}
            <span className="font-semibold hover:text-purple-700 text-md">
              {listing.name.toLowerCase()}
            </span>
          </p>
          <textarea
            className="w-full border p-3 rounded-lg"
            rows="2"
            name="message"
            id="message"
            placeholder="Enter your message here..."
            value={message}
            onChange={onChange}
          ></textarea>

          <div className="flex justify-center">
            <Link
              className="bg-slate-700 text-white text-center p-3 rounded-lg uppercase hover:opacity-95 w-[250px]"
              to={`mailto:${landlord.email}?subject=Regarding ${listing.name} &body=${message} `}
            >
              Send Message
            </Link>
          </div>
        </div>
      )}
    </>
  );
}
