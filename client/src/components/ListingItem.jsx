import React from "react";
import { Link } from "react-router-dom";
import { MdLocationOn } from "react-icons/md";

export default function ListingItem({ listing }) {
  return (
    <div className="bg-white shadow-md hover:shadow-lg transition-shadow overflow-hidden rounded-lg w-full sm:w-[280px] ">
      <Link to={`/listing/${listing._id}`}>
        <img
          className="h-[320px] sm:h-220px w-full object-cover hover:scale-105 transition-scale duration-300"
          src={
            listing.imageUrls[0] ||
            "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQvsF5iH38F1Ux7RxPAc19ZtBq2qumtdFG9aQ&s"
          }
          alt="Listing Cover"
        />
        <div className="p-3 flex flex-col gap-2 w-full mt-2">
          <p className="text-lg font-semibold text-slate-700 truncate">
            {listing.name}
          </p>
          <div className="flex gap-1 items-center">
            <MdLocationOn className="h-5 w-5 text-green-600" />
            <p className="text-base text-gray-700 truncate w-full">
              {listing.address}
            </p>
          </div>
          <p className="line-clamp-2 text-sm text-gray-600">
            {listing.description}
          </p>
          <p className="font-semibold text-slate-500 mt-2">
            $
            {listing.offer
              ? listing.discountPrice.toLocaleString("en-US")
              : listing.regularPrice.toLocaleString("en-US")}
            {listing.type === "rent" && " / month"}
          </p>
          <div className="text-slate-700 flex gap-4">
            <div className="font-bold text-sm">
              {listing.bedrooms > 1
                ? `${listing.bedrooms} Beds`
                : `${listing.bedrooms} Bed`}
            </div>
            <div className="font-bold text-sm">
              {listing.bathrooms > 1
                ? `${listing.bathrooms} Bathrooms`
                : `${listing.bathrooms} Bathroom`}
            </div>
          </div>
        </div>
      </Link>
    </div>
  );
}
