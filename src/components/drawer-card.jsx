import React, { useContext } from "react";
import {
  Drawer,
  Button,
  Typography,
  IconButton,
  ButtonGroup,
} from "@material-tailwind/react";
import { MainLayoutContext } from "../layouts/MainLayout";

export function DrawerCart() {

  const { openRight, closeDrawerRight, cardData, addCard, handleDecrementQuantity, removeCard, totalPrice } = useContext(MainLayoutContext);

  console.log(cardData)

  return (
    <React.Fragment>
      <Drawer
        placement="right"
        open={openRight}
        onClose={closeDrawerRight}
        className="p-4">
        <div className="mb-6 flex items-center justify-between">
          <Typography variant="h5" color="blue-gray">
            Your products
          </Typography>
          <IconButton variant="text" color="blue-gray" onClick={closeDrawerRight}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={2}
              stroke="currentColor"
              className="h-5 w-5"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </IconButton>
        </div>
        <div className="h-[80vh] overflow-y-scroll">
          {cardData.length > 0 && cardData.map((card) => {
            return (
              <div className=" cards">
                <div className="my-4 flex gap-3 justify-between bg-gray-50 p-3">
                  <div className="h-24 w-32 rounded shadow">
                    <img className="w-full h-full rounded" src={card.image} alt="img1" />
                  </div>

                  <div className=" text-left mb-2">
                    <div className="">
                      <h2>{card.title}</h2>
                      <h1>${Math.ceil(card.price * card.quantity)}</h1>

                    </div>
                    <div>
                      <ButtonGroup size="sm">
                        <Button onClick={() => handleDecrementQuantity(card.id)} className=" border-none bg-red-500">-</Button>
                        <Typography className="border-none bg-transparent text-black text-lg w-8 h-8 flex items-center justify-center">{card.quantity}</Typography>
                        <Button onClick={() => addCard(card)} className="border-none bg-blue-500">+</Button>
                      </ButtonGroup>
                    </div>
                  </div>
                </div>
                <ButtonGroup className=" relative -top-4" size="sm">
                  <Button onClick={() => removeCard(card.id)} className="border-none bg-gray-800 text-white ">
                    remove
                  </Button>
                  <Button className="border-none bg-gray-800 text-white ">
                    Add to favorites
                  </Button>
                </ButtonGroup>
                <div>
                </div>
              </div>
            )
          })}
        </div>
          <div>
            <h1 className="text-2xl ">Total: ${totalPrice}</h1>
          </div>
        <div className="flex gap-2">
          <Button size="sm" variant="outlined">
            Blog
          </Button>
          <Button size="sm">Savatni ko'rish</Button>
        </div>
      </Drawer>
    </React.Fragment>
  );
}