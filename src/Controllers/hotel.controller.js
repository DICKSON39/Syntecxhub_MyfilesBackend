import Hotel from "../models/Hotel.js"

export const createHotel = async (req,res)=> {
    try {
        //destruring of the data coming from the client side
       const {name,location,noOfRooms,parking} = req.body 

       const hotel = await Hotel.create({
        name,
        location,
        noOfRooms,
        parking
       });

       if(!hotel) {
        res.status(400).json({
            message: "Failed to add the hotel"
        });
       }
       

      return res.status(201).json({
      message:  "Hotel Created successfully ",
      hotel
       })
    } catch (error) {
         res.status(500).json({ message: "Server Error", error});
    }
}

export const getAllHotels = async (req,res)=> {
    try {
        const hotel = await Hotel.find();

    return res.status(200).json({
        message: "Here are the hotels",
        data:hotel
    })
    } catch (error) {
        res.status(500).json({
            message: "server error man sorry",
            error
        })
        
    }
}

export const getHotelById = async(req,res)=> {
    try {
        const hotel = await Hotel.findById(req.params.id);
        if(!hotel) {
            return res.status(404).json({
                message: "product not found"
            })
        }

        res.json(hotel)
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
}

export const updateHotel = async (req, res) => {
  try {
    const hotel = await Hotel.findById(req.params.id);

    if (!hotel) {
      return res.status(404).json({ message: "Product not found" });
    }

    const updated = await Hotel.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true }
    );

    res.json(updated);

  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};


// Delete Hotel
export const deleteHotel = async (req, res) => {
  try {
    const hotel = await Hotel.findById(req.params.id);

    if (!hotel) {
      return res.status(404).json({ message: "Product not found" });
    }

     await hotel.deleteOne();

    res.json({ message: "Hotel deleted successfully"});

  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};